import jwt from "jsonwebtoken"
import { User } from "../Models/User.js";

export const isThere = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "user not found", 
            })
        }

        const user = jwt.verify(token, process.env.JWT_SECRET);

        const isAlreadyExists = await User.findOne({ _id: user.id });
        if (!isAlreadyExists) {
            return res.status(400).json({
                success: false,
                message: "Invalid Token", 
            })
        }

        req.user = user;
        next();
    } catch (err) {
        console.log('Error in isThere', err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}