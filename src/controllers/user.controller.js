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
