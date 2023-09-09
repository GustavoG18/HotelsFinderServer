import Hotel from "../models/hotel.models.js";
// import Room from "../models/room.models.js";

export const getAllHotelByUser = async (req, res) => {
  try {
    const userId = req.body.userId;
    const getHotels = await Hotel.find({ id_user: userId });
    res.status(200).json(getHotels);
  } catch (error) {
    res.status(500).json({ error: "Error getting all hotels" });
  }
};

export const getAllHotels = async (req, res) => {
  try {
    const getHotels = await Hotel.find();
    res.status(200).json(getHotels);
  } catch (error) {
    res.status(500).json({ error: "Error getting all hotels" });
  }
};

export const getHotel = async (req, res) => {
  try {
    const hotelId = req.body.hotelId;
    const getHotel = await Hotel.find({ _id: hotelId });
    res.status(200).json(getHotel);
  } catch (error) {
    console.log("Look", error);
    res.status(500).json({ error: "Error getting hotel" });
  }
};

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

export const updateHotel = async (req, res) => {
  try {
    const newHotel = new Hotel({
      ...req.body,
    });
    const response = await Hotel.findByIdAndUpdate(req.body._id, newHotel, {
      new: true,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error updating hotel" });
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

// export const getHotelsBySearching = async (req, res) => {
//   try {
//     const { start_date, end_date, number_of_person, location } = req.body;
//     const getHotelsWithLocation = await Hotel.find({ location });
//     const hotelsAvailables = getHotelsWithAvailableRooms(
//       getHotelsWithLocation,
//       number_of_person,
//       start_date,
//       end_date
//     );
//     res.status(200).json(hotelsAvailables);
//   } catch (error) {
//     res.status(500).json({ error: "Error searching hotels" });
//   }
// };

// const getHotelsWithAvailableRooms = async (hotels, number_of_person, start_date, end_date) => {
//   try {
//     const result = [];
//     for (const hotel of hotels) {
//       let rooms = await Room.find({ id_hotel: hotel._id });
//       let roomsAvailable = rooms.filter(({ number_of_persons }, index) => {
//         return number_of_persons >= number_of_person;
//       });
//       if (roomsAvailable.length) {
//         result.push({
//           hotel,
//           roomsAvailable,
//         });
//       }
//     }
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };
