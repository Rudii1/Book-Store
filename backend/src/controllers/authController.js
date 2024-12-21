const {createUser, loginUser} = require("../services/authService");

const signup = async (req, res) => {
    try {
        await createUser(req.body);
        res.status(201).json({message: "Signup successful"});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const login = async (req, res) => {
    try {
        const token = await loginUser(req.body);
        res.status(200).json({message: "Login successful", token}); 
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

module.exports = {signup, login};