const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const Candidate = require("./candidate");
const Candidate = new Schema({
  name: String,
  email: String,
  resume: [String]
});
const CareerSchema = new Schema({
  title: String,
  description: String,
  images: [String]
  //candidates: [Candidate]
});

module.exports = mongoose.model("Career", CareerSchema);
