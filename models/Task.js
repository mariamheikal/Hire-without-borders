const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
  applicantID: { type: mongoose.Schema.Types.ObjectId },
  status: { type: String },
  name: {type:String},
  email: {type:String},
  phoneNumber:{type:String},
  major: {type:String},
  field:{type:String},
  experienceLevel:{type:Number}

})
// Create the schema
const TasksSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true},
  ownerID: { type: mongoose.Schema.Types.ObjectId, required: true },
  applicants: [applicantSchema],
  field:{type: String, required: true},
  requiredSkills:{type: Array, required: true},
  isClosed: {type: Boolean}
});

const Task= mongoose.model('tasks', TasksSchema)
module.exports = Task
