import fs from "fs/promises";
import path from "path";
import { reviews as existingReviews } from "@/constants/reviews"; // Import the existing reviews array


function generateToken(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    token += charset[randomIndex];
  }
  return token;
}

export const POST = async (req, res) => {
  const { value, review } = await req.json();

  // Create a new review object
  const newReview = {
    userid: generateToken(7), // Assign a new ID based on the number of existing reviews
    value,
    review,
    date: new Date().toLocaleDateString(), // Set the current date
  };

  // Add the new review to the existing reviews array
  existingReviews.unshift(newReview);

  // Write the updated reviews array back to the JSON file
  const reviewsFilePath = path.join(process.cwd(),"constants","reviews.js");
  await fs.writeFile(reviewsFilePath, `export const reviews = ${JSON.stringify(existingReviews)}`);

  return new Response("Review submitted successfully", { status: 200 });
};
