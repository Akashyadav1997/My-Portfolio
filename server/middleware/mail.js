import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
	service: "gmail",
	port: 587,
	secure: false,
	auth: {
		user: process.env.USER_EMAIL,
		pass: process.env.USER_PASSWORD,
	},
});

export const sendMessageToMail = async (email) => {
	console.log("send email is working now");
	try {
		await transporter.sendMail({
			from: {
				name: "Akash Portfolio",
				address: process.env.USER_EMAIL,
			},
			to: email,
			subject: "Thank You for Visiting My Portfolio",
			text: "Thank you for reaching out to me. I will contact you soon.",
			html: `<div><br/> Hey, Thanks for reaching us.<br/> <br/> Akash will contact to you soon, hope you have entered the right details. you can fill the form again if needed </div>`,
		});
	} catch (error) {
		console.error("Failed to send email:", error);
	}
};
