import Hotel from "../models/hotel.models.js";

export const createHotel = async (req, res) => {
  try {
    const newHotel = new Hotel({
      ...req.body,
    });
    const hotelSaved = await newHotel.save();
    res.status(200).json(hotelSaved);
  } catch (error) {
    res.status(500).json({ error: "Error creating hotel" });
  }
};

export const assingRoom = async (idHotel, idRoom) => {
  try {
    const getHotel = await Hotel.findById(idHotel);
    getHotel.rooms.push(idRoom);
    return await Hotel.findByIdAndUpdate(idHotel, getHotel, { new: true });
  } catch (error) {
    console.error("It was not assigned correctly.");
  }
};
