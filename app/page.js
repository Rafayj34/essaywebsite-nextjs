import { Hero } from "@/components/Hero";
import { Logoslider } from "@/components/Logoslider";
import { Guarantee } from "@/components/Guarantee";
import Counter from '@/components/Counter';
import Blogs from "@/components/Blogs";
import Steps from "@/components/Steps";
import Feedback from "@/components/Feedback";
import { Dragndrop } from "@/components/Dragndrop";
import Homecontent from "@/components/Homecontent";
import Homecontent2 from "@/components/Homecontent2";
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
        <Logoslider />
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

      </div>
    </div>
  );
}
