// import packages
import { Sequelize } from "sequelize";
import { dbUrl } from "./initial.config";

// Initialize Sequelize
const sequelize = new Sequelize(dbUrl);

// Configure Database
export const connectDB = async (): Promise<void> => {
    try {
        await sequelize.authenticate()
        console.log("Connected to database");
        await sequelize.sync();
        console.log('Models synced successfully');
    } catch (error) {
        console.log("Error connecting to database", error);
    }
}

export default sequelize;


