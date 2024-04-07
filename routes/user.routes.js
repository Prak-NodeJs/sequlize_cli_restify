const Router = require('restify-router').Router
const {registerUser, loginUser} = require('../controller/user.controller')
const {createUser, user, validateUserLogin} = require('../validations/user.validation')
const {validate} = require('../utils/validate')

const router = new Router()
router.post('/register', validate(createUser), registerUser);
 router.post('/login', validate(validateUserLogin), loginUser)


module.exports = router;