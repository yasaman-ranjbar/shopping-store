import React from "react";

export default function Slide({ title, info, bgImage, bgColor }) {
  return (
    <div
      style={{
        background: `url(${bgImage}) #${bgColor}`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right"
      }}
      className="h-full"
    >
      <div className="w-1/2 md:w-1/3 px-5 py-16">
          <h1 className="text-2xl md:text-4xl font-bold mb-5 translate-x">{title}</h1>

          <p className="hidden md:block text-lg mb-10">{info}</p>

          <button className="bg-black text-white text-sm md:text-lg w-28 md:w-32 h-10 rounded-full hover:bg-gray-200 hover:text-gray-800">Buy Now</button>
      </div>
    </div>
  );
}
