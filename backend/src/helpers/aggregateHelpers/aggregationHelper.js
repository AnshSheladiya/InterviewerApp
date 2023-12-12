/**
 * File Name: aggregationHelper.js
 */

const mongoose = require('mongoose');
const { withCache } = require('../../utils/cacheHelper');

/**
 * Function to aggregate documents using the specified pipeline
 * @param {string} collection - The name of the collection to aggregate
 * @param {Array} pipeline - An array of pipeline stages
 * @returns {Promise<Array>} - A Promise that resolves to the aggregated results
 */
exports.aggregate = (async (collection, pipeline) => {
  try {
    const result = await mongoose.connection.db.collection(collection).aggregate(pipeline).toArray();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
});
