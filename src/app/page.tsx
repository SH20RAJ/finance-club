"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticker } from "@/components/ticker";
import { motion } from "framer-motion";
import { ArrowRight, Users, Award, BookOpen, LineChart } from "lucide-react";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 }
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	}
};

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen pb-32">
			{/* Ticker Section */}
			<div className="w-full fixed top-0 z-40 mt-[env(safe-area-inset-top)]">
				<Ticker
					items={[
						"Sensex: 72,500 ▲",
						"Nifty: 21,800 ▲",
						"FinStreet '25 Registration Open",
						"Budget Eye Discussion: Tomorrow 5 PM",
						"Gold: ₹62,000/10g ▼",
						"Join the Finance Revolution"
					]}
				/>
			</div>

			{/* Hero Section */}
			<section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
				{/* Abstract Background Elements */}
				<div className="absolute inset-0 z-0">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
				</div>

				<motion.div
					initial="initial"
					animate="animate"
					variants={staggerContainer}
					className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-6"
				>
					<motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest backdrop-blur-md">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
						</span>
						Market is Live
					</motion.div>

					<motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-white/90 to-white/50">
						FIN<span className="text-primary">PRO</span>
					</motion.h1>

					<motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light">
						The Official Finance Club of BIT Mesra. <br />
						<span className="text-foreground/80 font-normal">Invest in Knowledge. Trade in Skills.</span>
					</motion.p>

					<motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-8">
						<Button size="lg" className="rounded-full text-base h-12 px-8">
							Explore Events <ArrowRight className="ml-2 w-4 h-4" />
						</Button>
						<Button variant="outline" size="lg" className="rounded-full text-base h-12 px-8 border-white/20 hover:bg-white/5">
							About Us
						</Button>
					</motion.div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 1 }}
					className="absolute bottom-32 flex flex-col items-center gap-2 text-muted-foreground"
				>
					<span className="text-xs font-mono uppercase tracking-widest">Scroll to Explore</span>
					<div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
				</motion.div>
			</section>

			{/* Bento Grid Section */}
			<section className="w-full max-w-7xl mx-auto px-4 py-20 z-10" id="about">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
				>
					{/* Main Feature - FinStreet */}
					<Card className="md:col-span-2 row-span-1 md:row-span-2 relative overflow-hidden group">
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
						{/* Placeholder for image - using a generated gradient/pattern for now */}
						<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />

						<CardHeader className="relative z-10 h-full flex flex-col justify-end">
							<div className="mb-4 inline-flex items-center gap-2 px-2 py-1 rounded bg-primary text-primary-foreground w-fit text-xs font-mono uppercase font-bold">Flagship Event</div>
							<CardTitle className="text-4xl md:text-5xl text-white">FinStreet &apos;25</CardTitle>
							<CardDescription className="text-gray-300 text-lg mt-2 max-w-md">
								The absolute pinnacle of financial festivals. Competitions, leaders, and market mastery. Experience the thrill.
							</CardDescription>
							<Button variant="link" className="text-primary p-0 h-auto justify-start mt-4 group-hover:translate-x-2 transition-transform">
								Learn More <ArrowRight className="ml-1 w-4 h-4" />
							</Button>
						</CardHeader>
					</Card>

					{/* Stat Card 1 */}
					<Card className="flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-card to-card/50">
						<div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
							<Users className="w-8 h-8" />
						</div>
						<h3 className="text-4xl font-bold text-foreground">500+</h3>
						<p className="text-sm text-muted-foreground font-mono uppercase tracking-widest mt-2">Active Members</p>
					</Card>

					{/* Stat Card 2 */}
					<Card className="flex flex-col justify-center items-center text-center p-8 bg-gradient-to-br from-card to-card/50">
						<div className="p-4 rounded-full bg-secondary/10 text-secondary mb-4">
							<Award className="w-8 h-8" />
						</div>
						<h3 className="text-4xl font-bold text-foreground">30+</h3>
						<p className="text-sm text-muted-foreground font-mono uppercase tracking-widest mt-2">Annual Events</p>
					</Card>

					{/* Research Section */}
					<Card className="md:col-span-2 flex flex-col justify-between group cursor-pointer hover:border-secondary/50 transition-colors">
						<CardHeader>
							<CardTitle className="flex items-center gap-3">
								<LineChart className="w-6 h-6 text-secondary" />
								Research & Analysis
							</CardTitle>
							<CardDescription>
								Deep dives into market trends, equity analysis, and economic policies.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="p-3 rounded-lg bg-surface border border-white/5 flex justify-between items-center hover:bg-white/5 transition-colors">
								<div className="flex flex-col">
									<span className="font-medium">The Bull Run of &apos;24</span>
									<span className="text-xs text-muted-foreground">Published 2 days ago</span>
								</div>
								<ArrowRight className="w-4 h-4 text-muted-foreground" />
							</div>
							<div className="p-3 rounded-lg bg-surface border border-white/5 flex justify-between items-center hover:bg-white/5 transition-colors">
								<div className="flex flex-col">
									<span className="font-medium">Crypto: Bubble or Future?</span>
									<span className="text-xs text-muted-foreground">Published 1 week ago</span>
								</div>
								<ArrowRight className="w-4 h-4 text-muted-foreground" />
							</div>
						</CardContent>
					</Card>

					{/* Activities */}
					<Card className="bg-gradient-to-br from-primary/20 via-card to-card p-6 flex flex-col justify-center gap-4">
						<BookOpen className="w-10 h-10 text-primary mb-2" />
						<h3 className="text-2xl font-bold">Learn & Grow</h3>
						<p className="text-muted-foreground text-sm">
							Workshops, simulations, and guest lectures to sharpen your financial acumen.
						</p>
					</Card>
				</motion.div>
			</section>

			{/* CTA Section */}
			<motion.section
				className="w-full max-w-4xl mx-auto px-4 py-20 text-center"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
			>
				<h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
					Ready to <span className="text-secondary">Master the Market?</span>
				</h2>
				<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
					Join the most premier technical club of BIT Mesra. Whether you&apos;re a novice or a trader, there&apos;s a place for you at FinPro.
				</p>
				<Button size="lg" className="rounded-full h-14 px-10 text-lg shadow-[0_0_40px_rgba(252,211,77,0.3)] hover:shadow-[0_0_60px_rgba(252,211,77,0.5)] transition-shadow">
					Become a Member
				</Button>
			</motion.section>
		</main>
	);
}
