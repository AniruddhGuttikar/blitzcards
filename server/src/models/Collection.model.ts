import mongoose, { Schema, Document } from "mongoose";

interface ICollection extends Document {
  title: String;
  author: mongoose.Types.ObjectId;
  createdAt: Date;
  confidence: Number;
  flashcardSet: mongoose.Types.ObjectId[];
}

const collectionSchema = new Schema<ICollection>({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  flashcardSet: [
    {
      type: Schema.Types.ObjectId,
      ref: "flashcardSet",
    },
  ],
});

const Collection = mongoose.model<ICollection>("Collection", collectionSchema);
export default Collection;
