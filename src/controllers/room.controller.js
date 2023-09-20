import mongoose from "mongoose";
import Room from "../models/room.models.js";
import { assingRoom } from "./hotel.controller.js";
import Hotel from "../models/hotel.models.js";

export const createRoom = async (req, res) => {
  try {
    const newRoom = new Room({
      ...req.body,
      id_hotel: new mongoose.Types.ObjectId(),
    });
    const roomSaved = await newRoom.save();
    // const updatedHotel = await assingRoom(roomSaved.id_hotel, roomSaved._id);
    res.status(200).json(roomSaved);
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(500).json({
      error: "Error creating room",
    });
  }
};

export const updateRoom = async (req, res) => {
  try {
    const newRoom = new Room({
      ...req.body,
    });
    const response = await Room.findByIdAndUpdate(req.body._id, newRoom, {
      new: true,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      error: "Error update room",
    });
  }
};

export const enabledRoom = async (req, res) => {
  try {
    const { idRoom, enabled } = req.body;
    const response = await Room.findByIdAndUpdate(
      { _id: idRoom, enabled },
      { enabled },
      { new: true }
    );
    res.status(200).json(response);
  } catch (error) {
    console.log("LOOK THE ERROR =>", error);
    res.status(500).json({
      error: "Error enabling the room",
    });
  }
};

export const getAllRoomsByHotel = async (req, res) => {
  try {
    const idHotel = new mongoose.Types.ObjectId(req.body.idHotel);
    const getRooms = await Room.find({
      id_hotel: idHotel,
    });
    res.status(200).json(getRooms);
  } catch (error) {
    res.status(500).json({
      error: "Error getting rooms",
    });
  }
};

export const getAllRooms = async (req, res) => {
  try {
    const { number_of_persons, location } = req.query;
    const find = [];
    const getRooms = await Room.find();
    for (const room of getRooms) {
      const [hotel] = await Hotel.find({ _id: room.id_hotel });
      if (
        location === hotel.location &&
        number_of_persons <= room.number_of_persons
      ) {
        find.push({
          ...room._doc,
          hotel_name: hotel.name,
          hotel_location: hotel.location,
          id_hotel: hotel._id,
        });
      }
    }
    res.status(200).json(find);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error getting rooms",
    });
  }
};

export const getRoom = async (req, res) => {
  try {
    const idRoom = new mongoose.Types.ObjectId(req.query.idRoom);
    const getRoom = await Room.findById(idRoom);
    res.status(200).json(getRoom);
  } catch (error) {
    res.status(500).json({
      error: "Error getting room",
    });
  }
};
