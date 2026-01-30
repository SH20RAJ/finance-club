import type { Metadata } from "next";
import { Nunito_Sans, Syne } from "next/font/google"; 
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar"; // Adjusted path based on plan, or verify if it is @/components/navbar 
import { Footer } from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/smooth-scroll";

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
	weight: ["300", "400", "600", "700", "800", "900"],
});

const syne = Syne({
	variable: "--font-syne",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"], 
});

export const metadata: Metadata = {
	title: "Finance Club | BIT Mesra",
	description: "FinPro - The official Finance Club of BIT Mesra. Fostering financial literacy and market awareness.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark scroll-smooth">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body className={`${nunitoSans.variable} ${syne.variable} antialiased bg-background text-foreground min-h-screen relative overflow-x-hidden`}>
				<SmoothScroll>
					<div className="flex flex-col min-h-screen">
						<Navbar />
						{children}
						<Footer />
					</div>
				</SmoothScroll>
			</body>
		</html>
	);
}
