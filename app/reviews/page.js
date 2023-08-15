"use client";
import { useState } from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { reviews } from "@/constants";
import Image from "next/image";
import { userpfp } from "@/assets";

const page = () => {
  const [reviewForm, setReviewForm] = useState({ rating: null, review: "" });
  const [visibleReviews, setVisibleReviews] = useState(6); // Number of reviews to display

  const handleLoadMore = () => {
    setVisibleReviews(visibleReviews + 6);
  };

  const handleRatingChange = (newValue) => {
    setReviewForm({ ...reviewForm, rating: newValue });
  };

  const handleReviewChange = (event) => {
    const newReview = event.target.value.slice(0, 50); // Limit to 50 characters
    setReviewForm({ ...reviewForm, review: newReview });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(reviewForm.rating)
    try {
        const response = await fetch("/api/review/new", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
            },
          body: JSON.stringify(
              {
                  'review':reviewForm.review,
                  'value':reviewForm.rating
              }
          ),
        })
    }catch(error){
        console.log(error)
    }
  };
  return (
    <div>
      <div className="w-full h-[600px] mx-auto shadow-lg bg-slate-100 shadow-slate-400 text-center flex flex-col justify-center object-contain">
        {/* Text Content */}
        <div className="z-10  mt-32 text-center px-8 ">
          <div className="text-orange-400 text-lg font-bold p-2">
            What our clients say about us
          </div>

          <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 text-slate-700">
            BESTESSAYWRITER REVIEWS<span className="text-orange-400">.</span>
          </h1>
        </div>
        {/* Left side content */}
      </div>
      <div className="container mx-auto ">
        <div className="xl:grid xl:grid-cols-3 mx-3">
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-slate-700">
              Give Us Rating
            </h2>
            <Box>
              <Rating
                name="review-rating"
                value={reviewForm.rating}
                onChange={(event, newValue) => handleRatingChange(newValue)}
              />
            </Box>
            <form onSubmit={handleSubmit} className="mt-4">
              <textarea
                value={reviewForm.review}
                onChange={handleReviewChange}
                placeholder="Write your review here (max 150 characters)"
                rows="4"
                maxLength="150" // Add maxLength attribute
                className="border border-gray-300 p-2 rounded-md w-full"
              />
              <button
                type="submit"
                className="mt-2 px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-600"
              >
                Submit Review
              </button>
            </form>
          </div>
          <div className="flex flex-col  mx-auto items-center my-4 col-span-2 xl:col-span-2 justify-end">
            {reviews.slice(0, visibleReviews).map((review) => (
              <div key={review.userid}>
                <Reviewcard
                  userid={review.userid}
                  review={review.review}
                  value={review.value}
                  date={review.date}
                />
              </div>
            ))}
            {visibleReviews < reviews.length && (
              <button
                onClick={handleLoadMore}
                className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const Reviewcard = ({ userid, review, value, date }) => {
  return (
    <div className="mt-8 min-w-lg w-[330px] mobile:w-[500px] sm:w-[650px] md:w-[750px] p-5 border-2 rounded-lg bg-slate-100 border-slate-800 shadow-lg">
      <div className="flex flex-col mobile:flex-row mobile:justify-between items-start">
        <div className="hidden sm:block">
          <Image
            src={userpfp}
            width={60}
            height={60}
            alt="user profile picture"
          />
        </div>
        <div className="flex-grow ms-5">
          <h1>userid: {userid}</h1>
          <p>{review}</p>
        </div>
        <Box>
          <Rating name="read-only" value={value} readOnly />
          <p className="mt-2 text-slate-500 text-sm">{date}</p>
        </Box>
      </div>
    </div>
  );
};

export default page;
