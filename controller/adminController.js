const Customer = require('../models/shopModel');

exports.getAllCustomers = async (req, res) => {
  try {
    console.log(req.query);
    // Build A Query
    const queryObj = { ...req.query };
    // it is done beacuse if we just assign query = req.query then the changes made in query will also change req.query

    const excludeFields = [
      'page',
      'limit',
      'sort',
      'fields',
    ];
    excludeFields.forEach(
      (field) => delete queryObj[field]
    );
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    //console.log(JSON.parse(queryStr));

    // find returns a query in which we can then perform sort limit etc;

    const query = Customer.find(
      JSON.parse(queryStr)
    );

    // Return a query
    const customer = await query;

    // Send Response
    res.status(200).json({
      status: 'Ok',
      results: customer.length,
      data: {
        // Before es6 tours: tours  can be written to
        //tours: tours
        //after es6
        customer,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

exports.resolveCustomer = async (req, res) => {
  try {
    const customer =
      await Customer.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
    res.status(200).json({
      status: 'Ok',
      data: {
        customer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err.message,
    });
  }
};
