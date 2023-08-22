'use client'
import { Hero } from "@/components/Hero";
import { Guarantee } from "@/components/Guarantee";
import Counter from '@/components/Counter';
import Blogs from "@/components/Blogs";
import Steps from "@/components/Steps";
import Feedback from "@/components/Feedback";
import { Dragndrop } from "@/components/Dragndrop";
import Homecontent from "@/components/Homecontent";
import Homecontent2 from "@/components/Homecontent2";
import HomeReviews from "@/components/HomeReviews";
export default function Home() {
  return (
    <div className="bg-primary">
      <Hero />
      <div className="mx-auto">
        <Guarantee />
        <div className="shadow-t-lg shadow-slate-400">
        <Counter />
        </div>
        <div className="shadow-lg shadow-slate-400">
        </div>
        <Blogs />
        <div className="shadow-t-lg shadow-slate-400">
        <Steps /> 
        </div>
        <div className="shadow-lg shadow-slate-400">
          <Homecontent />
        </div>
        <div className=" shadow-slate-400">
          <Homecontent2 />
        </div>
        <div className="shadow-t-lg shadow-slate-400">
        <Dragndrop />
        </div>
        <Feedback />
        <HomeReviews />

      </div>
    </div>
  );
}
