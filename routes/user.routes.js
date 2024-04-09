const Router = require('restify-router').Router
const {registerUser, loginUser} = require('../controller/user.controller')
const {createUser, user, validateUserLogin} = require('../validations/user.validation')
const {validate} = require('../utils/validate')
const {upload} = require('../utils/mutler')

const router = new Router()
router.post('/register', validate(createUser), registerUser);
// router.post('/register', validate(createUser), registerUser);
router.post('/',upload.single('file'), (req, res, next)=>{
    console.log(req.file)
} )
 router.post('/login', validate(validateUserLogin), loginUser)


module.exports = router;