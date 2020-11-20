// CREATE THE SCHEMA
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
<<<<<<< HEAD
  {
    name: { type: String, unique: true, required: true },
    password: { type: String, required: true }, // (validated bcrypt),
  },
  {
    timestamps: {
      createdAt: "created_at",
    },
  }
);
=======
    { 
        name: {type: String, unique: true,},
        password: {type: String, required: true}, // (validated bcrypt),
        createdAt: {type: Date, required: true, default: Date.now()}
    }
    );
>>>>>>> 8197e46c05e590bff0b0a5ada0007bf5e2ed729f

// CREATE THE MODEL
const User = mongoose.model("User", userSchema);

// EXPORT THE MODEL
<<<<<<< HEAD
module.exports = User;
=======
module.exports = User;
>>>>>>> 8197e46c05e590bff0b0a5ada0007bf5e2ed729f
