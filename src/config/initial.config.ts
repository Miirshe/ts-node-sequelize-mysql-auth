// import packages
import dotenv from "dotenv";

// configure env
dotenv.config();

// initialize  configuration
export const PORT: string | number = process.env.SERVER_PORT || 8000;
export const dbUrl: string = process.env.DATABASE_URL + process.env.DATABASE_NAME || "yonodeDB";