const errors = require("restify-errors");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { json } = require("express");

const registerUser = (req, res, next) => {
  (async () => {
    console.log("hellol");
    try {
      const { userName, password, email } = req.body;
      const isUserNameExist = await User.findOne({
        where: {
          userName,
        },
      });

      console.log("hello");
      if (isUserNameExist) {
        console.log(isUserNameExist);
        return next(new errors.BadRequestError("userName already exist"));
      }

      const isUserEmailExist = await User.findOne({
        where: {
          email,
        },
      });

      if (isUserEmailExist) {
        return next(new errors.BadRequestError("email already exist"));
      }

      const hashedPassword = bcrypt.hashSync(req.body.password, 10);

      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      });

      res.status(201);
      res.json({
        success: true,
        message: "user registration done",
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  })();
};

const loginUser = (req, res, next) => {
  (async () => {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ where: { email } });
      
      if(!user){
        return next(new errors.BadRequestError('invalid credentials'))
      }

      const isPasswordMatch = bcrypt.compareSync(
        password,
        user.password
      );

      if (!isPasswordMatch) {
        return next(new errors.BadRequestError("Invalid Credentials"));
      }
      
      console.log(process.env.JWT_SECRET)
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "2h",
      }); 
      
      res.status(200)
      res.json({
        success: true,
        message: "login success",
        data: {...user.toJSON(), access_token:token}
      });

    } catch (error) {
      next(error);
    }
  })();
};

module.exports = { registerUser, loginUser};
