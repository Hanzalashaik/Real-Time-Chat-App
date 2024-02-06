import userModel from "../models/User.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    // { fullName, username, password, confirmPassword, gender }
    let userData = req.body; // Change 'const' to 'let'
    // console.log(userData);

    if (userData.password !== userData.confirmPassword) {
      return res.status(409).json({ success: "Password doesn't match" });
    }

    const user = await userModel.findOne({ username: userData.username });

    if (user) {
      return res.status(409).json({ success: "Username already exists" });
    }

    // Hashing password
    let hashPassword = await bcrypt.hash(userData.password, 10);

    userData.password = hashPassword;

    // Profile Picture
    let boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userData.username}`;
    let girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userData.username}`;

    // New User
    const newUser = {
      ...userData,
      profilePic: userData.gender === "male" ? boyProfilePic : girlProfilePic,
    };

    if (newUser) {
      const createdUser = await userModel.create(newUser);
      const userId = createdUser._id;
      generateTokenAndSetCookie(userId, res);
      // console.log(res);

      res.status(201).json({
        success: "User has been created successfully",
        _id: userId,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ sucess: "Invalid User Data" });
    }
  } catch (error) {
    console.error("Error from signup", error.message);
    res.status(500).json({ success: "Internal Server Error.." });
  }
};

export const login = async (req, res) => {
  try {
    let userData = req.body;
    // console.log(userData);
    let user = await userModel.findOne({ username: userData.username });

    if (!user) {
      return res
        .status(401)
        .json({ success: "Invalid username and password!" });
    }

    // comparing password
    let comparedPassword = await bcrypt.compare(
      userData.password,
      user.password
    );

    if (!comparedPassword) {
      return res
        .status(401)
        .json({ success: "Invalid username and password!" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      success: "Login Successfully",
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("Error from login", error.message);
    res.status(500).json({ success: "Internal Server Error.." });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      success: "Logged out Successfully",
    });
  } catch (error) {
    console.error("Error from logout", error.message);
    res.status(500).json({ success: "Internal Server Error.." });
  }
};
