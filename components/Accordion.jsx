"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { accordionData } from "@/constants/accordionData";
import { plus, minus } from "@/public/assets";
import Image from "next/image";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };

  return (
    <div className="container py-12 relative mx-auto px-1 lg:px-8 flex flex-col ">
      <div className="justify-between items-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mt-4  mb-4 p-1">
          <span className="border-b-4 border-orange-600 border-l-2 shadow-lg  p-2">
          Frequently Asked
          <span className="text-orange-600"> Questions</span></span></h2>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2  gap-10">
          {accordionData.map((data, index) => (
            <AccordionItem
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => {
                toggle(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className=" border-b-2 border-primary flex flex-col">
      <div
        className="mx-2 py-1 px-1 sm:py-2 sm:px-2  items-center cursor-pointer grid grid-cols-12"
        onClick={toggle}
      >
        {open ? (
          <>
            <Image
              className="hidden sm:block cols-span-2"
              src={minus}
              width={35}
              height={35}
              alt="minus icon"
            />
          </>
        ) : (
          <>
            <Image
              className="hidden sm:block cols-span-2"
              src={plus}
              width={35}
              height={35}
              alt="plus icon"
            />
          </>
        )}
        <h4 className=" sm:text-lg font-semibold text-sm col-span-10">
          {title}
        </h4>
      </div>
      <Collapse
        isOpened={open}
        theme={{
          collapse: "ReactCollapse--collapse",
          content: "ReactCollapse--content",
        }}
      >
        <div className="bg-white px-5 pb-5 text-xs sm:text-sm md:text-md">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
