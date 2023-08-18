"use client"
import { useState } from "react";
import {
  medalicon,
  customersupporticon,
  timeicon,
  priceicon,
  privacyicon,
  formaticon,
} from "../assets";
import Image from "next/image";
export const Guarantee = () => {
  return (
    <div className="mb-5 p-2 ">
      <div className="my-9 flex flex-col items-center  justify-center">
        <h1 className="text-4xl p-1 md:text-2xl border-b-2 border-r-2 shadow-lg border-r-orange-400 border-orange-400 font-bold"><span className='text-slate-800'>Why choose</span><span className='text-orange-400'>&nbsp;us?</span></h1>
        <p className="text-center max-w-xl mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo fugit
          neque placeat sint. Rerum reprehenderit amet vitae iste voluptatum
          accusamus fuga blanditiis quas corporis veritatis reiciendis, placeat,
          itaque nam nisi?
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 my-6">
        <GuaranteeCard name="Excellence Assured" image={medalicon} alt="medalicon"/>
        <GuaranteeCard name="Transparent Pricing" image={priceicon} alt="priceicon"/>
        <GuaranteeCard name="Punctuality Pledge" image={timeicon} alt="timeicon"/>
        <GuaranteeCard name="Perfect Formatting" image={formaticon} alt="formaticon"/>
        <GuaranteeCard name="No Hidden Hours" image={customersupporticon} alt="customericon"/>
        <GuaranteeCard name="Confidentiality Lock" image={privacyicon} alt="privacyicon"/>
      </div>
    </div>
  );
};

const GuaranteeCard = ({ name, image, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`mt-8 p-6 bg-white border h-64 border-gray-300 rounded-lg shadow-md w-56 
     hover:bg-orange-400 hover:scale-105 transition-all ${
       isHovered ? "hovered" : ""
     }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-center">
        <div
          className={`bg-gray-800 p-4 ${
            isHovered ? "rounded-md" : "rounded-3xl"
          } transition-all`}
        >
          <Image src={image} width={40} height={40} alt={alt}/>
        </div>
      </div>
      <div className="my-4 text-center">
        <p className="text-gray-800 text-lg font-bold">{name}</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
    </div>
  );
};
