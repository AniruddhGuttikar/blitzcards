import mongoose, { Schema, Document } from "mongoose";

interface IFlashCardSet extends Document {
  title: String;
  author: mongoose.Types.ObjectId;
  confidence: Number;
  flashcards: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const flashcardSchema = new Schema<IFlashCardSet>({
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
  flashcards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Flashcard",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const FlashcardSet = mongoose.model<IFlashCardSet>(
  "FlashcardSet",
  flashcardSchema
);
export default FlashcardSet;
