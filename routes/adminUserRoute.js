const express = require('express');

const adminUserController = require('../controller/adminUserController');

const router = express.Router();

router
  .route('/')
  .get(adminUserController.allAdmin);
router
  .route('/login')
  .post(adminUserController.adminLogin);
module.exports = router;
