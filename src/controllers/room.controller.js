import Room from "../models/room.models.js";
import { assingRoom } from "./hotel.controller.js";

export const createRoom = async (req, res) => {
  try {
    const newRoom = new Room({
      ...req.body,
    });
    const roomSaved = await newRoom.save();
    const updatedHotel = await assingRoom(roomSaved.id_hotel, roomSaved._id);
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json({
      error: "Error creating room",
    });
  }
};
