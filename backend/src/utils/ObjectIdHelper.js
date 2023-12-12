const mongoose = require("mongoose");

const isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

const toObjectId = (id) => {
  if (!isValidObjectId(id)) {
    return null; // Return null if the id is not valid
  }
  return mongoose.Types.ObjectId(id);
};

const convertObjectId = (id) => {
    return mongoose.Types.ObjectId(id);
  };
  
module.exports = {
  isValidObjectId,
  toObjectId,
  convertObjectId
};
