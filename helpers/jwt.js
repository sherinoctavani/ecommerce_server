const jwt = require ('jsonwebtoken')

function generateToken (obj) {
    return jwt.sign(obj, process.env.SECRET)
}

function verifyToken (access_token) {
    return jwt.verify(access_token, process.env.SECRET)
}

module.exports = {generateToken, verifyToken}