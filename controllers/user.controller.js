// Code the app/controllers/user.controller.js for following API's

// signUp() - to create a USER object and save it in USER schema.

// login() - to check the entered username and password is matching with data in USER schema.
// If yes, then the person has logged in.

// logout() - This requires the unique Id of the logged-in person. 

const User = require('../models/user.model');

const signUp = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (!user) {
            throw new Error('Invalid username or password');
        }
        // Here you might generate a token for the user and return it in the response
        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

const logout = async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        return res.status(400).json({ message: 'userId is required' });
    }

    try {
        // Perform logout operation based on userId
        res.status(200).json({ message: 'Logout successful' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const getCouponCode = async (req, res) => {
    try {
        // Your logic to generate and return a coupon code
        const couponCode = generateCouponCode(); // Example function to generate a coupon code
        res.status(200).json({ couponCode });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const bookShow = async (req, res) => {
    try {
        // Your logic to book a show
        const bookingDetails = bookShow(); // Example function to book a show
        res.status(200).json({ bookingDetails });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    signUp,
    login,
    logout,
    getCouponCode,
    bookShow
};
