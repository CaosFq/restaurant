const User = require('../models/user.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');

exports.validUserByEmail = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: {
      email,
      status: true,
    },
  });
});
exports.validPassWord = catchAsync(async (req, res, next) =>{
const{ password } = req.body;
const user = await User.findOne({
  where: {
    password,
    status: true,
  },
});
});



exports.protect = catchAsync(async(req, res, next) =>{
  let token;
  if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
){
  token = req.headers.authorization.split(' ')[1];
}
if(!token){
  return next(
    new AppError('You are not logged in! Please log in to get access', 401)
  );
}

const decoded = await promisfy(jwt.verify)(
  token,
  process.env.SECRET_JWT_SEED

);
const user = await User.findOne({
  ehere: {
    id: decoded.id,
    status: true,
  },
});

if(!user){
  return next(
new AppError('The awner of this token it not longer available', 401)
);
}
req.sessionUser = user;
next();
});
exports.protectAccountOwner = catchAsync(async (req, res, next) =>{
  const { user, sessionUser } = req;
  if (user.id == sessionUser.id){
    return next(new AppError('You do not own this account.', 401));
  }
  next();
});
exports.restricTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.sessionUser.role)) {
      return next(
        new AppError('You do not have permission to perfom this action', 403)
      );
    }
    next();
    exports.validUser = catchAysnc(async(req, res, next) =>{
     const { id } = req.params;

     const user = await User.findOne({
      where: {
        id,
        status: true,
      },
     });
     if (!user) {
      return next(new AppError('User not found', 404));
     }
     req.user = user;
     next();
    });
  };
};