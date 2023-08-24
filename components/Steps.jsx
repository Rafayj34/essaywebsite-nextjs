"use client";
import React, { useState } from "react";
import {
  accordionarrow,
  arrowdown,
  upload,
  experts,
  explain,
  give,
} from "@/public/assets";
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
        className={`whitespace-nowrap text-lg w-full sm:text-xl xl:text-2xl p-2 flex border-slate-500 mb-2 border-b-2 rounded-br-lg rounded-tl-lg hover:bg-slate-500 justify-center transition-all hover:text-white font-semibold cursor-pointer ${
          isOpen
            ? "bg-slate-800 text-white border-l-4 border-r-4 border-r-orange-600 border-l-orange-600"
            : ""
        }`}
        onClick={toggleAccordion}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1>{title}</h1>
        <Image
          src={isHovered || isOpen ? arrowdown : accordionarrow}
          alt="accordion arrow"
          height={15}
          width={15}
          className="ml-5 animate-pulse"
        />
      </div>
      <div
        className={`p-2  accordion-description-${isOpen ? "open" : "closed"}`}
      >
        <div className="grid grid-cols-3">
          <div className="col-span-3 md:col-span-2">
            <p className="text-left font-thin ">{description}</p>
          </div>
          <div className=" hidden md:block col-span-1">
            <div className=" max-w-full max-h-full mx-auto">
              <Image src={imageSrc} layout="responsive" alt="Image" />
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
      <div className="flex flex-col items-center p-2">
        <div className="text-orange-600 mt-10  border-l-4 p-2 border-orange-600 mb-2 border-b-2 font-bold">
          <h1 className="text-2xl lg:text-3xl">
            Why Do Students Need
            <span className="text-black">
              &nbsp;Best Essay Writing Service in the UK?
            </span>
          </h1>
        </div>
      </div>
      <div className="mt-10 flex p-2 sm:px-0 justify-center items-center">
        <div className="text-center text-sm  sm:w-3/5 lg:w-2/5">
          <Accordion
            title="Multiple tasks have overburdened you"
            description="The majority of students are swamped with essay assignments. They hardly have time to enjoy their personal lives. As a consequence, they become tight and stressed. They are unable to write engaging essays because they are stressed. They eventually obtain lousy marks and negative criticism."
            imageSrc={upload} // Provide your image source here
          />
          <Accordion
            title="Inadequate time management"
            description="Students often struggle with their tasks as a consequence of poor time Management. They eventually deliver their tasks beyond the deadline, which harms their reputation. You cannot complete your tasks on time unless you prepare ahead of time and manage your time well. You should begin working on your essay assignment as soon as your professor assigns it to you."
            imageSrc={experts} // Provide your image source here
          />
          <Accordion
            title="Sufficient knowledge on the topic"
            description="However, learning a topic at the outset of your academic career is practically difficult. If you want to learn more about anything, you need to go into the specifics and have a real interest in it. When students lack appropriate understanding about a topic, essay writing becomes quite difficult. Aside from that, students must be conscious of essay layout and tone. They must comprehend the essay instructions completely.However, learning a topic at the outset of your academic career is practically difficult. If you want to learn more about anything, you need to go into the specifics and have a real interest in it. When students lack appropriate understanding about a topic, essay writing becomes quite difficult. Aside from that, students must be conscious of essay layout and tone. They must comprehend the essay instructions completely."
            imageSrc={explain} // Provide your image source here
          />
          <Accordion
            title="Why are you still waiting?"
            description="We recognize that you may want expert essay help for a variety of reasons. Academic competition has grown significantly in recent years. Bestessaywriter.co.uk has always attempted to relieve students’ academic burden by providing best essay writing service to students around the UK and the rest of the globe."
            imageSrc={give} // Provide your image source here
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
