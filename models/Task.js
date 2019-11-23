const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var connection = mongoose.createConnection(
  mongoURI
    //"mongodb+srv://user:1234@break-it-down-8hjy6.mongodb.net/data?retryWrites=true"
);

// Create the schema
const TasksSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true},
  ownerID: { type: Number },
  applicants: {
    type: Array,
    items: {
      type: "object",
      properties: {
        applicantID: { type: Number },
        status: { type: String }
      }
    }
  },
});

module.exports = Task = connection.model("tasks", TasksSchema);
