const User =  require('../model/user');
const asyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken');

exports.authUser = asyncHandler(async(req, res) => {
    const user = await User.findOne({email});

    if(user && (await user.mathcPassword(password))){
        res.json( {
            _id:user._id,
            name: user.name,
            eamil: user.email,
            image: user.image,
            chips: user.chips,
            token: generateToken(user._id),
        })
    }else{
        res.status(401);

        throw new error('Invalid Email or password');
    }
})