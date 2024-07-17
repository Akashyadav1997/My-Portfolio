import { sendMessageToMail } from "../middleware/mail.js";
import { ContactMe } from "../models/contact.js";
import { HireMe } from "../models/hireMe.js";
import { ErrorHandler } from "../utils/feature.js";

export const hireMe = async (req, res, next) => {
	try {
		console.log(req.body);
		const { name, email, serviceType, description } = req.body;
		const hireMeRequest = await HireMe.create({
			name,
			email,
			serviceType,
			description,
		});
		await sendMessageToMail(email);
		return res.status(200).json({
			message: "Hire me route is successfully working",
			name: name,
			success: true,
		});
	} catch (error) {
		next(new ErrorHandler(error));
	}
};
export const contact = async (req, res, next) => {
	console.log("contact controller is woringggg fine");
	console.log("below is request body of conatact");
	console.log(req.body);
	const { name, email, subject, message } = req.body;
	try {
		const contactMe = await ContactMe.create({
			name: name,
			email: email,
			subject: subject,
			message: message,
		});
		await sendMessageToMail(email);

		return res.status(200).json({
			message: "Thank You For Contacting Me",
			success: true,
			name: name,
		});
	} catch (error) {
		console.log(error);
		next(Error(error));
	}
};
