import React, { useState } from "react";



// Service Data
import servicesData from "./services";

const ProductCard = () => {
	const [serviceSelections, setServiceSelections] = useState(
		servicesData.map(() => "service")
	);

	const handleSelectChange = (index, value) => {
		setServiceSelections((prev) => {
			const updated = [...prev];
			updated[index] = value;
			return updated;
		});
	};

	return (
		<>
			<div className="flex flex-col">
				<div className="text-center py-12 md:py-16 lg:py-20 bg-[#e8f0ff] rounded-lg shadow-2xl ">
					<h1 className="text-6xl font-bold mb-8 text-gray-900 tracking-tight">
						Bizonance : gives you many ways to be seen
					</h1>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						At Bizonance, we offer a comprehensive suite of services to elevate
						your brand and business, ensuring you stand out in every aspect.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-[#e8f0ff]">
					{servicesData.map((service, index) => (
						<a
							href={`/service/${encodeURIComponent(service.title)}`}
							key={index}
							className="no-underline"
						>
							<div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
								<div className="p-6 space-y-6">
									{/* Service Image(s) */}
									<div className="flex justify-center space-x-2">
										{service.logos.length > 0 ? (
											service.logos.map((logo, logoIndex) => (
												<img
													key={logoIndex}
													src={logo}
													alt={`${service.title} logo ${logoIndex + 1}`}
													width={60}
													height={60}
												/>
											))
										) : (
											<div className="h-12 w-12 bg-gray-200 flex justify-center items-center rounded-full">
												<span className="text-gray-500 text-xs">No Logo</span>
											</div>
										)}
									</div>

									{/* Service Info */}
									<div className="space-y-4">
										<h2 className="text-xl text-center font-medium text-gray-800">
											{service.title}
										</h2>
										<p className="text-sm text-gray-600 line-clamp-4">
											{service.description}
										</p>

										{/* Type Selection */}
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</>
	);
};

export default ProductCard;
