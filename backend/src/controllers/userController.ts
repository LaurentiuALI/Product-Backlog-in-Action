import User from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { Request, Response } from "express";

const createToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.SECRET_STRING as any, {
    expiresIn: "3d",
  });
};

// login user
export const userLogin = async (req: Request, res: Response) => {
  const { projectName, password } = req.body;

  try {
    if (!projectName || !password) {
      throw new Error("Please enter all fields");
    }

    const user = await User.findOne({ projectName });

    if (!user) {
      throw new Error("Project doesn't exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = createToken(user._id.toString());
    res.status(200).json({ projectName: projectName, mssg: token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ mssg: error.message });
    }
  }
};

// register user
export const userRegister = async (req: Request, res: Response) => {
  const { projectName, password } = req.body;

  try {
    if (!projectName || !password) {
      throw new Error("Please enter all fields");
    }
    const exists = await User.findOne({ projectName });

    if (exists) {
      throw new Error("Project already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ projectName, password: hash });

    const token = createToken(user._id.toString());

    res.status(200).json({ projectName: projectName, mssg: token });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      res.status(400).json({ mssg: error.message });
    }
  }
};
