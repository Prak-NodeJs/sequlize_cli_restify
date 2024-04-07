const { Product, User } = require("../models")
const errors = require('restify-errors')

const createProduct = (req, res, next)=>{
    (async()=>{
         try {
            const {userId}= req.body
            // const user = await User.findOne({where:{id:userId}})
            // if(!user){
            //     return next(new errors.BadRequestError('User not found'))
            // }
            const productData = await Product.create(req.body)
            res.status(200)
            res.json({
                success:true,
                message:'product created',
                data:productData
            })
         } catch (error) {
            console.log("inside catch block")
            next(error)
         }
    })()
}



const getProduct = (req, res, next)=>{
    (async()=>{
         try {
            const {productId}= req.params;
            console.log(productId)
            // const user = await User.findOne({where:{id:userId}})
            // if(!user){
            //     return next(new errors.BadRequestError('User not found'))
            // }
            // const productData = await Product.findByPk(productId, {
            //     include:{
            //         model:User
            //     }
            // })

             const productData = await User.findByPk(1, {
                include:{
                    model:Product
                }
            })
            res.status(200)
            res.json({
                success:true,
                message:'product created',
                data:productData
            })
         } catch (error) {
            console.log("inside catch block")
            next(error)
         }
    })()
}

module.exports = {createProduct, getProduct}