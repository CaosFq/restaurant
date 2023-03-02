const { Router } = require('express');
const{ check } = require('express-validator');
const {
  findAllMeals,
  findOneMeal,
  createMeal,
  updateMeal,
  deleteMeal,
} = require('../controllers/meal.controller');
const {protect, protectAccountOwner, restrictTo } = require('../middlewares/auth.middleware');
const { validExistMeal } = require('../middlewares/repairs.middleware');
const { validateFields } = require('../middlewares/validateField.middeleware');

const router = Router();

router.get('/', findAllMeal);

router.get('/:id',validExistMeal,restrictTo('admin'), findOneMeal);

router.use(protect);
router.patch(
  '/:id',
  [
    check('name', 'The name must mandatory').not().isEmpty(),
    check('price', 'The price must mandatory').not().isEmpty(),
   
    validateFields,
    restrictTo('admin'),
    validExistMeal,
  ],
  updateMeal

);



router.delete('/:id',validExistMeal,restrictTo('admin'), deleteMeal);

module.exports = {
  mealRouter: router,
};
