import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Akash Portfolio",
	description: "My Portfolio App using Next.js tailwind Formik & Node.js, Express.js and MongoDB",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<ToastContainer theme="colored" />
			</body>
		</html>
	);
}
