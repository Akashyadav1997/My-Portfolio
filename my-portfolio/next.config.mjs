/** @type {import('next').NextConfig} */
const nextConfig = {
	env:{
		// SERVER_URL:"https://my-portfolio-server-vl7o.onrender.com"
		SERVER_URL:"http://localhost:8000"
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
