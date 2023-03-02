const catchAsync = require('../utils/catchAsync');
const Restaurant = require('../models/restaurant.model');
const REview = require('../models/reviews.model');


exports.createRestaurant = catchAsync(async(req, res, next) =>{
    const { name, address, rating } = req.body;

    const restaurant = await Restaurant.create({
        name,
        address,
        rating,

    });
    res.status(201).json({
        status: 'success',
        message: ' The restaurant has been created',
        restaurant,
    });
});
exports.findRestaurants = catchAsync(async(req, res, next)=>{

    const restaurants = await Restaurant.findAll({
        where:{
            status: true,
        },
    });
res.status(200).json({
    status: 'success',
    restaurants,
});
});

exports.createReview = catchAsync(async (req, res, next) =>{
const { comment, rating } = req.body;
const { restaurant, sessionUser } = req;

const review = await Review.create({
    userId: sessionUser.id,
    commet,
    restaurantId: restaurant.id,
    rating,
});

res.status(201).json({

})
});
    
exports.updateReview = catchAsync(async(req, res, next)=>{
    const {review } = req;
    const { comment, rating } =req.body;

    await review.update({
        comment,
        rating,
    });
    res.status(200).json({
        status: 'success',
        message: ' The review has been updated',
    });
});