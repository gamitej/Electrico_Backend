const express = require('express');
const customerController = require('../controller/shopController');

const router = express.Router();

router
  .route('/')
  .post(customerController.createCustomer);

router
  .route('/:phoneNumber')
  .get(customerController.findComplaints);

module.exports = router;
