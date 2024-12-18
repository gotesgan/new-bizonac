import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaGoogle, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
			<div>
				{/* Footer Section */}

				{/* Social Media Section */}
				<section className="bg-gray-100 py-8 px-10">
					<div className="flex flex-col items-center md:flex-row md:justify-between px-8">
						<div className="flex items-center space-x-10 pb-2">
							<p className="font-medium text-2xl">Follow us</p>
							<a
								href="https://g.co/kgs/GguepM"
								target="_blank"
								rel="noreferrer"
								className="text-black text-2xl hover:translate-y-[-10px] transition-transform"
							>
								<FaGoogle />
							</a>
							<a
								href="https://facebook.com/bizonance"
								target="_blank"
								rel="noreferrer"
								className="text-black text-2xl hover:translate-y-[-10px] transition-transform"
							>
								<FaFacebook />
							</a>
							<a
								href="https://instagram.com/bizonance"
								target="_blank"
								rel="noreferrer"
								className="text-black text-2xl hover:translate-y-[-10px] transition-transform"
							>
								<FaInstagram />
							</a>
							<a
								href="https://www.linkedin.com/company/bizonance/"
								target="_blank"
								rel="noreferrer"
								className="text-black text-2xl hover:translate-y-[-10px] transition-transform"
							>
								<FaLinkedin />
							</a>
							<a
								href="https://youtube.com/channel/UCtZCxj1FhajpDRo6ggo1UFA"
								target="_blank"
								rel="noreferrer"
								className="text-black text-2xl hover:translate-y-[-10px] transition-transform"
							>
								<FaYoutube />
							</a>
						</div>
					</div>
					<hr className="border-t-1 border-gray-400" />

					<div className="text-center mt-8 flex flex-col md:flex-row md:justify-start px-8 gap-x-8 items-center">
						<div>
							<p className="font-medium text-2xl text-gray-700 mb-4 md:mb-0">
								BiZONANCE
							</p>
						</div>

						<div className="flex space-x-6 text-gray-500 text-base">
							<a
								href="contact.html"
								className="hover:text-gray-700 transition-colors"
							>
								Contact
							</a>
							<a
								href="contact.html"
								className="hover:text-gray-700 transition-colors"
							>
								Privacy
							</a>
							<a
								href="contact.html"
								className="hover:text-gray-700 transition-colors"
							>
								Terms
							</a>
						</div>
					</div>
				</section>
			</div>
		);
};

export default Footer;
