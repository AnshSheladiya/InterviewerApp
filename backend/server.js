/**
 * File Name: server.js
 */

const http = require('http');
const app = require('./src/app');
const config = require('./src/config/config');
const dotenv = require('dotenv');
const logger = require('./src/utils/logger');
const ResponseHelper = require('./src/utils/responseHelper');
const MSG = require('./src/utils/MSG');

// Load environment variables
dotenv.config();

// Set global variables
global.logger = logger;
global.ResponseHelper = ResponseHelper;
global.MSG = MSG;

const port = config.port;

const server = http.createServer(app);

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    logger.error(`Port ${port} is already in use`);
  } else {
    logger.error(err.message);
  }
});

// Debug logs
console.log('Debug: Before server.listen');

server.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
  
  // Debug logs
  console.log('Debug: Server started successfully');
});

// Debug logs
server.on('listening', () => {
  console.log('Debug: Server is listening');
});

server.on('close', () => {
  console.log('Debug: Server closed');
});

server.on('error', (err) => {
  console.error('Debug: Server error', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Debug: Unhandled Rejection at:', reason, 'promise:', promise);
});

process.on('uncaughtException', (error) => {
  console.error('Debug: Uncaught Exception:', error);
});

process.on('SIGINT', () => {
  console.log('Debug: Received SIGINT. Closing server gracefully');
  server.close(() => {
    console.log('Debug: Server closed gracefully');
    process.exit(0);
  });
});
