import mongoose from "mongoose";
const Schema = mongoose.Schema;

const hireMe = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		serviceType: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const HireMe = mongoose.model("ServiceRequest", hireMe);
