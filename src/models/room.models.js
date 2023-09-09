import mongoose from "mongoose";
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  number_of_persons: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  check_in: {
    type: String,
    required: true,
  },
  check_out: {
    type: String,
    required: true,
  },
  based_price: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  type_of_room: {
    type: String,
    enum: [
      "Estandar",
      "Suite",
      "Doble Deluxe",
      "Familiar",
      "Individual",
      "Economica",
    ],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  id_hotel: {
    type: mongoose.Schema.ObjectId,
    unique: true,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
