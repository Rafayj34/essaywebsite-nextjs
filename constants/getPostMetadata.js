import fs from "fs";
import { blogs } from "@/constants";

const getPostMetadata = () => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const htmlPosts = files.filter((file) => file.endsWith(".html"));

    const postsMetadata = htmlPosts.map((htmlFile) => {
        const slug = htmlFile.replace(".html", "");
        const blog = blogs.find((blog) => blog.slug === slug);
    
        if (blog) {
          return {
            slug,
            title: blog.title,
            description: blog.description,
            image: blog.image,
            date: blog.date,
          };
        } else {
          console.error(`Blog not found for HTML file: ${htmlFile}`);
          return null;
        }
      }).filter(Boolean); // Remove any null values from the mapping
    
      return postsMetadata;
    };
    
    export default getPostMetadata;