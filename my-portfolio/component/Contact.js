import { FaLocationDot, FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Contact = () => {
	return (
		<>
			<h1 className="text-6xl">Contact Us</h1>
			<div className="grid xl:grid-flow-col  xl:grid-cols-2 w-full mt-8">
				<div className="shadow-2xl dark:shadow-white dark:bg-[#595757] w-4/5 flex flex-col items-center xl:items-end justify-self-center xl:justify-self-end rounded-xl">
					<h1 className="my-4 text-2xl self-center">Contact Form</h1>
					<div className="flex flex-col items-start w-4/5 my-2">
						<label className="mr-20">Name</label>
						<input
							type="text"
							placeholder="Enter Your Name"
							className="ring-1 p-2 rounded-md my-2 w-4/5"
						/>
					</div>
					<div className="flex flex-col items-start w-4/5 my-2">
						<label className="mr-20">Email</label>
						<input
							type="email"
							placeholder="Enter Your Email"
							className="ring-1 p-2 rounded-md my-2 w-4/5"
						/>
					</div>
					<div className="flex flex-col items-start w-4/5 my-2">
						<label className="mr-20">Subject</label>
						<input
							type="text"
							placeholder="Enter Your Subject"
							className="ring-1 p-2 rounded-md my-2 w-4/5"
						/>
					</div>
					<div className="flex flex-col items-start w-4/5 my-2">
						<label className="mr-20">Message</label>
						<textarea
							className="w-4/5 ring-1 rounded p-3 my-2"
							rows={7}
							placeholder="Enter Your Message"
						></textarea>
					</div>
					<div className="flex flex-col items-start w-4/5 my-2">
						<button className="p-3 my-4 bg-blue-500 text-white rounded hover:bg-blue-700 duration-300">
							Send Message
						</button>
					</div>
				</div>
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
						<span className="ml-8 text-sm xl:text-lg">+91 8929992732 &nbsp;/ +91 9013009017</span>
					</div>
					<h1 className=" text-2xl p-2 ml-8 mt-8">Social Media</h1>
					<div className="flex ml-2 xl:ml-12 mt-8 items-center">
						<FaSquareInstagram size={35} color="gray" />
						<a
							className="ml-4 text-[12px] xl:text-lg hover:text-blue-500 overflow-hidden"
							target="_blank"
							href="https://www.instagram.com/akash97.yadav/"
						>
							https://www.instagram.com/akash97.yadav/
						</a>
					</div>
					<div className="flex ml-2 xl:ml-12 mt-8">
						<BsTwitterX size={35} color="gray" />
						<a
							className="ml-8 hover:text-blue-500 text-sm xl:text-lg"
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
