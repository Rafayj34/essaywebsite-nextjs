"use client"
import React, { useState } from "react";
import {
  medalicon,
  customersupporticon,
  timeicon,
  priceicon,
  privacyicon,
  formaticon,
} from "../public/assets";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // Import carousel styles


export const Guarantee = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
      
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }
    ]
  };
  return (
    <div className="container justify-center items-center mx-auto px-5 sm:px-10 md:px-25  mt-10 p-3">
      <div className="container mx-auto items-center mb-4 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center max-w-2xl mx-auto p-1 md:text-2xl border-b-2 border-r-2 shadow-lg border-r-orange-600 border-orange-600 font-bold"><span className="text-slate-800">Why choose</span><span className="text-orange-600">&nbsp;us?</span></h2>
        <p className="  mt-4 text-xs sm:text-sm md:text-base">
        Do you want to hire well-qualified and best essay writer for your assignment? Don&apos;t worry; our best essay writing service in UK will provide you with the most effective and high-quality essay writing service by our exceptional and best essay writers. Whether you need the greatest essay writing service or help with rapid proofreading of your essay writing, we will provide you with a realistic solution to all of your essay writing demands. 
        </p>
        <p className=" mt-4 text-xs sm:text-sm md:text-base">
        Students turn to us for assistance when they need it, and our best essay writer will make certain that each essay is prepared from and satisfies all standards for the greatest essay help. We strive to perform our very best, making it impossible for the examiner to detect mistakes in our writings. We ensure that the essay will be written by top and best essay writers in the relevant area.Our best essay writers are among the finest in the industry. They are familiar with all of the formatting standards for essay writing that academic institutions have, such as APA, MLA, Chicago, and other university-specific forms. 
        </p>
      </div>
      <div className="max-w-5xl mx-auto justify-center">
      <Slider {...settings}>
        <GuaranteeCard name="High-quality work" image={medalicon} desc="Our best essay writing service in UK will provide you with the most effective and high-quality essay writing" />
        <GuaranteeCard name="No hidden charges" image={priceicon} desc="We try our best to charge a student as low as possible and mention all the charges up front."  />
        <GuaranteeCard name="On-time work completion" image={timeicon} desc="We strive on our relationships with students. To mantain that, we never compromise on our punctuality pledge."  />
        <GuaranteeCard name="Right formatting essays" image={formaticon} desc="Formatting standards for essay writing that academic institutions such as APA, MLA, Chicago, and other university-specific forms." />
        <GuaranteeCard name="24/7 customer support" image={customersupporticon} desc="We have 24/7 support available for students. You can talk to our agents on Whatsapp or on the chat provided on this site." />
        <GuaranteeCard name="100% original and unique work." image={privacyicon} desc="We provide work along with the plagiarism report as a proof that the work is 100% original and plag-free." />
    </Slider>
    </div>
    </div>
  );
};

const GuaranteeCard = ({ name, image, desc }) => {
  return (
    <div className="mt-8 py-6 px-1 h-[340px] bg-white border border-gray-300 rounded-lg shadow-md w-56">
      <div className="flex justify-center">
        <div className="bg-gray-800 p-4 rounded-3xl group-hover:rounded-md transition-all">
          <Image src={image} alt="Assignments done till now" width={40} />
        </div>
      </div>
      <div className="my-4 text-center">
        <p className="text-gray-800 text-lg font-bold ">{name}</p>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};