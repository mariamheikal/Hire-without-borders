const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const TasksSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true},
  ownerID: { type: mongoose.Schema.Types.ObjectId, required: true },
  applicants: {
    type: Array,
    items: {
      type: "object",
      properties: {
        applicantID: { type: mongoose.Schema.Types.ObjectId },
        status: { type: String }
      }
    }
  },
  field:{type: String, required: true}
});

const Task= mongoose.model('tasks', TasksSchema)
module.exports = Task
