const catchAsync = require('../utils/catchAsync');
const Meal = require('../models/meal.model');


exports.createMeal = catchAsync(async(req, res, next) =>{
    const { name, price } = req.body;

    const meal = await Order.create({
        name,
        price

    });
    res.status(201).json({
        status: 'active',
        message: ' The meal has been created',
        meal,
    });
});

exports.findOneMeal = catchAsync(async(req, res, next)=>{

    const meals = await Meal.findAllMeal({
        where:{
            status: true,
        },
    });
res.status(200).json({
    status: 'active',
    meals,
});
});

exports.updateMeal = catchAsync(async(req, res, next)=>{
    const { name, price } =req.body;

    await review.update({
        name,
        price,
    });
    res.status(200).json({
        status: 'active',
        message: ' The meal has been updated',
    });
});