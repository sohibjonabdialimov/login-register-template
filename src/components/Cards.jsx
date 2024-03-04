import React from "react";

const Cards = () => {
  return (
    <div className="py-10 px-5 sm:py-10 sm:px-56 grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-y-5">
      <div className="sm:m-6 m-0 relative overflow-hidden bg-orange-500 rounded-lg shadow-lg furniture_ad_card w-[100%]">
        <svg
          className="absolute bottom-0 left-0 right-0 top-0 mb-8 w-[100%]"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-8 flex items-center justify-center">
          <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
          <img
            className="relative w-[100%] rounded"
            src="https://mebel.uz/image/cache/catalog/%20%20OPTIMA-1588050562-228x228.jpg"
            alt=""
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Indoor</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Спальный гарнитур</span>
            <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              $36.00
            </span>
          </div>
        </div>
      </div>
      <div className="sm:m-6 m-0 relative overflow-hidden bg-teal-500 rounded-lg shadow-lg furniture_ad_card w-[100%]">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-8 flex items-center justify-center">
          <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
          <img
            className="relative w-[100%] rounded"
            src="https://mebel.uz/image/cache/catalog/%20%20-1589972207-228x228.jpg"
            alt=""
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Outdoor</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Спальный гарнитур</span>
            <span className="bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              $45.00
            </span>
          </div>
        </div>
      </div>
      <div className="sm:m-6 m-0 relative overflow-hidden bg-purple-500 rounded-lg shadow-lg furniture_ad_card w-[100%]">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative pt-10 px-8 flex items-center justify-center">
          <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
          <img
            className="relative w-[100%] rounded"
            src="https://mebel.uz/image/cache/catalog/%20Paris%20%20%20+%204%20-1588838200-228x228.jpg"
            alt=""
          />
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
          <span className="block opacity-75 -mb-1">Oak Tree</span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Комплект Paris</span>
            <span className="bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
              $68.50
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
