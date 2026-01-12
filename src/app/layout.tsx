import type { Metadata } from "next";
import { Nunito_Sans, Syne, Patrick_Hand } from "next/font/google"; // Using Syne as substitute for Concourse
import "./globals.css";
import { Navbar } from "@/components/navbar";

const nunitoSans = Nunito_Sans({
	variable: "--font-nunito-sans",
	subsets: ["latin"],
	weight: ["300", "400", "600", "700", "800", "900"],
});

const syne = Syne({
	variable: "--font-syne",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"], // Geometric weights
});

const patrickHand = Patrick_Hand({
	variable: "--font-patrick-hand",
	subsets: ["latin"],
	weight: ["400"],
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
			<body className={`${nunitoSans.variable} ${syne.variable} ${patrickHand.variable} antialiased bg-background text-foreground min-h-screen relative overflow-x-hidden`}>
				<div className="flex flex-col min-h-screen">
					{children}
				</div>
				<Navbar />
			</body>
		</html>
	);
}
