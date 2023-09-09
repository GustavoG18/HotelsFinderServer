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
    type: {
      fullname: String,
      phone_number: String,
    },
    required: true,
  },
  guests: {
    type: {
      name: String,
      lastname: String,
      birthday: Date,
      gender: String,
      type_of_document: String,
      number_of_document: String,
      email: String,
      phone_number: String,
    },
    required: true,
  },
  id_room: {
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
