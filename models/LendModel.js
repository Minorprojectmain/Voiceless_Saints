const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LendSchema = new Schema(
  {
  
    user: { type: Schema.Types.ObjectId, ref: "User" },

    text: { type: String, required: true },
    
    petname:{ type:String},

    location: { type: String,required: true },

    picUrl: { type: String },

    likes: [{ user: { type: Schema.Types.ObjectId, ref: "User" } }],

  },
  { timestamps: true }
);

module.exports = mongoose.model("Lend", LendSchema);