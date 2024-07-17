import * as Yup from "yup";

export const contactValidation = Yup.object({
	name: Yup.string().required("Please Enter Your Name"),
	email: Yup.string()
		.required("Please Enter Your Email")
		.email("Please Enter Your Valid Email"),
	subject: Yup.string().required("Please Enter the Subject"),
	message: Yup.string().required("Please Enter the Message"),
});

export const hireMeValidation = Yup.object({
	name: Yup.string().required("Please Enter Your Name"),
	email: Yup.string()
		.required("Please Enter Your Email")
		.email("Please Enter Your Valid Email"),
	serviceType: Yup.string().required("Please Select the Service Type"),
	description: Yup.string().required("Please Write the Description"),
});
