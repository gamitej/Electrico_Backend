const express = require('express');

const adminController = require('../controller/adminController');

const router = express.Router();

router
  .route('/')
  .get(adminController.getAllCustomers);

router
  .route('/:id')
  .post(adminController.resolveCustomer);

module.exports = router;
