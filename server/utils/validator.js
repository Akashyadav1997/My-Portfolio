import { body, validationResult } from "express-validator";
import { ErrorHandler } from "./feature.js";

export const hireMeValidator = () => [
	body("name", "please Enter Your Name").notEmpty(),
	body("email", "Please Enter your email ").notEmpty(),
	body("serviceType", "Please Select Your Service").notEmpty(),
	body("description", "Please enter your description").notEmpty(),
];

export const contactMeValidator = () => [
	body("name", "please Enter Your Name").notEmpty(),
	body("email", "Please Enter your email ").notEmpty(),
	body("subject", "Please Enter Subject ").notEmpty(),
	body("message", "Please Enter Your Message ").notEmpty(),
];

export const validateHandler = (req, res, next) => {
	const errors = validationResult(req);
	console.log(errors);
	const errorMessage = errors
		.array()
		.map((err) => err.msg)
		.join();
	console.log(errorMessage);
	if (errors.isEmpty()) {
		return next();
	} else {
		console.log("validate handler is working");
		next(new ErrorHandler(errorMessage, 400));
	}
};
