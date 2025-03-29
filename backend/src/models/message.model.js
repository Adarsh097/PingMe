import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // Indexing for faster queries
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // Indexing for faster queries
    },
    text: {
      type: String,
      trim: true, // Removes unnecessary spaces
    },
    image: {
      type: String,
      default: null, // Makes it clear when no image is provided
    },
  },
  { timestamps: true }
);


export default mongoose.model("Message", messageSchema);
