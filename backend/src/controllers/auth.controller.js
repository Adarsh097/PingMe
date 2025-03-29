import User from "../models/user.model.js";
import bcrypt, { genSalt } from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be alleast 6 characters",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "Email already exists",
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
        fullName,
        email,
        password : hashedPassword
    });

    if(newUser){
        //generate token here


    }else{
        
    }


  } catch (error) {}
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
