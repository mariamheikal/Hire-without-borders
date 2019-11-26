const mongoose = require('mongoose')
const Schema = mongoose.Schema
const InfoSchema = new Schema({

    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    name: {
        type: String,
    },
    date:{
        type:Date
    }

},{ _id : false });

// Skill Schema
const SkillSchema = new Schema({
    name: {
        type: String,
        //required: true
    }
},{ _id : false })

// Create the schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
 
    dateOfBirth:{
        type:String
    },
    age:{
        type:Number
    },
    memberFullName: {
        type: String,
    },
    memberPhoneNumber: {
        type: String,
        required: false
    },
  
    completedTasks: [InfoSchema],
    acceptedInTasks: [InfoSchema],
    appliedInTasks: [InfoSchema],
    uploadedTasks: [InfoSchema],
    experienceLevel: {
        type: Number,
        enum: [0, 1, 2, 3, 4, 5]
    },
    qualification: [SkillSchema],
    university: {
        type: String,
        required: false
    },
    major: {
        type: String,
        required: false
    },
    yearOfGraduation: {
        type: String,
        required: false
    },

})

const User= mongoose.model('users', UserSchema)
module.exports = User
