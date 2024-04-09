import jwt from 'jsonwebtoken'
const errors = require('restify-errors')
const { User } = require("../models");

const verifyToken = (req, res, next) => {
    (async () => {
        try {
            const authorizationHeader = req.headers.authorization
            console.log(authorizationHeader)
            if (!authorizationHeader) {
                return next(new errors.UnauthorizedError('unauthorized error'))
            }
            const token = authorizationHeader.split(' ')[1]
            if (!token) {
                return next(new errors.UnauthorizedError('unauthorized error'))
            }
            const id = jwt.verify(token, process.env.JWT_SECRET)
            req.user = id
            next()

        } catch (error) {
            next(error)
        }

    })()
}

const verfiyAdminAuth = (req, res, next) => {
    (async()=>{
    try {
        const user = await User.findById(req.user.id)
        if (!user || user.role != 'Admin') {
            throw new ApiError(403, 'you are not authorized to access this')
        }
        next()
    } catch (error) {
        next(error)
    
    }})()
}

module.exports = {verifyToken, verfiyAdminAuth}