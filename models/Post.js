const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  hospital: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  geometry:{
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: {
      type:[Number],
      required: true
    }
  },
  agencyUsed: {
    type: String,
    required: true,
  },
  emrUsed: {
    type: String,
    required: true,
  },
  physicianCoverage: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  assignmentNotes: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
