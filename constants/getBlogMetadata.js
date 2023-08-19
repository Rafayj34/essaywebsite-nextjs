import fs from "fs";
import { blogData } from "@/constants";

const getBlogMetadata = () => {
    const folder = "blogs/";
    const files = fs.readdirSync(folder);
    const jsxPosts = files.filter((file) => file.endsWith(".jsx"));

    const BlogMetadata = jsxPosts.map((htmlFile) => {
        const slug = htmlFile.replace(".jsx", "");
        const blog = blogData.find((blog) => blog.slug === slug);
    
        if (blog) {
          return {
            slug,
            title: blog.title,
            description: blog.description,
            image: blog.image,
            date: blog.date,
          };
        } else {
          console.error(`Blog not found for jsx file: ${htmlFile}`);
          return null;
        }
      }).filter(Boolean); // Remove any null values from the mapping
    
      return BlogMetadata;
    };
    
    export default getBlogMetadata;