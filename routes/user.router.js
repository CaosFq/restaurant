const { Router } = require('express');
const { signup } = require('../controllers/user.controller');
const {
  validUserByEmail,
  validPassword,
  } = require('../middlewares/user.middleware');
  const {
    signupValidations,
    validateFields,
    loginValidation,
  } = require('../../middlewares/validations.middleware');

  const router = Router();

  router.post('/signup', signupValidations, validateFields,signup)

router.post(
  '/login',
  loginValidation,
  validateFields,
  validateUserByEmail,
  validPassword,
  login
);
module.exports = {
  userRouter: router,
}