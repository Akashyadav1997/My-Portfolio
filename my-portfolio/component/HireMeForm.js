"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { hireMeValidation } from "./Errorhandling";

const HireMeForm = ({ setShowModal }) => {
	console.log(process.env.SERVER_URL);
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = async (e) => {
		// e.preventDefault();
		setIsLoading(true);
		const url = process.env.SERVER_URL;
		const response = await fetch(`${url}/hireme`, {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(e),
		});
		const { success, name } = await response.json();
		const newName = name.charAt(0).toUpperCase() + name.slice(1);
		setShowModal(false);
		setIsLoading(false);
		if (success) {
			toast.success(`Thank You ${newName}. We will reach out to you shortly. `);
		}
		console.log(result);
	};
	return (
		<>
			<Formik
				initialValues={{
					name: "",
					email: "",
					serviceType: "",
					description: "",
				}}
				validationSchema={hireMeValidation}
				onSubmit={handleSubmit}
			>
				<Form className="flex flex-col  xl:w-[32rem]">
					<h1 className="p-5 text-xl self-center">
						What Project are Looking for ?{" "}
					</h1>
					<Field
						type="text"
						name="name"
						placeholder="Your Name"
						className="ring-1 ring-gray-600 p-2 rounded-lg mx-3 my-3"
					/>
					<ErrorMessage
						name="name"
						component="div"
						className="text-red-600 place-self-start "
					/>
					<Field
						type="email"
						name="email"
						placeholder="Your Email"
						className="ring-1 ring-gray-600 p-2 rounded-lg mx-3 my-3"
					/>
					<ErrorMessage
						name="email"
						component="div"
						className="text-red-600 place-self-start "
					/>
					<Field
						as="select"
						className="ring-1 ring-gray-600 p-2 rounded-lg mx-3 my-3"
						name="serviceType"
					>
						<option>What Type of Project Required ? </option>
						<option value={"webDev"}>Web Development</option>
						<option value={"appDev"}>App Development</option>
						<option value={"others"}>Others</option>
					</Field>
					<ErrorMessage
						name="serviceType"
						component="div"
						className="text-red-600 place-self-start "
					/>
					<Field
						as="textarea"
						cols={5}
						rows={5}
						placeholder="Project Description"
						name="description"
						className="ring-1 ring-gray-600 rounded-lg p-2 mx-3 my-2"
					/>
					<ErrorMessage
						name="description"
						component="div"
						className="text-red-600 place-self-start"
					/>
					<button
						type="submit"
						className="bg-blue-600 w-3/5 self-center p-2 rounded-lg text-white hover:bg-blue-800 duration-300"
					>
						{isLoading ? <Loader /> : "Submit"}
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default HireMeForm;
