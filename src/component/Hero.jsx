import React, { useState, useEffect } from "react";
import logo from "../assets/bizonance_logo.png";
import { motion, AnimatePresence } from "framer-motion";

function ConnectBanner() {
	const [activeIndex, setActiveIndex] = useState(0);

	const items = [
		{
			bgColor: "bg-[#d2e3fc]",
			textColor: "text-[#1a73e8]",
			imgSrc:
				"https://www.gstatic.com/marketing-cms/assets/images/ads/ae/7f/d75256a9448ba703bb8902ff378d/unnamed-18.png",
			title: "Connect",
		},
		{
			bgColor: "bg-[#ceebd6]",
			textColor: "text-[#1e8f3e]",
			imgSrc:
				"https://www.gstatic.com/marketing-cms/assets/images/ads/82/27/230fcb96451bac10397e2b8f9951/unnamed-21.png",
			title: "Grow",
		},
		{
			bgColor: "bg-[#fff8e0]",
			textColor: "text-[#f29900]",
			imgSrc:
				"https://www.gstatic.com/marketing-cms/assets/images/ads/c0/54/b915083741c1b7d85f22560b5acc/unnamed-20.png",
			title: "Build",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
		}, 3000); // Change active item every 3 seconds
		return () => clearInterval(interval);
	}, [items.length]);

	return (
		<div className="w-full max-w-2xl flex items-center justify-center  mx-auto p-6">
			<div className="flex flex-col items-center gap-6">
				<div className="w-full flex flex-col md:flex-row items-center gap-8">
					{/* Animated Items */}
					<div className="flex flex-col items-center justify-center space-y-12">
						<AnimatePresence mode="wait">
							{items.map((item, index) =>
								index === activeIndex ? (
									<motion.div
										key={index}
										className="flex flex-col items-center justify-center gap-4"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.8 }}
										transition={{ duration: 0.6 }}
									>
										<motion.div
											className={`hidden sm:w-60 sm:h-60 p-7 sm:flex sm:items-center sm:justify-center ${item.bgColor} rounded-full shadow-md `}
										>
											<img height={200} width={200} src={item.imgSrc} alt="" />
										</motion.div>
										<motion.h1
											className={` font-bold text-center text-6xl ${item.textColor}`}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ duration: 0.5 }}
										>
											{item.title}
										</motion.h1>
									</motion.div>
								) : null
							)}
						</AnimatePresence>
					</div>

					{/* Logo */}
					<div className="w-80 h-80">
						<img
							src={logo}
							alt="Bizonance Logo"
							className="w-full h-full object-contain"
						/>
					</div>
				</div>

				{/* Name + tagline */}
				<div className="text-center space-y-2">
					<h1 className="text-4xl font-bold">
						<span className="text-7xl">with Bizonance.</span>
					</h1>
					<p className="text-red-600 text-xl font-medium">Brand Yahi Banta Hai!</p>
					<p className="text-gray-600 font-medium">
						The special kind of Business Reinforcement.
					</p>
				</div>
			</div>
		</div>
	);
}

export default ConnectBanner;
