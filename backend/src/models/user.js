/**
 * File Name: user.js
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const mongooseHidden = require('mongoose-hidden')();

const userSchema = new mongoose.Schema(
  {
    username: String,
    password: {
      type: String,
      hide: true, // This field will be hidden by default
    },
    isGuest: Boolean,
    guestUUID: {
      type: String,
      unique: true,
      sparse: true,
    },
    lastActive: {
      type: Date,
      default: Date.now,
    },
    email: String,
    googleId: String,
    profile_picture_url: String,
    first_name: String,
    last_name: String,
    full_name: String,
    address: String,
    address_2: String,
    city: String,
    state_province: String,
    zip_postal_code: String,
    country: String,
    phone_number: String,
    date_of_birth: Date,
    age: String,
    gender: String,
    avatar: String,
    cover_photo_url: String,
    bio: String,
    website: String,
    company_website: String,
    social_media_accounts: Object,
    recently_searches: [],


    creation_date: {
      type: Date,
    },
    last_login: {
      type: Date,
    },
    account_status: {
      type: String,
      enum: ['active', 'inactive', 'suspended', 'deleted'],
    },
    account_type: {
      type: String,
      enum: ['basic', 'premium', '...'],
    },
    account_balance: {
      type: Number,
    },
    authentication_provider: {
      type: String,
      enum: ['local', 'Facebook', 'Google'],
    },
    authentication_id: {
      type: String,
    },
    two_factor_enabled: {
      type: Boolean,
    },
    two_factor_method: {
      type: String,
      enum: ['SMS', 'app', 'email'],
    },
    security_questions: {
      type: Array,
    },
    last_password_change: {
      type: Date,
    },
    is_email_verified: { type: Boolean, default: false },
    email_verification_token: String,
    password_reset_token: {
      type: String,
    },
    password_reset_expiry: {
      type: Date,
    },
    login_attempts: {
      type: Number,
    },
    timezone: {
      type: String,
    },

    created_at: { type: Date, default: Date.now },
    updated_at: Date,
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    updated_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    is_deleted: Boolean,
    deleted_at: Date,
    deleted_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    createdByIp: String,
    updatedByIp: String,
  },
  {
    versionKey: false,
  }
);

userSchema.pre('save', async function (next) {
  try {
    if (!this.guestUUID && (this.isModified('password') || this.isNew)) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
    }
    return next();
  } catch (error) {
    logger.error(error.message);
    return next(error);
  }
});

userSchema.plugin(mongooseHidden);

module.exports = mongoose.model('User', userSchema);
