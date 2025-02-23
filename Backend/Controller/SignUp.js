import {User} from "../Models/User.js";

export const signUp = async (req, res) => {
    try {
        const { displayName, email, password } = req.body;

        const alreadyExists = await User.findOne({ email });
        if (alreadyExists) {
            return res.status(400).json({
                success: false,
                message: "User Already Exists"
            })
        }

        if (!email || !password || !displayName) {
            return res.status(400).json({
                success: false,
                message: "All Fields Are Required"
            })
        }

        const user = await User.create({ email, password, displayName });
        return res.status(200).json({
            success: true,
            message: "User Created Successfully",
            data: user,
        })
    } catch (err) {
        console.log("SignUP", err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}