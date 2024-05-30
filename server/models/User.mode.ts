import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cratedAt: {
    type: Date,
    default: Date.now,
  },
  collection: [
    {
      type: Schema.Types.ObjectId,
      ref: "Collection",
    },
  ],
});
const User = mongoose.model("User", userSchema);
export default User;
