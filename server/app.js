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
const port = process.env.PORT || 8000;
const uri = process.env.MONGO_URI;
// body parser
app.use(express.json());
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["my-custom-header"],
		credentials: true,
	})
);
app.use(applicant);

//deafult route
app.use("/", (req, res, next) => {
	res.send("Akash Yadav Portfolio Server Side Default Route");
});

//handle all errors
app.use(errorMiddleware);

app.listen(port, () => {
	connectDB(uri);
	console.log("Server is listening on", port);
});
