const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lists: [
    {
      id: { type: String, required: true, unique: true },
      name: { type: String },
      listItems: [
        {
          text: { type: String },
          children: { type: [Object] }
        }
      ]
    }
  ]
});

mongoose.model("User", userSchema);
