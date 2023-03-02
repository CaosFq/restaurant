const catchAsync = require('../utils/catchAsync');
const Order = require('../models/order.model');


exports. creareOrder = catchAsync(async(req, res, next) =>{
    const { quantity, mealId } = req.body;

    const meal = await Order.create({
        quantity,
        mealId

    });
    res.status(201).json({
        status: 'active',
        message: ' The order has been created',
        meal,
    });
});

exports.findOneMeal = catchAsync(async(req, res, next)=>{

    const meals = await Order.findAllMeal({
        where:{
            status: true,
        },
    });
res.status(200).json({
    status: 'active',
    order,
});
});

exports.updateMeal = catchAsync(async(req, res, next)=>{
    const { quantity, mealId } =req.body;

    await review.update({
       quantity,
       mealId
    });
    res.status(200).json({
        status: 'active',
        message: ' The order has been updated',
    });
});