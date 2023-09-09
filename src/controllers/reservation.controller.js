import Hotel from "../models/hotel.models.js";
import Reservation from "../models/reservation.models.js";

export const createReservation = async (req, res) => {
  try {
    const newReservation = new Reservation({
      ...req.body,
    });
    const response = await newReservation.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error creating a reservation" });
  }
};

export const getReservation = async (req, res) => {
  try {
    const { _id } = req.body;
    const response = await Reservation.findById(_id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error getting a reservation" });
  }
};

export const getAllReservationByUserAdmin = async (req, res) => {
  try {
    const { id_user } = req.body;
    const getHotels = await Hotel.find({ id_user });
    let userReservation = [];
    if (getHotels.length) {
      for (const hotel of getHotels) {
        const reservations = await Reservation.find({ id_hotel: hotel._id });
        userReservation = [...userReservation, ...reservations];
      }
    }
    res.status(200).json(userReservation);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error getting all reservation by user admin" });
  }
};
