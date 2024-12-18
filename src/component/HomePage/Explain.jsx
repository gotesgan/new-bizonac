import React, { useEffect, useState } from "react";
import { Search, Image, ShoppingBag, Youtube, LayoutGrid, ChevronRight,  } from "lucide-react";

const Explain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cardData.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = (id) => {
    setCurrentIndex(id - 1);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-8 py-8  ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 md:mb-12">
        Here is how we help you Grow!
      </h1>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8 lg:ml-40">
        {/* Buttons Section */}
        <div className="w-full lg:w-auto">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-1 gap-4">
            {buttonArray.map((each) => (
              <button
                key={each.id}
                className={`
                  flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                  ${cardData[currentIndex].id === each.id 
                    ? 'some' 
                    : 'some-alt'}
                `}
                onClick={() => handleClick(each.id)}
              >
                {each.logo}
                <span className="hidden md:inline">{each.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Image Section */}
          <div className="w-full max-w-sm flex-shrink-0">
            <img
              src={cardData[currentIndex].logo}
              alt={cardData[currentIndex].title}
              className="w-full h-auto rounded-lg  object-cover"
            />
          </div>

          {/* Explanation Section */}
          <div className="w-full max-w-md bg-white  p-6  text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {cardData[currentIndex].head}
            </h2>
            <p className="text-gray-600 mb-6">
              {cardData[currentIndex].para}
            </p>
            <button className="w-full lg:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              {cardData[currentIndex].butitle}
              <ChevronRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Explain;

const buttonArray = [
  {
    id: 1,
    title: "Search",
    logo: <Search />,
  },
  {
    id: 2,
    title: "Display",
    logo: <Image />,
  },
  {
    id: 3,
    title: "Shop",
    logo: <ShoppingBag/>,
  },
  {
    id: 4,
    title: "Video",
    logo: <Youtube />,
  },
  {
    id: 5,
    title: "App",
    logo: <LayoutGrid />,
  },
];

const cardData = [
  {
    id: 1,
    title: "Search",
    logo:
      "https://www.gstatic.com/marketing-cms/assets/images/ads/7a/b9/ca3a48c34e4f8329720fac2040ad/unnamed-22.png",
    head: "Some thing",
    para:
      "Build awareness and consideration with memorable, visually engaging ads that reach your audience when they're online, checking Gmail or using mobile apps.",
    butitle: "another thing ",
  },
  {
    id: 2,
    title: "Display",
    logo:
      "https://www.gstatic.com/marketing-cms/assets/images/ads/b1/1f/ffe2d28447759e2feffc7912fa50/unnamed-23.png",
    head: "Some thing",
    para:
      "Build awareness and consideration with memorable, visually engaging ads that reach your audience when they're online, checking Gmail or using mobile apps.",
    butitle: "another thing ",
  },
  {
    id: 3,
    title: "Shopping",
    logo:
      "https://www.gstatic.com/marketing-cms/assets/images/ads/4c/02/71ef56944be8a24e2e114d1e9ad4/unnamed-25.png",
    head: "Some thing",
    para:
      "Build awareness and consideration with memorable, visually engaging ads that reach your audience when they're online, checking Gmail or using mobile apps.",
    butitle: "another thing ",
  },
  {
    id: 4,
    title: "Video",
    logo:
      "https://www.gstatic.com/marketing-cms/assets/images/ads/4c/02/71ef56944be8a24e2e114d1e9ad4/unnamed-25.png",
    head: "Some thing",
    para:
      "Build awareness and consideration with memorable, visually engaging ads that reach your audience when they're online, checking Gmail or using mobile apps.",
    butitle: "another thing ",
  },
  {
    id: 5,
    title: "App",
    logo:
      "https://www.gstatic.com/marketing-cms/assets/images/ads/8c/e4/aa819d6541bb8619c619dac3b8f1/unnamed-26.png",
    head: "Some thing",
    para:
      "Build awareness and consideration with memorable, visually engaging ads that reach your audience when they're online, checking Gmail or using mobile apps.",
    butitle: "another thing ",
  },
];
