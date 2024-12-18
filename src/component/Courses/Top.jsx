import React from "react";
import sideImage from "../../assets/images/trainingimg.jpg";

const Top = () => {
	return (
		<div className="flex flex-col items-center justify-center max-h-screen w-full ">
			<div className="flex flex-col md:flex-row gap-5 px-5 lg:px-40 mt-5">
				<div>
					<img src={sideImage} alt="partner image" width={1500} height={1500} />
				</div>
				{/* this will contain the text */}
				<div className="flex flex-col items-center justify-center   border rounded-3xl shadow-md p-5 ">
					<h1 className="text-2xl text-center sm:text-3xl  md:text-3xl  lg:text-4xl md:text-start font-bold p-3 ">
						Your next learning opportunity is waiting for you
            
					</h1>
					<br />
					<p className="text-base sm:text-lg px-5  md:text-start">
						Take the next step toward your personal and professional goals with
						BiZONANCE
					</p>
					<br />

					<button className="rounded-full bg-blue-500 text-white p-2 px-5 hover:bg-blue-700">
						Join Now
					</button>
				</div>

				{/* this will contain the image */}
			</div>
		</div>
	);
};

export default Top;
