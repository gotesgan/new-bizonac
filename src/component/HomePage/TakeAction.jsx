import React from 'react';
import { Headset, Handshake, HandHeart } from 'lucide-react';

const TakeAction = () => {
  return (
    <div className="h-screen w-screen bg-[#e8f0ff] flex items-center justify-center px-4 sm:px-8">
      <div className="bg-white rounded-lg w-full max-w-6xl px-8 sm:px-12 py-14 text-center flex flex-col items-center justify-center">
        {/* Logo */}
        <div>
          <img
            src="https://www.gstatic.com/marketing-cms/assets/images/ads/aa/52/6157245d4484a085596f3c245e05/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <br />

        {/* Headings */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-2">
            Need help growing your business?
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-2">
            Connect with <span className="text-[#1a73e8]">Our Experts</span>
          </h1>
        </div>
        <br />

        {/* Description */}
        <div className="text-center w-full max-w-2xl">
          <p className="text-base sm:text-lg px-2 sm:px-4">
            Connect with our business experts and learn how you can grow your business. Contact now to get started.
          </p>
        </div>
        <br />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4">
          <button className="cus-btn flex items-center justify-center gap-2">
            <HandHeart color="#1a73e8" />
            Brand Collaboration
          </button>
          <button className="cus-btn flex items-center justify-center gap-2">
            <Handshake color="#1a73e8" />
            Partner with us
          </button>
          <button className="cus-btn flex items-center justify-center gap-2">
            <Headset color="#1a73e8" />
            Talk with our experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeAction;
