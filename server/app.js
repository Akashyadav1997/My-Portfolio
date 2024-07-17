import express from "express";
import dotenv from "dotenv";
import applicant from "./routes/applicant.js";
import { connectDB } from "./utils/feature.js";
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors";
const app = express();
dotenv.config({
	path: "./.env",
});
const port = process.env.PORT;
const uri = process.env.MONGO_URI;
// body parser
app.use(express.json());
console.log(process.env.CLIENT_URL);
app.use(
	cors({
		origin: process.env.CLIENT_URL,
	})
);
app.use(applicant);

//deafult route
app.use("/", (req, res, next) => {
	res.send("Portfolio Server side default Routes");
});

//handle all errors
app.use(errorMiddleware);

app.listen(port, () => {
	connectDB(uri);
	console.log("Server is listening on", port);
});
