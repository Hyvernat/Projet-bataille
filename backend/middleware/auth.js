const jwt = require('jsonwebtoken');
const User = require('../model/user');
const asyncHandler = require('express-async-handler');

const protect =  asyncHandler(async (req, res, next) =>{
    let token;

    if(req.headers.authorization && req.header.authorization.StartsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select('-password');
            next();
        }catch (err){
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    if(!token){
        throw new Error('NOt authorized')
    }
});