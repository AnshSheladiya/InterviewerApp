/**
 * File Name: app.js
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const axios = require('axios');
const passport = require('passport'); // Uncomment if needed
// require('./utils/passport')(passport); // Uncomment if needed
// require('./utils/cronHelper');
const errorHandler = require('./middlewares/errorHandler');
const config = require('./config/config');
const sanitizeReqBody = require('./middlewares/sanitizeReqBody');
const mongoose = require('mongoose'); // Added Mongoose

const app = express();

// Set up Mongoose connection
const mongooseUrl = config.database[process.env.NODE_ENV || 'development'].url;
mongoose.connect(mongooseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(sanitizeReqBody);
// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
// const authRoutes = require('./routes/authRoutes');
// const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const questionRoutes = require('./routes/questionRoutes');
// const activityLogRoutes = require('./routes/activityLogRoutes');

// const Product = require('./models/product');
// const generateProducts = require('./utils/casual');

// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/questions', questionRoutes);
// app.use('/api/logs', activityLogRoutes);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// custom error handling middleware
app.use(errorHandler);
// app.get('/proxy-image', async (req, res) => {
//   const { imageUrl } = req.query;
 
//   try {
//     const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
//     const contentType = response.headers['content-type'];

//     res.set('Content-Type', contentType);

//     res.send(response.data);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// app.use("/add-products", async (req, res) => {
//   try {
//     const numProducts = 10000;
//     const products = generateProducts(numProducts);

//     const insertedProducts = await Product.insertMany(products);
//     return res.json(insertedProducts);
//   } catch (error) {
//     console.error(error);
//     res.send({ success: false, error });
//   }
// });

// if (config.node_env === 'production') {
//   app.use(express.static(path.join(__dirname, '..', '..', 'frontend', 'build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'));
//   });
// } else {
//   app.get('/', (req, res) => {
//     res.send('<h1>Hello From Node Server via nodemon</h1>');
//   });
// }

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
  process.exit(1);
});

// // Start the Apollo Server
// graphqlServer.listen().then(({ url }) => {
//   logger.info(`GraphQL server ready at ${url}`)
// });


module.exports = app;


