import React from "react";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
	FaHtml5,
	FaCss3,
	FaDocker,
	FaGitSquare,
	FaAws,
	FaBootstrap,
} from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { DiJqueryLogo, DiNodejs, DiMongodb } from "react-icons/di";
import { SiExpress, SiMysql, SiSocketdotio } from "react-icons/si";

const About = () => {
	return (
		<>
			<h1 className="text-center text-6xl my-8">About Me</h1>
			<div className="flex xl:flex-row flex-col">
				<div className="flex flex-col w-full xl:w-[50%]">
					<div className="grid grid-flow-row grid-cols-10 px-4 py-4 ring-1 p-2 rounded-xl hover:ring-gray-800 ring-gray-300 duration-300 my-4 w-full">
						<h2 className="text-2xl col-span-10 xl:col-span-2 self-center my-4">
							Frontend
						</h2>
						<div className="grid grid-flow-row grid-cols-5 col-span-8 gap-5">
							<RiNextjsFill className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14" />
							<RiReactjsFill
								className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14"
								color="#6fc1f4"
							/>
							<TiHtml5
								className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14"
								color="red"
							/>
							<FaCss3
								className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14"
								color="blue"
							/>
							<DiJqueryLogo
								className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14"
								color="#6fc1f4"
							/>
						</div>
						<h2 className="text-2xl col-span-10 xl:col-span-2 self-center my-4">
							Backend
						</h2>
						<div className="grid grid-flow-row grid-cols-4 col-span-10 xl:col-span-8 gap-5 my-4">
							<DiNodejs
								className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14"
								color="black"
							/>
							<SiExpress className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14" />
						</div>
						<h2 className="text-2xl col-span-10 xl:col-span-2 self-center">
							Database
						</h2>
						<div className="grid grid-flow-row grid-cols-4 col-span-8 gap-5 my-4">
							<DiMongodb
								className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14"
								color="green"
							/>
							<SiMysql className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14" />
						</div>
						<h2 className="text-2xl col-span-10 xl:col-span-3 self-center">
							Miscellaneous
						</h2>
						<div className="grid grid-flow-row grid-cols-4 col-span-7 gap-5 my-4">
							<SiSocketdotio className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14" />
							<FaDocker
								className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14"
								color="#6fc1f4"
							/>
							<FaGitSquare
								className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14"
								color="#db4c1f"
							/>
							<FaAws className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14" />
						</div>
						<h2 className="text-2xl col-span-10 xl:col-span-3 self-center">
							Frameworks
						</h2>
						<div className="grid grid-flow-row grid-cols-3 col-span-7 gap-5 my-4">
							<SiExpress className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14" />
							<RiTailwindCssFill
								className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14"
								color="#6fc1f4"
							/>
							<FaBootstrap
								className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-14 xl:h-14"
								color="purple"
							/>
						</div>
					</div>
					<div className="grid grid-flow-row grid-row-10 xl:grid-flow-col items-center xl:grid-cols-10 px-4 ring-1 p-2 rounded-xl hover:ring-gray-800 ring-gray-300 duration-300">
						<h2 className="text-2xl col-span-10 xl:col-span-2 self-center justify-self-center mb-6 xl:mb-0">
							Hobbies
						</h2>
						<div className="grid grid-flow-row grid-cols-2 col-span-8 gap-2 xl:gap-5">
							<span className="text-sm xl:text-lg col-span-2 xl:col-span-1 bg-[#5ebaf3e4] text-white xl:font-semibold rounded-xl p-2 px-2 text-center">
								Photography
							</span>
							<span className="text-sm xl:text-lg col-span-2 xl:col-span-1 bg-[#5ebaf3e4] text-white xl:font-semibold rounded-xl p-2 px-1 text-center">
								Cycling
							</span>
							<span className="text-sm xl:text-lg bg-[#5ebaf3e4] col-span-2 xl:col-span-1 text-white xl:font-semibold rounded-xl p-2 px-1 text-center">
								Photo Editing
							</span>
						</div>
					</div>
				</div>
				<div className="w-full xl:w-[50%] xl:px-8 xl:text-xl xl:pt-8 py-2">
					<p>
						I am a MERN Stack Developer with two years of experience. I
						graduated with a Bachelor's in Arts from Delhi University.
					</p>
					<p>
						After graduation, I learned Korean at the Korean Cultural Center and
						worked as a Korean Language Interpreter at Samsung Display Noida.
						During my time at Samsung, I was introduced to JIRA and website
						testing, which sparked my interest in web development.
					</p>
					<p>
						To pursue this interest, I joined Newton School to learn Full Stack
						Development. I then interned as a Frontend Developer at Lingual
						Consultancy and later joined Nambix Technology in the same role. I
						have been enhancing my skills in Next.js and MERN technologies and
						am currently learning app development with React Native.
					</p>
					<p>
						I am working on an online teaching dashboard that allows students
						and teachers to collaborate on classwork, attendance, and other
						activities. Additionally, I am learning React Native and WebRTC to
						expand my skill set.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
