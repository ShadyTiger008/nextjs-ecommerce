// db.js
import mysql from "mysql2/promise";
import { config } from "../../config/environment";

let pool: any;

let Host = config.get("db_host");
let User = config.get("db_user");
let Password = config.get("db_pass");
let Database = config.get("db_name");

export const connectDB = async () => {
  try {
    if (!pool) {
      pool = mysql.createPool({
        host: Host,
        user: User,
        password: Password,
        database: Database,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
      console.log("Connected to MySQL database");
    }
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); // Exit the process if unable to connect to the database
  }
};

export function getConnection() {
  if (!pool) {
    console.log("Database connection has not been established.");
  }
  return pool;
}

// import mongoose from "mongoose";

// export async function connectDB() {
//   try {
//     mongoose.connect(process.env.MONGO_URI!);
//     mongoose.connection.on("connected", () =>
//       console.log("Mongoose connected to " + process.env.MONGO_URI)
//     );
//     mongoose.connection.on("error", (error) => {
//       console.log(
//         "Mongo DB Connection error, Please make sure Database is up and running",
//         error
//       );
//       process.exit(1);
//     });
//   } catch (error) {
//     console.log("Somethings went wrong while connecting to DB!", error);
//   }
// }
