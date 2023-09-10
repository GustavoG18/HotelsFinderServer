import User from "../models/user.models.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new User({
      ...req.body,
    });
    const userSaved = await newUser.save();
    res.status(200).json(userSaved);
  } catch (error) {
    res.status(500).json({ error: "Error creating a user" });
  }
};

export const createUserAdmin = async (req, res) => {
  try {
    const newUser = new User({
      ...req.body,
      rol: "Administrador",
    });
    const userSaved = await newUser.save();
    res.status(200).json(userSaved);
  } catch (error) {
    res.status(500).json({ error: "Error creating a administrator" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await User.find({ email, password });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error getting user" });
  }
};
