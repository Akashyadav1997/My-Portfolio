import React from "react";
import { RiNextjsFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa6";
import { DiJqueryLogo } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

const About = () => {
	return (
		<>
			<h1 className="text-center text-6xl my-8">About Me</h1>
			<div className="flex xl:flex-row flex-col">
				<div className="flex flex-col w-full xl:w-[50%]">
					<div className="grid grid-flow-row grid-cols-10 px-4 py-4 ring-1 p-2 rounded-xl hover:ring-gray-800 ring-gray-300 duration-300 my-4">
						<h2 className=" text-2xl col-span-10 xl:col-span-2 self-center">Frotent</h2>
						<p className="grid grid-flow-row grid-cols-5 col-span-8 gap-5">
							<RiNextjsFill size={65} />
							<RiReactjsFill size={65} color="#6fc1f4" />
							<TiHtml5 size={75} color="red" />
							<FaCss3 size={65} color="blue" />
							<DiJqueryLogo size={65} color="#6fc1f4" />
						</p>
						<h2 className=" text-2xl col-span-10 xl:col-span-2 self-center">Backend</h2>
						<p className="grid grid-flow-row grid-cols-4 col-span-10 xl:col-span-8 gap-5 my-4">
							<DiNodejs size={95} color="black" />
							<SiExpress size={75} />
						</p>
						<h2 className=" text-2xl col-span-10 xl:col-span-2 self-center">Database</h2>
						<p className="grid grid-flow-row grid-cols-4 col-span-8 gap-5 my-4">
							<DiMongodb size={75} color="green" />
							<SiMysql size={75} />
						</p>
						<h2 className=" text-2xl col-span-10 xl:col-span-3 self-center">Miscellaneous</h2>
						<p className="grid grid-flow-row grid-cols-4 col-span-7 gap-5 my-4">
							<SiSocketdotio size={65} />
							<FaDocker size={75} color="#6fc1f4" />
							<FaGitSquare size={75} color="#db4c1f" />
							<FaAws size={75} />
						</p>
						<h2 className=" text-2xl col-span-10 xl:col-span-3 self-center">Frameworks</h2>
						<p className="grid grid-flow-row grid-cols-3 col-span-7 gap-5 my-4">
							<SiExpress size={75} />
							<RiTailwindCssFill size={75} color="#6fc1f4" />
							<FaBootstrap size={75} color="purple" />
						</p>
					</div>
					<div className="grid grid-flow-row xl:grid-flow-col xl:grid-cols-10 px-4 ring-1 p-2 rounded-xl hover:ring-gray-800 ring-gray-300 duration-300">
						<h2 className=" text-2xl col-span-10 xl:col-span-2 self-center justify-self-center mb-6 xl:mb-0">Hobbies</h2>
						<p className="grid grid-flow-row grid-cols-2 col-span-8 gap-5">
							<span className="text-lg bg-[#5ebaf3e4] text-white font-semibold rounded-xl p-2 px-1 text-center">
								Photography
							</span>
							<span className="text-lg bg-[#5ebaf3e4] text-white font-semibold rounded-xl p-2 px-1 text-center">
								Cycling
							</span>
							<span className="text-lg bg-[#5ebaf3e4] text-white font-semibold rounded-xl p-2 px-1 text-center">
								Photo Editing
							</span>
						</p>
					</div>
				</div>
				<p className="w-full xl:w-[50%] xl:px-8 py-2">
					Hey,I'm a Mern Stack Developer with with a 2 years of experience in
					this field. I have completed my graduation from Delhi University as
					Bachelor's in Arts and after that i started learning kroean language
					from Korean Cultural Center and got placed at Samsung Display Noida.
					over their i worked as an Korean Language Interpreter as a position of
					Associate II, over there i got introduced with JIRA and website
					Testing so i got an interest in web development as well. after 1 year
					in Samsung i Joined Newton School to learn Full Stack Development,
					after that i got Intern opportunity in Lingual Consultancy as a
					Frotent Developer. and after that i got placed in Nambix Technology as
					Frotent-Developer. Since then i'm Enhancing my Skills with Next.js and
					MERN Technologies. I'm also learning App Development in React Native.
				</p>
			</div>
		</>
	);
};

export default About;
