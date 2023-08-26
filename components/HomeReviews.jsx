import { reviews } from "@/constants/reviews";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Link from "next/link";

const HomeReviews = () => {
  return (
    <div className="container max-w-5xl justify-center  mx-auto p-5">
      <h2 className="text-3xl text-center font-bold "><span className="shadow-md text-orange border-r-4 border-b-2 border-orange-600 p-2 ">Our Reviews</span>
        
      </h2>
      <div className="my-9 flex flex-wrap gap-5 justify-center">
        {reviews.slice(0,6).map((review, index) => (
          <Homereviewcard key={index} review={review} />
        ))}
        <div className="w-72 h-48 flex justify-center items-center">
          <Link href="/reviews">  <button className="items-center bg-orange-600 text-white ring-2 ring-orange-600 hover:ring-orange-600 hover:bg-white transition-all hover:text-black rounded-xl h-fit p-3 ">See all reviews ➔ </button></Link>
      
      </div></div>
    </div>
  );
};

const Homereviewcard = ({ review }) => {
  return (
    <div className="flex flex-col shadow-md justify-between border-2 shadow-orange-600 rounded-xl p-4 w-72 h-48 border-slate-400  ">
      <p className="text-gray-800 mb-2 line-clamp-5">{review.review}</p>
      <Box>
        <Rating name="read-only" value={review.value} readOnly />
      </Box>
    </div>
  );
};

export default HomeReviews;
