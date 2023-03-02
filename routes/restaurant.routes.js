const { Router } = require('express');
const { createReview, createRestaurant, findRestaurants} = require('../controllers/restaurant.controller');
const { 
  validExistRestaurant, validExistRestaurantId,
 } = require('../middlewares/restaurant.middleware');
 const { protect, protectAccountOwner } = require('../middlewares/user.middleware');
 const{
createRestaurantValidation,
validateFields,
createReviewValidation,
 } = require('../middlewares/validations.middleware');

 const router = Router();

 router.use(protect);

 router.post('/', createRestaurantValidation, validateFields, createRestaurant);

 router.get('/', findRestaurants);

 router.post(
  '/reviews/:id',
  createReviewValidation,
  validateFields,
  validExistRestaurant,
  createReview
 );
 router.patch(
  '/reviews/:restaurantId/:id',
  createReviewValidation,
  validateFields,
  validExistRestaurantId,
  validExistReview,
  protectAccountOwner,
   updateReview

   );

 module.exports = {
  restaurantRouter: router,
 };
