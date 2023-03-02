const { Router } = require('express');
const { signup,login, updateUser } = require('../controllers/user.controller');
const {
  validUserByEmail,
  validPassword,
  validUser,
  protectAccountOwner,
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
router.use(protect);
router.patch(
  '/:id', 
  updateUserValidation,
  validateFields,
  validUser,
  protectAccountOwner,
   updateUser
   );
module.exports = {
  userRouter: router,
}