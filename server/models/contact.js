import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactMe = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		subject: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
export const ContactMe = mongoose.model("ContactMeRequest", contactMe);
