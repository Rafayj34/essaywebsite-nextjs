"use client";
import Image from "next/image";
import { heroimg } from "../public/assets";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <section>
      <div className="relative mt-[-55px] w-full h-[900px] mx-auto shadow-lg bg-slate-100 shadow-slate-400 text-center flex flex-col justify-center object-contain">
        {/* Text Content */}
        <div className="z-10 sm:max-w-4xl lg:max-w-4xl 2xl:max-w-5xl  mt-32 text-left px-8 ">
          <div className="text-orange-600 text-lg font-bold p-2">
          BEST ESSAY WRITING SERVICE UK
          </div>

          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 text-slate-700">
          The Top-Rated and Best Essay Writing Service in UK to achieve A+ grade<span className="text-orange-600">.</span>
          </h1>
          <div className="flex">
            <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4 text-slate-700">
              <span className='text-slate-800'>Best place to get your</span>
              <span className='text-orange-600'>
                <Typewriter
                  words={[" Essays", " Reports", " Dissertations", " Assignments"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>

          <p className="md:text-xl text-lg font-bold text-gray-500 lg:max-w-lg xl:max-w-full ">
            Let Your Ideas Flourish, Our Specialists Bring Your Essays to Life!
          </p>
          <div className="flex flex-col mobile:flex-row items-center">
          <button
            className="bg-orange-600 shadow-lg shadow-orange-500 mx-2 w-[200px] rounded-full font-medium my-2 mobile:my-6 py-3 text-black
          hover:bg-white transition-all  border-orange-600 hover:shadow-orange-500 hover:shadow-md"
          >
            Place an order
          </button>
          <button
            className="bg-white border-2 mx-2 border-orange-600 shadow-lg shadow-slate-500 rounded-full w-[200px] font-medium my-2 mobile:my-6 py-3 text-black
          hover:bg-orange-600 transition-all hover:shadow-md "
          >
            Get consultancy
          </button>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block md:absolute md:inset-y-0 md:right-14 md:w-[35%] md:mt-64">
          <Image
            className="object-cover lg:min-w-full"
            src= {heroimg}  // Replace with the actual image source
            alt="hero image"
          fill
            // className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
