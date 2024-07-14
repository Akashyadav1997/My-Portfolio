'use client'
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: ["300", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
const Projects = ({ data }) => {
	return (
		<div
			className={`${poppins.className}flex flex-col rounded-xl shadow-xl bg-white hover:bg-[#fbf3f3] max-h-[30rem] cursor-pointer duration-300`}
		>
			<Image src={data.image} height={600} width={600} alt="Not Found" className="max-h-[18rem] rounded-t-xl" />
			<p className="p-3 pb-1 w-full flex justify-center text-xl">{data.name}</p>
			<i className="w-full px-3 flex justify-center mb-3 mt-0">{data.type}</i>
		</div>
	);
};

export default Projects;
