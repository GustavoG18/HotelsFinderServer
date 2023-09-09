import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  contact_emergency: {
    type: Object,
    required: true,
  },
  guests: {
    type: Object,
    required: true,
  },
  id_room: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  id_hotel: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  id_user: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
