import mongoose from "mongoose";
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  rooms: {
    type: [mongoose.Schema.ObjectId],
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  id_user: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
