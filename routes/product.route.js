const Router = require('restify-router').Router
const { createProduct, getProduct } = require('../controller/product.controller');


const router = new Router()

router.post('/create',  createProduct);
router.post('/:productId',  getProduct);



module.exports = router;