import * as React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Menu } from "lucide-react"; // Import the Menu icon from lucide-react
import logo from "../assets/bzionan.png"; // Update the path to your logo file

const Navbar = () => {
  const nav = ["Overview", "Solutions", "Partners", "Expert support"];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handler functions for drawer
  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  return (
		<>
			<nav className="shadow-md h-16 flex items-center px-4 py-3 bg-white">
				<div className="flex gap-4 items-center">
					{/* Mobile Menu Button with Lucide Menu Icon */}
					<button
						className="md:hidden sm:flex items-center justify-center rounded-lg border border-transparent text-sm text-white bg-black-500 transition-all"
						type="button"
						aria-label="Open Menu"
						onClick={handleOpenDrawer}
					>
						<Menu className="w-6 h-6 text-black" />
					</button>
				</div>
				{/* Logo Section */}
				<div className="flex items-center gap-3">
					<img src={logo} alt="Logo" className="h-9" />
				</div>

				{/* Navbar Links */}
				<div className="mx-8 hidden md:flex text-zinc-700 text-lg gap-8">
					<ul className="flex gap-5">
						{nav.map((item, index) => (
							<li
								key={index}
								className="hover:text-blue-600 cursor-pointer transition-all"
							>
								{item}
							</li>
						))}
					</ul>
				</div>

				{/* Buttons */}
				<div className="ml-auto flex gap-2">
					{" "}
					{/* Added flex and gap-2 for spacing between the buttons */}
					<button
						type="button"
						className="hidden sm:border sm:border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-full px-5 py-2.5 text-sm"
					>
						Get Started
					</button>
					<button
						type="button"
						className="bg-blue-700 text-white hover:bg-blue-800 rounded-full px-5 py-2.5 text-sm"
					>
						ContactUs
					</button>
				</div>
				<Drawer
					anchor="left"
					open={isDrawerOpen}
					onClose={handleCloseDrawer}
					sx={{ "& .MuiDrawer-paper": { width: "16rem", padding: "1rem" } }}
				>
					<div className="w-64 p-5">
						<img src={logo} alt="Logo" className="h-9 mr-28 mb-5" />
						<ul className="flex flex-col gap-4">
							{nav.map((item, index) => (
								<li key={index} className="hover:text-zinc-900 cursor-pointer">
									{item}
								</li>
							))}
						</ul>
					</div>
					<button
						type="button"
						className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded-full px-5 py-2.5 text-sm"
					>
						Get Started
					</button>
				</Drawer>
			</nav>
		</>
	);
};

export default Navbar;
