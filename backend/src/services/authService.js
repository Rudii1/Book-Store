const bycrpt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const createUser = async (userData) => {
  try {
    const email = userData.email;
    const password = userData.password;
    const firstName = userData.firstName;
    const lastName = userData.lastName;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bycrpt.hash(password, 10);
    const user = new User({
      email: email,
      firstName: firstName,
      lastName: lastName,
      role: "CUSTOMER",
      password: hashedPassword,
    });
    await user.save();
    return user;
  } catch (error) {
    console.error(`Error creating user: ${error}`);
  }
};

const loginUser = async (userData) => {
  try {
    const email = userData.email;
    const password = userData.password;
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      throw new Error("User not exists");
    }
    const isPasswordValid = await bycrpt.compare(password, existingUser.password); // Fix password validation
    if (!isPasswordValid) { // Fix condition to check if password is invalid
      throw new Error("Invalid password");
    }
    const token = jwt.sign(
      { id: existingUser._id, role: existingUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error) {
    console.error(`Error logging in user: ${error}`); // Fix error message
  }
};

module.exports = { createUser, loginUser };
