const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  bankname: {
    type: String,
    required: true,
    unique: true,
  },
  active: {
    type: String,
    default: "Yes",
    required: true,
  },
},
  {
    timestamps: true,
  }
);

const bankModel = mongoose.model("Banks", bankSchema);

module.exports = bankModel;