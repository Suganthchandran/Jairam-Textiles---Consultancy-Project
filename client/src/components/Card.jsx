import React from "react";
import { assets } from "../assets/assets";

const Card = ({ image, text }) => {
  return (
    <div className="w-[450px] p-3 flex flex-col items-center gap-6 cursor-pointer transition-transform duration-1000 ease-in-out hover:scale-110">
      <div className="relative">
        <img
          src={assets[image]}
          alt=""
          className="w-[400px] h-[450px] rounded-2xl object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent rounded-lg pointer-events-none"></div>
      </div>
      <p className="font-medium">{text}</p>
    </div>
  );
};

export default Card;
