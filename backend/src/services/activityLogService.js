// // services/activityLogService.js
// const prisma = require('../utils/prisma');

// exports.getActivityLogs = async () => {
//   try {
//     const activityLogs = await prisma.activityLogs.findMany();
//     return activityLogs;
//   } catch (error) {
//     throw new Error('Failed to fetch activity logs');
//   }
// };