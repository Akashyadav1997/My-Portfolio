import { FaLocationDot, FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { contactValidation } from "./Errorhandling";
import Loader from "./Loader";
import { toast } from "react-toastify";

const Contact = () => {
	const [isLoading, setIsLoading] = useState(false);
	const url = process.env.SERVER_URL;
	// console.log(url);

	const handleSubmit = async (e) => {
		try {
			setIsLoading(true);
			console.log(e);
			const response = await fetch(`${url}/contact`, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(e),
			});
			const { success, message, name } = await response.json();
			setIsLoading(false);
			console.log(success);
			console.log(message);
			const newName = name.charAt(0).toUpperCase() + name.slice(1);
			console.log(newName);
			if (success) {
				toast.success(`Thank You ${newName} We will reach out to you shortly`);
			} else {
				toast.error(message);
			}
		} catch (error) {
			toast.error(error);
			console.log(error);
			setIsLoading(false);
		}
	};
	return (
		<>
			<h1 className="text-4xl sm:text-6xl text-center">Contact Us</h1>
			<div className="grid xl:grid-flow-col  xl:grid-cols-2 w-full mt-8">
				<Formik
					initialValues={{ name: "", email: "", subject: "", message: "" }}
					onSubmit={handleSubmit}
					validationSchema={contactValidation}
				>
					<Form className="dark:shadow-white dark:bg-[#595757] w-11/12 mx-2 sm:w-4/5 flex flex-col items-center xl:items-end justify-self-center xl:justify-self-end rounded-xl">
						<h1 className="my-4 text-2xl self-center">Contact Form</h1>
						<div className="flex flex-col items-start w-4/5 my-2">
							<label className="mr-20">Name</label>
							<Field
								name="name"
								type="text"
								placeholder="Enter Your Name"
								className="ring-1 p-2 rounded-md my-2 w-full lg:w-4/5"
							/>
							<ErrorMessage
								name="name"
								component="div"
								className="text-red-600 place-self-start "
							/>
						</div>
						<div className="flex flex-col items-start w-4/5 my-2">
							<label className="mr-20">Email</label>
							<Field
								name="email"
								type="email"
								placeholder="Enter Your Email"
								className="ring-1 p-2 rounded-md my-2 w-full lg:w-4/5"
							/>
							<ErrorMessage
								name="email"
								component="div"
								className="text-red-600 place-self-start "
							/>
						</div>
						<div className="flex flex-col items-start w-4/5 my-2">
							<label className="mr-20">Subject</label>
							<Field
								name="subject"
								type="text"
								placeholder="Enter Your Subject"
								className="ring-1 p-2 rounded-md my-2 w-full lg:w-4/5"
							/>
							<ErrorMessage
								name="subject"
								component="div"
								className="text-red-600 place-self-start "
							/>
						</div>
						<div className="flex flex-col items-start w-4/5 my-2">
							<label className="mr-20">Message</label>
							<Field
								as="textarea"
								name="message"
								className="w-full lg:w-4/5 ring-1 rounded p-3 my-2"
								rows={7}
								placeholder="Enter Your Message"
							></Field>
							<ErrorMessage
								name="message"
								component="div"
								className="text-red-600 place-self-start "
							/>
						</div>
						<div className="flex flex-col items-center md:items-start w-4/5 my-2">
							<button
								type="submit"
								className="p-3 my-4 md:w-2/5 bg-blue-500 text-white rounded hover:bg-blue-700 duration-300"
							>
								{isLoading ? <Loader /> : "Send Request"}
							</button>
						</div>
					</Form>
				</Formik>
				<div className="flex flex-col xl:items-start mt-12">
					<h1 className=" text-2xl p-2 ml-8">Contact Details</h1>
					<div className="flex ml-2 xl:ml-12 mt-8">
						<FaLocationDot color="gray" size={35} />
						<span className="ml-2 xl:ml-8 overflow-auto ">
							Ghitorni Enclave, New Delhi, India &nbsp; PinCode : 110030
						</span>
					</div>
					<div className="flex ml-2 xl:ml-12 mt-8">
						<MdEmail size={35} color="gray" />
						<span className="ml-8 text-sm xl:text-lg">akashyd11@gmail.com</span>
					</div>
					<div className="flex ml-2 xl:ml-12 mt-8">
						<IoMdCall size={35} color="gray" />
						<span className="ml-8 text-sm xl:text-lg">+91 8929992732</span>
					</div>
					<div className="flex ml-2 xl:ml-12 mt-4">
						<FaSquareWhatsapp size={35} color="gray" />
						<span className="ml-8 text-sm xl:text-lg">
							+91 8929992732 &nbsp;/ +91 9013009017
						</span>
					</div>
					<h1 className=" text-2xl p-2 ml-8 mt-8">Social Media</h1>
					<div className="flex ml-2 xl:ml-12 mt-8 items-center justify-center sm:justify-start">
						<FaSquareInstagram size={35} color="gray" />
						<a
							className="ml-4 text-lg hover:text-blue-500 overflow-hidden hidden sm:inline-block"
							target="_blank"
							href="https://www.instagram.com/akash97.yadav/"
						>
							https://www.instagram.com/akash97.yadav/
						</a>
					</div>
					<div className="flex ml-2 xl:ml-12 mt-8 items-center justify-center sm:justify-start">
						<BsTwitterX size={35} color="gray" />
						<a
							className="ml-8 hover:text-blue-500 text-lg hidden sm:inline-block"
							target="_blank"
							href="https://x.com/Akash97yadav"
						>
							https://x.com/Akash97yadav
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
