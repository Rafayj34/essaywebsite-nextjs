"use client";
import CountUp from "react-countup";
import { assignment,rating,client } from "@/public/assets";
import Image from "next/image";

const Counter = () => {
  return (
<section>
<div className="mx-8 sm:mx-16 mt-10 p-3  grid lg:grid-cols-3  grid-cols-1 gap-10">
  <div className="  space-y-4 mx-auto sm:mx-0 md:col-span-2 col-span-1">
    <h1 className="text-2xl mt-5 flex justify-center font-semibold mb-2 ">
      <span className="text-slate-800">Let the</span>
      <span className="text-orange-600">&nbsp;numbers </span>
      <span>&nbsp;talk.</span>
    </h1>
    <div className="flex md:flex-row  flex-wrap items-center justify-center gap-4 my-6">

      <div className="flex flex-col w-[270px] items-center p-6 border-b-4 border-r-2 shadow-xl border-r-orange-600 border-orange-600 hover:scale-105 transition-all">
        <Image src={assignment} alt="assignment" height={101} width={101}/>
        <p className="text-lg font-semibold mt-2">Assignments delivered</p>
        <CountUp className="text-orange-500 font-bold" end={8320} suffix="+" delay={0.75} duration={3} enableScrollSpy/>
      </div>
      
      <div className="flex flex-col w-[270px] items-center p-6 shadow-xl border-r-2 border-r-orange-600 border-b-4 border-orange-600 hover:scale-105 transition-all">
        <Image src={client} alt="client" width={150} height={150} />
        <p className="text-lg font-semibold mt-2">Clients served</p>
        <CountUp className="text-orange-500 font-bold" end={6300} suffix="+" delay={0.75} duration={3} enableScrollSpy/>
      </div>
      
      <div className="flex flex-col w-[270px] items-center p-6 shadow-xl border-r-2 border-r-orange-600 border-b-4 border-orange-600 hover:scale-105 transition-all">
      <Image src={rating} alt="rating" width={150} height={150}/>
        <p className="text-lg font-semibold mt-2">Client ratings</p>
        <CountUp className="text-orange-500 font-bold" end={4.8} decimal="." decimals={1} suffix="/5" delay={0.75} duration={5} enableScrollSpy/>
      </div>
    </div>

  </div>
  <div className="w-full">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mt-4 border-b-4 border-orange-600 border-l-2 shadow-lg border-l-orange-600 mb-4 p-1">
    How we managed to have such <span className="text-orange-600">nice numbers?</span>
  </h2>
 
   
      <p className="text-gray-600 text-md ">
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
        literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
      </p>
   

</div>

</div>
</section>


  );
};

export default Counter;
