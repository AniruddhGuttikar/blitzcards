import mongoose from "mongoose";

const { Schema } = mongoose;

const collectionSchema = new Schema({
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
  cratedAt: {
    type: Date,
    default: Date.now,
  },
  flashCardSet: [
    {
      type: Schema.Types.ObjectId,
      ref: "flashcardSet",
    },
  ],
});

const Collection = mongoose.model("Collection", collectionSchema);
export default Collection;
