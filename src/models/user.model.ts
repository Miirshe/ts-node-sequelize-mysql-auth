// import packages 
import { DataTypes } from "sequelize";
import sequelize from "../config/db.config";

// Configure user model
const user = sequelize.define('users', {
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    }
});

export default user;