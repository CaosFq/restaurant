const { reconstructFieldPath } = require("express-validator/src/select-fields");



exports.validExistRestaurant = catchAsync(async(req, res, next)=>{
    const { name, price } = req.params;

    const meal = await Meal.findOne({
        where: {
           id,
           status: 'active', 
        },
});
if (!restaurant){
    return next(new AppError('Restaurant not found', 404));
}

req.meal = meal;
next();
});

exports.validExistMealId = catchAsync(async (req, res, next)=>{

});



