const { reconstructFieldPath } = require("express-validator/src/select-fields");



exports.validExistRestaurant = catchAsync(async(req, res, next)=>{
    const { restaurantId } = req.params;

    const restaurant = await Restaurant.findOne({
        where: {
           id: restaurantId,
           status: true, 
        },
});
if (!restaurant){
    return next(new AppError('Restaurant not found', 404));
}

req.restaurant = restaurant;
next();
});

exports.validExistRestaurantId = catchAsync(async (req, res, next)=>{

})