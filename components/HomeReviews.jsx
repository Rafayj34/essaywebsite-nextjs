
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Link from "next/link";
import { reviewpfp1,reviewpfp2,reviewpfp3,reviewpfp4 } from "@/public/assets";
import Image from "next/image";

const HomeReviews = () => {
  return (
    <div className="container max-w-6xl justify-center mx-auto p-5">
      <h2 className="text-3xl text-center font-bold ">
        <span className="shadow-md text-orange border-r-4 border-b-2 border-orange-600 p-2 ">
          Best Essay Writer <span className="text-orange-600">Testimonials</span>
        </span>
      </h2>
      <div className="my-9 flex  gap-5 justify-center">
        <Homereviewcard review={" e baheifb haeabhi ehibaei hfai eh aefai ehfbai ehfbapi fhab"} value={5} image={reviewpfp1}/>
        <Homereviewcard review={" e baheifb haeabhi ehibaei hfai eh aefai ehfbai ehfbapi fhab"} value={5} image={reviewpfp2}/>
        <Homereviewcard review={" e baheifb haeabhi ehibaei hfai eh aefai ehfbai ehfbapi fhab"} value={4} image={reviewpfp3}/>
        <Homereviewcard review={" e baheifb haeaba sdasd asd asda sdasda sda sdshi ehibaei hfai eh aefai ehfbai ehfbapi fhab"} value={5} image={reviewpfp4}/>
        <div className="w-72 h-48 flex justify-center items-center">
          <Link href="/reviews">
            {" "}
            <button className="items-center bg-orange-600 text-white ring-2 ring-orange-600 hover:ring-orange-600 hover:bg-white transition-all hover:text-black rounded-xl h-fit p-3 ">
              See all reviews ➔{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Homereviewcard = ({ review,value,image }) => {
  return (
    <div className="flex flex-col shadow-md justify-center items-center rounded-xl p-4 w-72">
      <Image src={image} width={100} height={100} alt="review pfp image" className="rounded-xl"/>
      <p className="text-gray-800 mb-2 line-clamp-5">❝{review}❞</p>
      <Box>
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  );
};

export default HomeReviews;
