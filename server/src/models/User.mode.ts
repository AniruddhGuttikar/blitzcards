import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  username: String;
  email: String;
  createdAt: Date;
  collections: mongoose.Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  collections: [
    {
      type: Schema.Types.ObjectId,
      ref: "Collection",
    },
  ],
});
const User = mongoose.model<IUser>("User", userSchema);
export default User;
