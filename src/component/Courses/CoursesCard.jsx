import React from "react";
import centerimg1 from "../../assets/images/fswd-img2.jpg";
import centerimg2 from "../../assets/images/bd-img2.webp";
import centerimg3 from "../../assets/images/st-img2.jpg";
import centerimg4 from "../../assets/images/es-img2.png";

const CoursesCard = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-[#e8f0ff] min-h-screen w-full p-5 ">
			<div className="bg-white rounded-lg w-full max-w-6xl px-8 sm:px-12 py-14 text-center flex flex-col items-center justify-center">
				{/* Headings */}
				<div>
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-2">
					What We Offer
					</h1>
				</div>
				<br />

				{/* Job Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					{Courses.map((each) => (
						<div
							key={each.id}
							className="flex flex-col items-center justify-between border-2 border-blue-500 rounded-xl p-2 h-[350px] bg-white shadow-lg"
						>
							<div className="relative w-full h-32 overflow-hidden rounded-md">
								<img
									src={each.logo}
									alt={each.title}
									className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
								/>
							</div>
							<h2 className="text-lg font-bold mt-3">{each.title}</h2>
							<p className="text-sm text-gray-600 text-center">{each.desc}</p>
							<button className="rounded-full bg-blue-500 text-white p-2 px-5 mt-3 hover:bg-blue-700">
								Apply now
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CoursesCard;

const Courses = [
	{
		id: 7,
		title: "Full Stack Web Development",
		logo: centerimg1,
		desc: "Job Guaranteed, Full Stack Web Development Industrial Training Programme",
	},
	{
		id: 6,
		title: "Business Development",
		logo: centerimg2,
		desc: "Job Guaranteed, Business Development Industrial Training Programme",
	},
	{
		id: 5,
		title: "Software Testing",
		logo: centerimg3,
		desc: "Job Guaranteed, Software Testing Industrial Training Programme",
	},
	{
		id: 4,
		title: "Embedded System",
		logo: centerimg4,
		desc: "Job Guaranteed, Embedded System Industrial Training Programme",
	},
];
