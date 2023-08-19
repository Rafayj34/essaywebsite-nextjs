
import Image from 'next/image';
import { feedback, sitejabber, trustpilot, stars } from '@/public/assets';

const Feedback = () => {
  return (
    <div className="flex flex-col items-center p-5 md:p-16">
      <h1 className="text-3xl md:text-4xl border-b-4 mb-4 p-2 border-orange-400 border-r-2 text-center  font-bold">
        Trust is<span className="text-orange-400">&nbsp;our win</span>
      </h1>
      <div className="flex  justify-center md:justify-start gap-6">
        <div className=" max-h-64 md:mt-32   bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:-translate-y-1 hover:border hover:border-orange-400 hover:shadow-orange-600 transition-transform duration-300 relative ">
          <Image src={sitejabber} alt="Sitejabber Logo" width={150} height={150} />
          <div className=" w-full flex justify-center">
            <Image src={stars} alt="Stars" width={100} height={100} />
          </div>
          <p className="text-center font-semibold">Sitejabber Rating</p>
        </div>
        <div className="max-h-64 md:mt-32  bg-white p-6 rounded-lg shadow-md hover:scale-105 hover:-translate-y-1 hover:border hover:border-green-400 hover:shadow-green-600 transition-transform duration-300 relative">
          <Image src={trustpilot} alt="Trustpilot Logo" width={150} height={150} />
          <div className=" w-full flex justify-center">
            <Image src={stars} alt="Stars" width={100} height={100} />
          </div>
          <p className="text-center font-semibold">TrustPilot Rating</p>
        </div>
        <div className="hidden md:block rounded-sm flex-shrink-0">
          <Image src={feedback} alt="Feedback" />
        </div>
      </div>
      <div className="mt-8 md:hidden">
        <Image src={feedback} alt="Feedback" />
      </div>
    </div>
  );
};

export default Feedback;
