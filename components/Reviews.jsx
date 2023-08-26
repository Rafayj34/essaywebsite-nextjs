"use client";
import { useState } from "react";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { reviews } from "@/constants/reviews";

const Reviews = () => {
  
    const [reviewForm, setReviewForm] = useState({ rating: null, review: "" });
    const [visibleReviews, setVisibleReviews] = useState(6); // Number of reviews to display
  
    const handleLoadMore = () => {
      setVisibleReviews(visibleReviews + 6);
    };
  
    const handleRatingChange = (newValue) => {
      setReviewForm({ ...reviewForm, rating: newValue });
    };
  
    const handleReviewLimit = (event) => {
      const newReview = event.target.value.slice(0, 150); // Limit to 150 characters
      setReviewForm({ ...reviewForm, review: newReview });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch("/api/review/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            review: reviewForm.review,
            value: reviewForm.rating,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div>
        <div className="w-full h-[600px] mx-auto shadow-lg bg-slate-100 shadow-slate-400  flex flex-col justify-center object-contain">
          {/* Text Content */}
          <div className="z-10  mt-32 ">
            <div className="text-center text-orange-600 text-lg font-bold p-2">
              What our clients say about us
            </div>
  
            <h1 className="text-center md:text-5xl sm:text-4xl text-3xl font-bold md:py-6 text-slate-700">
              BESTESSAYWRITER REVIEWS<span className="text-orange-600">.</span>
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
                  onChange={handleReviewLimit}
                  placeholder="Write your review here (max 150 characters)"
                  rows="4"
                  maxLength="150" // Add maxLength attribute
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
                <button
                  type="submit"
                  className="mt-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-600"
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
      <div className="mt-8 w-[310px] mobile:w-[500px] sm:w-[650px] md:w-[750px] p-5 border-2 rounded-lg bg-slate-100 border-slate-800 shadow-lg">
        <div className="flex flex-col mobile:flex-row mobile:items-start"> {/* Remove justifyContent */}
  
          <div className="flex-grow ms-5 mt-2 md:mt-0"> {/* Add margin-top to adjust alignment */}
            <h1 className="text-slate-700 text-lg font-semibold">USER_ID: {userid}</h1>
            <p className="text-slate-700 mt-2 line-clamp-4">{review}</p> {/* Adjust text color and margin */}
          </div>
          <div className="flex flex-col justify-center items-end"> {/* Center the Rating and date */}
            <Box>
              <Rating name="read-only" value={value} readOnly />
            </Box>
            <p className="mt-2 text-slate-500 text-sm">{date}</p>
          </div>
        </div>
      </div>
    );
  };

export default Reviews