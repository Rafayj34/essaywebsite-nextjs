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
export const Guarantee = () => {
  return (
    <div className="mb-5 p-2 container mx-auto">
      <div className="my-9 container mx-auto max-w-5xl">
        <h1 className="text-4xl text-center  p-1 md:text-2xl border-b-2 border-r-2 shadow-lg border-r-orange-600 border-orange-600 font-bold"><span className="text-slate-800">Why choose</span><span className="text-orange-600">&nbsp;us?</span></h1>
        <p className="text-center  mt-4">
        Do you want to hire well-qualified and best essay writer for your assignment? Don't worry; our best essay writing service in UK will provide you with the most effective and high-quality essay writing service by our exceptional and best essay writers. Whether you need the greatest essay writing service or help with rapid proofreading of your essay writing, we will provide you with a realistic solution to all of your essay writing demands. 
        </p>
        <p className="text-center mt-4">
        Students turn to us for assistance when they need it, and our best essay writer will make certain that each essay is prepared from and satisfies all standards for the greatest essay help. We strive to perform our very best, making it impossible for the examiner to detect mistakes in our writings. We ensure that the essay will be written by top and best essay writers in the relevant area.Our best essay writers are among the finest in the industry. They are familiar with all of the formatting standards for essay writing that academic institutions have, such as APA, MLA, Chicago, and other university-specific forms. 
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 my-6">
        <GuaranteeCard name="High-quality work" image={medalicon} desc="Our best essay writing service in UK will provide you with the most effective and high-quality essay writing" />
        <GuaranteeCard name="No hidden charges" image={priceicon} desc="We try our best to charge a student as low as possible and mention all the charges up front."  />
        <GuaranteeCard name="On-time work completion" image={timeicon} desc="We strive on our relationships with students. To mantain that, we never compromise on our punctuality pledge."  />
        <GuaranteeCard name="Right formatting essays" image={formaticon} desc="Formatting standards for essay writing that academic institutions such as APA, MLA, Chicago, and other university-specific forms." />
        <GuaranteeCard name="24/7 customer support" image={customersupporticon} desc="We have 24/7 support available for students. You can talk to our agents on Whatsapp or on the chat provided on this site." />
        <GuaranteeCard name="100% original and unique work." image={privacyicon} desc="We provide work along with the plagiarism report as a proof that the work is 100% original and plag-free." />
      </div>
    </div>
  );
};

const GuaranteeCard = ({ name, image, desc }) => {
  return (
    <div
      className="mt-8 py-6 px-1 h-[340px] bg-white border border-gray-300 rounded-lg shadow-md w-56 
     hover:bg-orange-600 hover:scale-105 transition-all group">
      <div className="flex justify-center">
        <div className="bg-gray-800 p-4 rounded-3xl group-hover:rounded-md transition-all">
          <Image src={image} alt="Assignments done till now" width={40} />
        </div>
      </div>
      <div className="my-4 text-center">
        <p className="text-gray-800 text-lg font-bold group-hover:text-gray-200 transition-all">{name}</p>
        <p className="group-hover:text-gray-200 transition-all">{desc}</p>
      </div>
    </div>
  );
};