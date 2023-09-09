export const getAllHotels = (req, res) => {
  try {
    res.status(200).send([]);
  } catch (error) {
    res.status(500).json({ error: "Error getting all hotels" });
  }
};
