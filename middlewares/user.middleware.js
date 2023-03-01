const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

exports.validUserByEmail = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: {
      email,
      status: true,
    },
  });
});
