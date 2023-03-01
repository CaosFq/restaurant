const jwt = require('jsonwebtoken');
const { token } = require('morgan');

const generateJWT = id => {
    return new Promise((resolbe, reject) => {
        const payload = { id };

        jwt.sign(
            payload,
            process.env.SECRET_JWT_SEED,
            {
                expiresIn: process.env.JWT_EXPIRE_IN,
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject(token);
                }
            }
        );
    });
};
module.exports = generateJTW;