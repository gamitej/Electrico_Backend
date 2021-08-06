const Customer = require('../models/shopModel');

exports.createCustomer = async (req, res) => {
  try {
    const newCustomer = await Customer.create(
      req.body
    );
    res.status(201).json({
      status: 'Ok',
      data: {
        newCustomer,
      },
    });
  } catch (err) {
    res.send(400).json({
      status: 'Fail',
      message: err.message,
    });
  }
};
exports.findComplaints = async (req, res) => {
  try {
    //console.log(req.params.phoneNumber);
    const complaints = await Customer.find({
      phoneNumber: req.params.phoneNumber,
    });
    if (
      complaints.length === 0 ||
      complaints === null
    ) {
      res.status(404).json({
        status: 'Fail',
        message: 'Page not found',
      });
    } else {
      res.status(200).json({
        status: 'Ok',
        data: {
          complaints,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err.message,
    });
  }
};
