import fs from "fs/promises";
import path from "path";

let userIdCounter = 1;

export const POST = async (req, res) => {
    const { value, review } = await req.json();

    const newReview = {
        userid: userIdCounter++, // Increment the counter and assign it to userid
        review: review,
        value: value,
        date: new Date().toLocaleDateString(),
      };

      const reviewsFilePath = path.join(process.cwd(), "/constants/index.js"); // Update the filename
      const existingReviewsModule = await import(reviewsFilePath); // Import the module

      const updatedReviews = [
        ...existingReviewsModule.reviews, // Get existing reviews from the module
        newReview, // Append the new review
      ];
  
      // Create a new version of the module with updated reviews
      const updatedReviewsModule = `export const reviews = ${JSON.stringify(
        updatedReviews,
        null,
        2
      )};`;
  
      await fs.writeFile(reviewsFilePath, updatedReviewsModule);

}