const { reconstructFieldPath } = require("express-validator/src/select-fields");



exports.validExistRestaurant = catchAsync(async(req, res, next)=>{
    const {quantity, mealId } = body;

    const restaurant = await Restaurant.findOne({
        where: {
           id: mealId,
           status: active, 
        },
});
if (!restaurant){
    return next(new AppError('order not found', 404));
}

req.order = order;
next();
});

exports.validExistOrderId = catchAsync(async (req, res, next)=>{

})