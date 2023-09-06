import Image from "next/image";
import {
  professor1,
  professor2,
  professor3,
  professor4,
} from "@/public/assets";

const Professors = () => {
  return (
    <div className="container py-12 relative mx-auto px-1 lg:px-8 flex flex-col ">
      <div className="justify-between items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mt-4  mb-4 p-1">
          <span className="border-b-4 border-orange-600 border-r-2 shadow-lg  p-2">
          Our Academic 
          <span className="text-orange-600"> Experts</span></span></h2>
        <div className="my-10 flex flex-wrap justify-center gap-10">
          <ProfessorCard name="Dylan Hugo" image={professor1} />
          <ProfessorCard name="Tetiana Reuben" image={professor2} />
          <ProfessorCard name="Oakley Dean" image={professor3} />
          <ProfessorCard name="Kimberley Toby" image={professor4} />
        </div>
      </div>
    </div>
  );
};

const ProfessorCard = ({ name, image }) => {
  return (
    <div className="relative w-40 sm:w-64 flex flex-col rounded-md shadow-lg hover:scale-105 transition-all">
      <Image src={image} width={350} height={350} alt={name} className=" transition-all" />
      <h3 className="absolute bottom-2 right-3 bg-secondary p-1 px-6 bg-orange-600 whitespace-nowrap text-xs sm:text-sm md:text-md">{name}</h3>
      <p className="absolute bg-gray-700 text-white -bottom-4 sm:-bottom-5 right-3 p-1 px-3 text-xs sm:text-sm md:text-md">PhD Expert</p>
    </div>
  );
};

export default Professors;
