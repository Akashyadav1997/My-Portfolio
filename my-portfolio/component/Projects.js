"use client";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
const poppins = Poppins({
	weight: ["300", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
const Projects = ({ data }) => {
	return (
		<div
			className={`${poppins.className}flex relative flex-col rounded-xl shadow-xl bg-white hover:bg-[#4b4a4a] max-h-[30rem] cursor-pointer hover:text-white duration-300 textWhite`}
		>
			<Image
				src={data.image}
				height={600}
				width={600}
				alt="Not Found"
				className="max-h-[18rem] rounded-t-xl"
			/>
			<p className="p-3 pb-1  w-full flex justify-center text-xl">
				{data.name}
			</p>
			<div className="inset-0 absolute flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
				<p className="text-black text-center">
					{data.description}
					{/* <br /> */}
					<Link
						target="_blank"
						href={`${data.link}`}
						className="textYellow underline font-bold flex justify-center"
					>
						Visit
						<MdOutlineArrowOutward />
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Projects;
