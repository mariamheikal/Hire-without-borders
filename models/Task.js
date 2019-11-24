const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const TasksSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ownerID: { type: mongoose.Schema.Types.ObjectId },
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
  categories: { type: Array }
});

module.exports = Task = mongoose.model("Tasks", TasksSchema);
