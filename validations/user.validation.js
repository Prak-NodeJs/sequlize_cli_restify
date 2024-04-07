const Joi = require('joi')

const createUser = {
    body: Joi.object()
      .keys({
        userName:Joi.string().required(),
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password:Joi.string().required(),
        image:Joi.string(),
      }) 
  };

const validateUserLogin = {
    body: Joi.object()
      .keys({
        email: Joi.string().required().email(),
        password:Joi.string().required()
      }) 
  };

module.exports={
    createUser, validateUserLogin
}



//   const Joi = require('joi');
// const { objectId } = require('./custom.validation');

// const createCategory = {
//   body: Joi.object().keys({
//     name: Joi.string().required(),
//     description: Joi.string().required(),
//     icon: Joi.string().uri(),
//     active: Joi.boolean(),
//   }),
// };

// const getCategory = {
//   params: Joi.object().keys({
//     categoryId: Joi.string().custom(objectId),
//   }),
// };

// const getCategories = {
//   query: Joi.object().keys({
//     name: Joi.string(),
//     sortBy: Joi.string(),
//     limit: Joi.number().integer(),
//     page: Joi.number().integer(),
//   }),
// };

//   module.exports = pick;



