const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please Enter Your Name!'],
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, 'Please Enter Your Number!'],
  },
  appliance: {
    type: String,
    required: [
      true,
      'Please Select Your Appliance',
    ],
  },
  problem: {
    type: String,
    required: [
      true,
      'Please State Your Problem!',
    ],
  },
  address: {
    type: String,
    required: [
      true,
      'Please Enter Your Address!',
    ],
    trim: true,
  },
  pincode: {
    type: Number,
    required: [
      true,
      'Please Enter Your Pincode!',
    ],
  },
  resolved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Customer = mongoose.model(
  'Customer',
  shopSchema
);

module.exports = Customer;
