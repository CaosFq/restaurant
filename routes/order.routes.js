const { Router } = require('express');
const { check } = require('express-validator');
const {
  findAllOrders,
  findOneOrder,
  createOrder,
  updateOrder,
  deleteOrder
}= require('../controllers/meal.controller');
const {protect, protectAccountOwner, restrictTo } = require('../middlewares/auth.middleware');
const { validExistMeal } = require('../middlewares/order.middleware');
const { validateFields } = require('../middlewares/validateField.middeleware');


const router = Router();

router.get('/', findAllOrder);

router.get('/:id',validExistOrder,restrictTo('user'), findOneOrder);

router.use(protect);
router.patch(
  '/:id',
  [
    check('quantity', 'The quantity must mandatory').not().isEmpty(),
    check('mealId', 'The mealId must mandatory').not().isEmpty(),
   
    validateFields,
    restrictTo('user'),
    validExistOrder,
  ],
  updateOrder

);



router.delete('/:id',validExistMeal,restrictTo('user'), deleteOrder);

module.exports = {
  orderRouter: router,
};
