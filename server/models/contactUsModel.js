import mongoose from "mongoose";

const { Schema, model } = mongoose;

const RequestCallbackSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const RequestCallback = model("RequestCallback", RequestCallbackSchema);

export default RequestCallback;
