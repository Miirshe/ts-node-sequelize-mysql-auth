import { Request, Response } from "express";
import bcrypt from "bcrypt";
import user from "../models/user.model";


export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        const isExistUser = await user.findOne({ where: { email: email } });
        if (isExistUser) {
            return res.status(403).json({ message: "User already exist." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await user.create({ username, email, password : hashedPassword  });
        if (!newUser) {
            return res.status(404).json({ message: "User not created." });
        }

        return res.status(200).json({ message: "User created successfully" });

    } catch (error) {
        console.log("Error registering user", error?.message);
        res.status(500).json({ message: error });
    }
}

export const fetchUsers = async (req: Request, res: Response) => {
    try {
        const fetchUsers = await user.findAll();
        if (fetchUsers.length == 0) {
            return res.status(404).json({ message: "No User Found." });
        }
        return res.status(200).json({ fetchUsers });
    } catch (error) {
        console.log("Error fetching user", error?.message);
        res.status(500).json({ message: error });
    }
}