const jwt = require('jsonWebtoken');

const generateToken = id =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: 'id',
    })
}
module.exports = generateToken;