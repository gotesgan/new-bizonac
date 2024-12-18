import React from "react";
import fullStackJob from "./../../assets/fullstackjob.png";
import ProjectManagerJob from "./../../assets/promajob.jpg";
import BusinessDevJob from "./../../assets/busdevjob.jpg";
import Analyst from "./../../assets/analy.jpeg";
import DigitalMarketing from "./../../assets/digmarjob.jpg";

const CareerCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#e8f0ff] min-h-screen w-full p-5">
      <div className="bg-white rounded-lg w-full max-w-6xl px-8 sm:px-12 py-14 text-center flex flex-col items-center justify-center">
        {/* Headings */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-2">
            Your next job is waiting for you at{" "}
            <span className="text-[#1a73e8]">BiZONANCE</span>
          </h1>
        </div>
        <br />

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {reasons.map((each) => (
            <div
              key={each.id}
              className="flex flex-col items-center justify-between border-2 border-blue-500 rounded-xl p-5 h-[400px] bg-white shadow-lg"
            >
              <div className="relative w-full h-32 overflow-hidden rounded-md">
                <img
                  src={each.logo}
                  alt={each.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <h2 className="text-lg font-bold mt-3">{each.title}</h2>
              <p className="text-sm text-gray-600 text-center">
                {each.explainaion}
              </p>
              <button className="rounded-full bg-blue-500 text-white p-2 px-5 mt-3 hover:bg-blue-700">
                Apply now
              </button>
            </div>
          ))}
        </div>

        {/* Join Now Button */}
        <div className="mt-5">
          <button className="rounded-full bg-blue-500 text-white p-2 px-5 hover:bg-blue-700">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;

const reasons = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    explainaion:
      "Develop web applications using React, Node.js, and databases. Collaborate with cross-functional teams to deliver efficient, scalable, and high-performance solutions. Strong understanding of front-end and back-end technologies required.",
    logo: fullStackJob,
  },
  {
    id: 2,
    title: "Project Manager",
    explainaion:
      "Manage projects, track progress, and ensure timely delivery. Proficiency in agile methodologies, leadership, and project management tools required. Coordinate with teams to achieve project goals and maintain quality throughout.",
    logo: ProjectManagerJob,
  },
  {
    id: 3,
    title: "Process Analyst",
    explainaion:
      "Analyze, optimize, and improve business processes for enhanced efficiency. Experience with process mapping, Lean, or Six Sigma methodologies preferred. Collaborate with teams to implement sustainable changes and performance.",
    logo: Analyst,
  },
  {
    id: 4,
    title: "Business Developement",
    explainaion:
      "Identify new business opportunities, build client relationships, and drive revenue growth. Strong communication, negotiation, & market research skills needed. Experience in developing sales strategies & achieving targets is preferred.",
    logo: BusinessDevJob,
  },
  {
    id: 5,
    title: "Digital Marketing",
    explainaion:
      "Develop and execute digital marketing strategies, including SEO, SEM, and social media. Proficiency in Google Analytics, content creation, & online campaigns required. Optimize online presence to boost engagement and brand awareness.",
    logo: DigitalMarketing,
  },
  {
    id: 6,
    title: "Software Developer",
    explainaion:
      "Design, develop, and maintain software solutions using Java, Python, or similar technologies. Strong problem-solving skills, coding proficiency, and experience with software development frameworks are essential for success in this role.",
    logo: fullStackJob,
  },
];
