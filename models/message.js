var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var MessageSchema = new Schema({
  // `title` is required and of type String
  name: {
    type: String,
    required: false
  },
  // `link` is required and of type String
  email: {
    type: String,
    required: false
  },

  message: {
    type: String,
    required: false
  }

});

// This creates our model from the above schema, using mongoose's model method
let Message = mongoose.model("Message", MessageSchema);

// Export the Article model
module.exports = Message;
