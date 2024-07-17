/** @type {import('next').NextConfig} */
const nextConfig = {
	env:{
		SERVER_URL:"https://my-portfolio-server-vl7o.onrender.com/"
	},
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "http",
				hostname: "**",
			},
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

export default nextConfig;
