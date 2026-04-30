import User from "../models/userModel.js";
import bcrypt from "bcrypt";


// REGISTER
export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }


        const hashedPassword=await bcrypt.hash(password,10)

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: newUser
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// LOGIN (TEMP FIX - basic)
export const loginUser = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Login API working (not implemented yet)"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};