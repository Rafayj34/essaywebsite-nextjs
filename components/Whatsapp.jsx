"use client";
import React from "react";
import { whatsapp } from "@/public/assets";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <div className="z-50 fixed bottom-10 left-10 flex items-center group gap-3 max-w-fit">
    <a
      href="http://wa.me/+923220227584"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-green-400 group-hover:bg-green-700 group-hover:scale-125 duration-300 rounded-full w-16 h-16 flex justify-center items-center">
        <Image src={whatsapp} alt="whatsapp icon" height={50} width={50} />
      </div>
      </a>
      <span className="bg-green-700 h-10 scale-0 text-white rounded-3xl items-center px-3 flex group-hover:scale-100 transition-all origin-left duration-300">
    open whatsapp
  </span>
   
    
  </div>
  );
};

export default Whatsapp;
