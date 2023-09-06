"use client";
import CountUp from "react-countup";
import { assignment, rating, client } from "@/public/assets";
import Image from "next/image";

const Counter = () => {
  return (
    <section>
      <div className="container justify-center items-center mx-auto px-5 sm:px-10 md:px-25  mt-10 p-3  grid grid-cols-1 ">
        <div className="container mx-auto items-center mb-4 max-w-6xl">
          <div className=" my-10 lg:my-auto ">
            <h2 className="text-lg text-center sm:text-2xl md:text-3xl text-slate-800 font-semibold my-5 max-w-4xl border-b-2 border-l-4 border-orange-600 p-2 mx-auto">
              <span className="">
                How we managed to have such{" "}
                <span className="text-orange-600">nice numbers?</span>
              </span>
            </h2>
            <p className=" whitespace-normal mb-3 text-xs sm:text-sm md:text-base">
              As most writers are already aware that the need for effective
              essay writing has expanded signiﬁcantly, the necessity for
              providing each essay writing task with full effectiveness and
              efficiency has also become crucial for students. Thus, the primary
              objective of our professional and best essay writers online is to
              supply each individual with a chance to offer best assignment
              writing service would be sure enough to provide the great
              impression.
            </p>
            <p className=" whitespace-normal mb-3 text-xs sm:text-sm md:text-base">
              However, all the online essay writer does not maintain the
              capabilities of providing what the people meant for; therefore, an
              individual has to connect with the greatest when they feel like
              hiring best essay writing service.Therefore,Bestessaywritter is
              the remarkable and best essay writing website that is incredibly
              powerful to supply each individual with greatest and best essay
              writing service.
            </p>
            <p className=" whitespace-normal mb-3 text-xs sm:text-sm md:text-base">
              Bestessaywriter has a sufficient grasp of delivering best essay
              writing service in UK and has supplied the top essay writers
              online for over a decade. Since our best essay writers at the
              service recognize that each essay needs clarity and consistency,
              they endeavor to achieve a great balance between suitable
              introduction and body. Apart from this, the most crucial point
              that differentiates the essay writers at the service of others is
              that all the best essay writers take it in total consideration to
              maintain the thoughts ordered and defined when working on an
              essay.
            </p>
          </div>
          <div className=" space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl mt-5 flex justify-center font-semibold mb-2 ">
              <span className="text-slate-800">Let the</span>
              <span className="text-orange-600">&nbsp;numbers </span>
              <span>&nbsp;talk.</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 my-6">
              <div className="flex flex-col w-[240px] md:w-[270px] items-center p-6 border-b-4 border-r-2 shadow-xl border-r-orange-600 border-orange-600 hover:scale-105 transition-all">
                <Image
                  src={assignment}
                  alt="Assignments done till now"
                  height={101}
                  width={101}
                />
                <p className="text-base md:text-lg font-semibold mt-2">
                  Assignments Done
                </p>
                <CountUp
                  className="text-orange-600 font-bold"
                  end={8320}
                  suffix="+"
                  delay={0.75}
                  duration={3}
                  enableScrollSpy
                />
              </div>

              <div className="flex flex-col w-[240px] md:w-[270px] items-center p-6 shadow-xl border-r-2 border-r-orange-600 border-b-4 border-orange-600 hover:scale-105 transition-all">
                <Image
                  src={client}
                  alt="Clients served till now"
                  width={150}
                  height={150}
                ></Image>
                <p className="text-base md:text-lg font-semibold mt-2">
                  Clients served
                </p>
                <CountUp
                  className="text-orange-600 font-bold"
                  end={6300}
                  suffix="+"
                  delay={0.75}
                  duration={3}
                  enableScrollSpy
                />
              </div>

              <div className="flex flex-col w-[240px] md:w-[270px] items-center p-6 shadow-xl border-r-2 border-r-orange-600 border-b-4 border-orange-600 hover:scale-105 transition-all">
                <Image
                  src={rating}
                  alt="Client ratings of the assignment"
                  width={150}
                  height={150}
                />
                <p className="text-base md:text-lg font-semibold mt-2">
                  Client ratings
                </p>
                <CountUp
                  className="text-orange-600 font-bold"
                  end={4.8}
                  decimal="."
                  decimals={1}
                  suffix="/5"
                  delay={0.75}
                  duration={5}
                  enableScrollSpy
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
