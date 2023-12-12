/**
 * File Name: authServices.js
 */
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { v4: uuid } = require('uuid');
const mailer = require('../utils/mailer');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const handleErrors = require('../utils/handleErrors');

exports.checkUserExists = handleErrors(async (email) => {
  const user = await User.findOne({ email });
  return user;
});

exports.hashPassword = handleErrors(async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
});

exports.createUser = handleErrors(async (body) => {
  const user = await User.create(body);
  return user.toJSON();
});

exports.generateEmailVerificationToken = handleErrors(async (payload, expiresIn) => {
  return await jwt.sign(payload, config.jwtEmailVerificationSecret, { expiresIn });
});

exports.validateEmailVerificationToken = handleErrors(async (token) => {
  const user = await User.findOne({ email_verification_token: token });
  if (!user) {
    return false;
  }
  const isTokenValid = token === user.email_verification_token ? true : false;
  return isTokenValid;
});

exports.verifyUserEmail = handleErrors(async (token) => {
  const user = await User.findOneAndUpdate(
    { email_verification_token: token },
    { email_verification_token: null, is_email_verified: true },
    { new: true }
  );
  if (!user) {
    throw new Error(MSG.USER_NOT_FOUND);
  }
});

// This method checks if the given old password matches the user's stored password
exports.checkPassword = handleErrors(async (storedPassword, oldPassword) => {
  const isMatch = await bcrypt.compare(oldPassword, storedPassword);
  return isMatch;
});

// This method updates the user's password with the new password
exports.updatePassword = handleErrors(async (userId, newPassword) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, salt);

  // Update the user's password in the database
  const updatedUser = await User.findByIdAndUpdate(userId, { password: hashedPassword }, { new: true });

  return updatedUser;
});

exports.generatePasswordResetToken = handleErrors(async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }

  const token = uuid();
  const expiresAt = new Date(Date.now() + 3600000); // 1 hour from now

  user.password_reset_token = token;
  user.password_reset_expiry = expiresAt;
  await user.save();

  return token;
});

exports.sendPasswordResetEmail = handleErrors(async (email, resetToken) => {
  let baseUrl = config.url.base_url;
  const resetUrl = `${baseUrl}/reset-password?token=${resetToken}`;

  const message = {
    from: 'Your Company <noreply@yourcompany.com>',
    to: email,
    subject: 'Password Reset Request',
    text: `Dear User,

  We have received a request to reset your password. To reset your password, please click on the following link:

  ${resetUrl}

  If you did not request this password reset, please ignore this message.

  Sincerely,
  Your Company`,
    html: `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Password Reset Request</title>
    </head>
    <body>
      <p>Dear User,</p>
      <p>We have received a request to reset your password. To reset your password, please click on the following link:</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>If you did not request this password reset, please ignore this message.</p>
      <p>Sincerely,</p>
      <p>Your Company</p>
    </body>
  </html>`,
  };

  await mailer.send(message);
});

exports.validatePasswordResetToken = handleErrors(async (resetToken) => {
  const user = await User.findOne({
    password_reset_token: resetToken,
    password_reset_expiry: {
      $gt: new Date(),
    },
  });
  return !!user;
});

exports.resetPassword = handleErrors(async (resetToken, newPassword) => {
  const user = await User.findOne({
    password_reset_token: resetToken,
    password_reset_expiry: {
      $gt: new Date(),
    },
  });

  if (!user) {
    throw new Error('Invalid password reset token');
  }

  // const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = newPassword;
  user.passwordResetToken = null;
  user.passwordResetTokenExpiresAt = null;
  await user.save();
});
exports.sendVerificationEmail = handleErrors(async (email, token) => {
  // Build the verification link
  const baseUrl = config.url.base_url;
  const verifyUrl = `${baseUrl}/verified?token=${token}`;

  // Send the verification email
  const message = {
    from: 'Your Company <noreply@yourcompany.com>',
    to: email,
    subject: 'Email Verification',
    text: `Dear User,

    Please click on the following link to verify your email address:

    ${verifyUrl}

    Sincerely,
    Your Company`,
    html: `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Email Verification</title>
      </head>
      <body>
        <p>Dear User,</p>
        <p>Please click on the following link to verify your email address:</p>
        <p><a href="${verifyUrl}">${verifyUrl}</a></p>
        <p>Sincerely,</p>
        <p>Your Company</p>
      </body>
    </html>`,
  };

  await mailer.send(message);
});
