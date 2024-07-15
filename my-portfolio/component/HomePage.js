"use client";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { RiDownloadCloudLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Modal from "./Modal";
import Projects from "./Projects";
import About from "./About";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Contact from "./Contact";
import { BsTwitterX } from "react-icons/bs";
import Header from "./Header";
import Link from "next/link";

const poppins = Poppins({
	weight: ["300", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
const HomePage = () => {
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);
	const [darkMode, setDarkMode] = useState(false);
	const [projectData, setProjectData] = useState([
		{
			name: "My First Project",
			image:
				"https://www.skillvertex.com/blog/wp-content/uploads/2023/11/Data-Science-2024-01-03T114324.166-1.png",
			type: "E-commerce",
		},
		// {
		// 	name: "My Second Project",
		// 	image:
		// 		"https://nextjs-tailwindcss-portfolio.vercel.app/_next/image?url=%2Fimages%2Fweb-project-2.jpg&w=1920&q=75",
		// 	type: "E-commerce",
		// },
		{
			name: "My Third Project",
			image:
				"https://nextjs-tailwindcss-portfolio.vercel.app/_next/image?url=%2Fimages%2Fui-project-1.jpg&w=1920&q=75",
			type: "E-commerce",
		},
		{
			name: "My Fourth Project",
			image:
				"https://nextjs-tailwindcss-portfolio.vercel.app/_next/image?url=%2Fimages%2Fui-project-2.jpg&w=1920&q=75",
			type: "E-commerce",
		},
		{
			name: "My Fifth Project",
			image:
				"https://www.skillvertex.com/blog/wp-content/uploads/2023/11/Data-Science-2024-01-03T114324.166-1.png",
			type: "E-commerce",
		},
		// {
		// 	name: "My Sixth Project",
		// 	image:
		// 		"https://www.skillvertex.com/blog/wp-content/uploads/2023/11/Data-Science-2024-01-03T114324.166-1.png",
		// 	type: "E-commerce",
		// },
	]);
	return (
		<div
			className={`${poppins.className} w-full ${darkMode ? "dark" : "null"}`}
		>
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<div className="flex flex-col  xl:w-[32rem]">
						<label className="p-5 text-xl self-center">
							What Project are Looking for ?{" "}
						</label>
						<input
							type="text"
							placeholder="Your Name"
							className="ring-1 ring-gray-600 p-2 rounded-lg mx-3 my-3"
						/>
						<input
							type="email"
							placeholder="Your Email"
							className="ring-1 ring-gray-600 p-2 rounded-lg mx-3 my-3"
						/>
						<select className="ring-1 ring-gray-600 p-2 rounded-lg mx-3 my-3">
							<option>What Type of Project Required ? </option>
							<option>Web Development</option>
							<option>App Development</option>
							<option>Others</option>
						</select>
						<textarea
							cols={5}
							rows={5}
							placeholder="Project Description"
							className="ring-1 ring-gray-600 rounded-lg p-2 mx-3 my-2"
						></textarea>
						<button className="bg-blue-600 w-3/5 self-center p-2 rounded-lg text-white hover:bg-blue-800 duration-300">
							Submit
						</button>
					</div>
				</Modal>
			)}
			{/* <Header/> */}
			<Header
				setShowModal={setShowModal}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
			/>
			{/* body */}
			<div className="w-full bg-[#fffefe] dark:bg-[#0d2438] dark:text-white duration-1000 ">
				<div className="relative flex flex-col items-center">
					<div className="flex xl:flex-row flex-col w-full">
						<div className="w-full flex flex-col items-center mt-32 xl:mb-2">
							<h1 className="text-center self-center xl:self-end text-5xl my-2 font-semibold dark:text-gray-100 text-gray-600">
								HI, I AM AKASH YADAV
							</h1>
							<p className="self-center xl:self-end text-4xl mt-2 dark:text-gray-50 font-sans text-gray-900 text-center">
								A MERN STACK DEVELOPER
							</p>
							<p className="xl:self-end text-3xl my-5 dark:text-gray-50 text-gray-600">
								& Korean Language Expert{" "}
							</p>
							<a href="/akash-resume.pdf" download>
								<button className="ring-1 ring-gray-500 my-6 px-10 dark:bg-white dark:text-black hover:ring-blue-600 xl:self-end hover:bg-blue-600 duration-300 flex items-center p-3 text-gray-600 rounded-lg hover:text-white">
									<RiDownloadCloudLine
										color="black"
										className="mr-4"
										size={30}
									/>
									Download CV
								</button>
							</a>
							<div className="flex w-full justify-center xl:justify-end">
								<Link href="https://github.com/Akashyadav1997">
									<FaGithub size={50} className="mx-4 cursor-pointer" />
								</Link>
								<Link href="https://www.linkedin.com/in/akash-yadav-5b19a921a/">
									<FaLinkedin size={50} className="mx-4 cursor-pointer" />
								</Link>
							</div>
						</div>
						<div className="xl:relative mb-72 xl:mb-1">
							<svg
								viewBox="10 30 200 200"
								xmlns="http://www.w3.org/2000/svg"
								style={{ width: "1000px", height: "1000px" }}
								className="hidden xl:block"
							>
								<path
									fill="#FF0066"
									d="M56.9,-32.9C66.7,-15.9,62.7,9,50.9,27.8C39.2,46.6,19.6,59.2,2.3,57.9C-14.9,56.5,-29.8,41.2,-40.3,23.1C-50.8,5.1,-56.9,-15.6,-49.4,-31.3C-42,-47,-21,-57.7,1.3,-58.4C23.6,-59.2,47.1,-50,56.9,-32.9Z"
									transform="translate(100 100)"
								/>
							</svg>
							<Image
								src="/akash-old.png"
								className="z-10 top-16 xl:ml-20 xl:absolute block rounded-3xl"
								width={550}
								height={550}
								alt="Not Available"
							/>
						</div>
					</div>
					<div className="text-7xl dark:text-white text-black absolute bottom-44">
						Portfolio
					</div>
					<div className="text-3xl dark:text-white text-black absolute text-center bottom-24  md:bottom-28">
						Search projects by there title
					</div>
					<div className="text-lg text-black z-10 absolute bottom-6 xl:bottom-12 sm:left-[9rem] xl:left-[16rem] flex flex-row justify-center items-center">
						<CiSearch
							size={45}
							className=" mr-5"
							color={`${darkMode ? "white" : "black"}`}
						/>
						<input
							type="text"
							placeholder="Search Projects here"
							className="p-3 ring-gray-400 rounded-lg ring-1"
						/>
					</div>
				</div>
			</div>
			<div
				className="flex flex-col items-center w-full dark:bg-[#0d2438] duration-1000"
				id="my-projects"
			>
				<div className="grid xl:grid-cols-2 grid-cols-1 items-start gap-5 justify-items-center ">
					{projectData.map((item, index) => (
						<Projects key={index} data={item} />
					))}
				</div>
			</div>
			<div
				className="w-full flex flex-col pt-12 px-12 shadow-2xl py-4 pb-12 rounded-xl duration-1000 dark:rounded-none dark:text-white dark:bg-[#0d2438]"
				id="about"
			>
				<About />
			</div>
			<div
				className="md:w-full flex flex-col items-center py-12 duration-1000 dark:text-white dark:bg-[#0d2438]"
				id="contact"
			>
				<Contact />
			</div>

			{/* footer  */}
			<div className="w-full bg-[#0d2438] min-h-56 text-white text-xl flex items-center flex-col">
				<div className="mt-4 text-4xl">Akash Yadav</div>
				<div className="mt-4">This Portfolio has been designed by Using</div>
				<div className="mt-4 text-center my-3">
					Tailwind & Next.js for Frotend and Node.js, Express and MongoDB for
					Backend.
				</div>
				<div className="flex my-4">
					{" "}
					<Link href="https://github.com/Akashyadav1997">
						<FaGithub size={40} className="mx-4 cursor-pointer" />
					</Link>
					<Link href="https://www.linkedin.com/in/akash-yadav-5b19a921a/">
						<FaLinkedin size={40} className="mx-4 cursor-pointer" />
					</Link>
					<Link href="https://x.com/Akash97yadav">
						<BsTwitterX size={40} className="mx-4 cursor-pointer" />
					</Link>
					<Link href="https://www.instagram.com/akash97.yadav/">
						<FaSquareInstagram size={40} className="mx-4 cursor-pointer" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
