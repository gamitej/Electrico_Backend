const adminUser = require('../models/adminModel');

exports.allAdmin = async (req, res) => {
  try {
    const admin = await adminUser.find();
    res.status(201).json({
      status: 'Ok',
      data: {
        admin,
      },
    });
  } catch (err) {
    res.send(400).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

exports.addAdmin = async (req, res) => {
  try {
    const newAdmin = await adminUser.create(
      req.body
    );
    res.status(201).json({
      status: 'Ok',
      data: {
        newAdmin,
      },
    });
  } catch (err) {
    res.send(400).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

exports.adminLogin = async (req, res) => {
  try {
    console.log(req.body);
    const admin = await adminUser.find({
      username: req.body.username,
    });
    //console.log(admin);
    if (!admin || admin.length === 0) {
      res.status(403).json({
        status: 'Fail',
        message: 'Username not found',
      });
    } else if (
      admin[0].password !== req.body.password
    ) {
      res.status(403).json({
        status: 'Fail',
        message: 'Incorrect Password',
      });
    } else {
      res.status(201).json({
        status: 'Ok',
        message: 'Login Successful',
      });
    }
  } catch (err) {
    res.status(403).json({
      status: 'Fail',
      message: err.message,
    });
  }
};
