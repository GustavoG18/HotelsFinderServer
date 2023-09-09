import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Masculino", "Femenino"],
    required: true,
  },
  type_of_document: {
    type: String,
    enum: ["Cedula", "Pasaporte", "Visa"],
    required: true,
  },
  number_of_document: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: ["Usuario", "Administrador"],
    default: "Usuario",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
