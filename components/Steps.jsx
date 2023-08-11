"use client";
import { useState } from "react";
import { accordionarrow, arrowdown, upload, experts, explain, give } from "@/assets";
import Image from "next/image";
const Accordion = ({ title, description, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div
        className={`whitespace-nowrap mobile:text-lg sm:text-xl xl:text-2xl p-2 flex border-slate-500 mb-2 border-b-2 rounded-br-lg rounded-tl-lg hover:bg-slate-500 justify-center transition-all hover:text-white font-semibold cursor-pointer ${
          isOpen
            ? "bg-slate-800 text-white border-l-4 border-r-4 border-r-orange-400 border-l-orange-400"
            : ""
        }`}
        onClick={toggleAccordion}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1>{title}</h1>
        <Image
          src={isHovered || isOpen ? arrowdown : accordionarrow}
          alt="accordion section arrow"
          height={15}
          width={15}
          className="ml-5 animate-pulse"
        />
      </div>
      <div
        className={`p-2  accordion-description-${
          isOpen ? "open" : "closed"
        }`}
      >
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <p className="text-left font-semibold ">{description}</p>
          </div>
          <div className="w-4/5 col-span-1">
            <div className="max-w-full max-h-full mx-auto">
              <Image src={imageSrc} layout="responsive" alt="accordion section arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Steps = () => {
  return (
    <div className="mb-5 flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <div className="text-orange-400 mt-10 text-3xl border-l-4 p-2 border-orange-400 mb-2 border-b-2 font-bold">
          <h1>
            How it <span className="text-black">works?</span>
          </h1>
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div className="text-center text-sm w-4/5 sm:w-3/5 lg:w-2/5">
          <Accordion
            title="Tell us about your requirements"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc={upload} // Provide your image source here
          />
          <Accordion
            title="Let the experts ponder over it"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc={experts} // Provide your image source here
          />
          <Accordion
            title="We will get back to you"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc={explain} // Provide your image source here
          />
          <Accordion
            title="And you get your assignment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc={give} // Provide your image source here
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
