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
      "Standart",
      "Suite",
      "Double Deluxe",
      "Familiar",
      "Individual",
      "Economic",
    ],
    required: true,
  },
  location: {
    type: String,
    enum: ["Front", "Back"],
    required: true,
  },
  id_hotel: {
    type: mongoose.Schema.ObjectId,
    required: false,
  },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
