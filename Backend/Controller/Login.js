import { User } from "../Models/User.js";
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All Fields Are Required"
            })
        }

        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User Not Found"
            })
        }

        if (user.password !== password) {
            return res.status(400).json({
                success: false,
                message: "Incorrect Password"
            })
        }

        const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});

        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "User Logged In Successfully",
        })
    } catch (error) {
        console.log("Loging error", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const logout = async (req,res) => {
    try {
        
        const user = req.user;
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            })
        }
        
        res.clearCookie('token');

        return res.status(200).json({
            success: true,
            message: "User Logged Out Successfully",
        })
    } catch (error) {
        console.log("Loging error", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}