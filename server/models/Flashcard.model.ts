import mongoose from "mongoose";

const { Schema } = mongoose;

const flashcardSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  defaultAnswer: {
    type: String,
    required: true,
  },
  aiAnswer: {
    type: String,
    default: "",
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  confidence: {
    type: Number,
    default: 0,
  },
  cratedAt: {
    type: Date,
    default: Date.now,
  },
});

const Flashcard = mongoose.model("Flashcard", flashcardSchema);
export default Flashcard;
