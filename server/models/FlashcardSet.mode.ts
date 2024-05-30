import mongoose from "mongoose";

const { Schema } = mongoose;

const flashcardSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  confidence: {
    type: Number,
    default: 0,
  },
  flashcards: {
    type: Schema.Types.ObjectId,
    ref: "Flashcard",
  },
  cratedAt: {
    type: Date,
    default: Date.now,
  },
});

const FlashcardSet = mongoose.model("FlashcardSet", flashcardSchema);
export default FlashcardSet;
