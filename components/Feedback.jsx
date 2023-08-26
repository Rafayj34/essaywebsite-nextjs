
import Image from 'next/image';
import { feedback, sitejabber, trustpilot, stars } from '@/public/assets';

const Feedback = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-3xl md:text-4xl border-b-4  border-orange-600 border-r-2 text-center  font-bold p-2 shadow-md">
        Trust is<span className="text-orange-600">&nbsp;our win</span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-center md:justify-start gap-6">
        <div className='flex gap-6 justify-center'>
        <div className=" max-h-64 md:mt-32   bg-white p-6 rounded-lg shadow-md  hover:-translate-y-1 hover:ring-2 hover:ring-orange-600 hover:shadow-orange-600 transition-transform duration-300 relative ">
          <Image src={sitejabber} alt="Sitejabber Logo" width={150} height={150} />
          <div className=" w-full flex justify-center">
            <Image src={stars} alt="Stars" width={100} height={100} />
          </div>
          <p className="text-center font-semibold">Sitejabber Rating</p>
        </div>
        <div className="max-h-64 md:mt-32  bg-white p-6 rounded-lg shadow-md  hover:-translate-y-1 hover:ring-2 hover:ring-green-400 hover:shadow-green-600 transition-transform duration-300 relative">
          <Image src={trustpilot} alt="Trustpilot Logo" width={150} height={150} />
          <div className=" w-full flex justify-center">
            <Image src={stars} alt="Stars" width={100} height={100} />
          </div>
          <p className="text-center font-semibold">TrustPilot Rating</p>
        </div>
        </div>
        <div className=" flex-shrink-0">
          <Image src={feedback} alt="Feedback" />
        </div>
        
      </div>
   
    </div>
  );
};

export default Feedback;
