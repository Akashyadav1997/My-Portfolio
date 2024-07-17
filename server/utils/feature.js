import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()

export const connectDB = (uri) => {
	mongoose
		.connect(uri, { dbName: "Portfolio" })
		.then((db) => {
			// console.log(db);
			console.log("database connected");
		})
		.catch((err) => {
			console.log(err);
		});
};

export class ErrorHandler extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}
