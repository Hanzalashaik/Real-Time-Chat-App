import User from "../models/User.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedUser = req.user._id;
    const filterUsers = await User.find({ _id: { $ne: loggedUser } }).select("-password");

    res.status(200).json(filterUsers)
  } catch (error) {
    console.log("Error from getUserForSidebar controller", error.message);
    res.status(500).json({ sucess: "Internal server error" });
  }
};
