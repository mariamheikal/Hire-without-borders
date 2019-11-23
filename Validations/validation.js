const Joi = require("joi");

module.exports = {

 
 createUserValidation: request => {
    const createSchema = {
      memberFullName: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      password: Joi.string().required(),
      dateOfBirth: Joi.date(),
      memberPhoneNumber: Joi.string(),

      //isExpert: Joi.boolean(),      

      completedTasks: Joi.array(),
      acceptedTasks: Joi.array(),
      appliedInTasks: Joi.array(),
      uploadedTasks: Joi.array(),
      experienceLevel: Joi.number().min(0).max(5),
      qualification: Joi.array(),
      university: Joi.string(),
      major: Joi.string(),
      yearOfGraduation: Joi.string()
    };

    return Joi.validate(request, createSchema);
  },

  loginValidation: request => {
    const loginSchema = {
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required()
    };
    return Joi.validate(request, loginSchema);
  },

};
