import { createUser, fetchUsers } from "../controllers/user.controller";
import express, { Router } from "express";

const userRoutes: Router = express.Router();
userRoutes.post('/user/register', createUser);
userRoutes.get('/users', fetchUsers);

export default userRoutes;