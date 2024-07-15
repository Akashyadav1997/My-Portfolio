"use client";
import { FiSun } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs";

const Header = ({ setShowModal, darkMode, setDarkMode }) => {
	return (
		<>
			<div className=" duration-1000 xl:px-16 flex dark:bg-[#0d2438]  p-4 dark:text-white xxl:justify-evenly justify-between items-center w-full">
				{/* name */}
				<span
					className={`cursor-pointer text-sm xl:text-2xl xl:flex-row flex-col flex`}
				>
					<span>Akash</span>
					<span>Yadav</span>
				</span>
				{/* routes */}
				<div className="md:grid grid-flow-col space-x-8 mt-4 hidden ">
					<a href="#my-projects">
						<span className=" hover:bg-blue-900 xl:p-3 rounded-xl duration-300 hover:text-white xl:text-xl cursor-pointer">
							Projects
						</span>
					</a>
					<a href="#about">
						<span className=" hover:bg-blue-900 p-3 rounded-xl xl:text-xl hover:text-white duration-300 cursor-pointer">
							About Me
						</span>
					</a>
					<a href="#contact">
						<span className=" hover:bg-blue-900 p-3 rounded-xl xl:text-xl duration-300 hover:text-white cursor-pointer">
							Contact
						</span>
					</a>
				</div>
				<div className="flex items-center">
					<button
						className="bg-indigo-500 rounded-lg hover:bg-blue-600 duration-300 text-white  font-semibold p-3 px-4 mx-4"
						onClick={() => setShowModal(true)}
					>
						Hire Me
					</button>
					{darkMode ? (
						<FiSun
							className="bg-[#fff] rounded-lg p-3 hover:bg-[#f7e0e0] cursor-pointer duration-300"
							size={60}
							color="#183b57"
							onClick={()=>setDarkMode(false)}
						/>
					) : (
						<BsMoonStars
							className="bg-[#183b57] rounded-lg p-3 hover:bg-[#1c3143] cursor-pointer duration-300"
							size={60}
							color="white"
							onClick={()=>setDarkMode(true)}

						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
