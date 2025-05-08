import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Generate JWT Token
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
};

// Register a user
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    const user = await User.create({ name, email, password });
    const token = generateToken(user);

    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        },
    });
};

// Login a user
export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user);

    res.status(200).json({
        success: true,
        message: 'Logged in successfully',
        data: {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        },
    });
};

// Get all users
export const getAllUsers = async (req, res) => {
    const users = await User.find().select('-password'); // Exclude password
    res.status(200).json({
        success: true,
        count: users.length,
        data: users,
    });
};

// Get single user by ID
export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, data: user });
};

// Update user by ID
export const updateUser = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
        user.password = password; // Will be hashed by pre-save hook
    }

    await user.save();

    res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
    });
};

// Delete user by ID
export const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, message: 'User deleted successfully' });
};
