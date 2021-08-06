const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const shopRouter = require('./routes/shopRoute');
const adminRouter = require('./routes/adminRoute');
const adminUserRouter = require('./routes/adminUserRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(
  '/api/v1/shop/admin/user',
  adminUserRouter
);
app.use('/api/v1/shop/admin', adminRouter);
app.use('/api/v1/shop', shopRouter);

// app.get('/', (req, res) => {
//   res.send('Hello');
// });
module.exports = app;
