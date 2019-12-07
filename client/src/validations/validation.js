const Joi = require("joi");

module.exports = {

  createTaskValidation: request =>{
    const taskSchema = {
      title: Joi.string().required(),
      description: Joi.string().required(),
      //ownerID: Joi.required(),
      applicants: Joi.array(),
      field:Joi.string().required(),
      requiredSkills: Joi.array().required()
    }
    return Joi.validate(request, taskSchema);
  },
 
 createUserValidation: request => {
    const createSchema = {
      memberFullName: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      dateOfBirth: Joi.string(),
      memberPhoneNumber: Joi.string(),
      isExpert: Joi.boolean(),      
      completedTasks: Joi.array(),
      acceptedTasks: Joi.array(),
      appliedInTasks: Joi.array(),
      uploadedTasks: Joi.array(),
      experienceLevel: Joi.number().min(0).max(5),
      qualification: Joi.array(),
      university: Joi.string(),
      major: Joi.string(),
      yearOfGraduation: Joi.string(),
      skills: Joi.array(),
      field: Joi.string().required()
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
  updateValidation: request => {
    const updateSchema = {
      memberFullName: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      dateOfBirth: Joi.string(),
      memberPhoneNumber: Joi.string(),
      experienceLevel: Joi.number().min(0).max(5),
      qualification: Joi.array(),
      university: Joi.string(),
      major: Joi.string(),
      yearOfGraduation: Joi.string()
    };
    return Joi.validate(request, updateSchema);

  }

};
