import fs from "fs";
import { contentData } from "@/constants";

const getContentMetadata = () => {
    const folder = "content/";
    const files = fs.readdirSync(folder);
    const jsxPosts = files.filter((file) => file.endsWith(".jsx"));

    const ContentMetadata = jsxPosts.map((htmlFile) => {
        const slug = htmlFile.replace(".jsx", "");
        const content = contentData.find((contentdata) => contentdata.slug === slug);
        if (content) {
          return {
            slug,
            path: content.path,
            title: content.title,
            description: content.description,
            image: content.image,
            alt: content.alt,
            last_modified: content.last_modified,
            openGraph: {
              title: content.openGraph.title,
              description: content.openGraph.description,
              images: content.openGraph.images,
              url: content.openGraph.url,
              locale: content.openGraph.locale,
              type: content.openGraph.type,
              publishedTime: content.openGraph.publishedTime,
              authors: content.openGraph.authors,
              site_name:content.openGraph.site_name
            },
          };
        } else {
          console.error(`Content not found for jsx file: ${htmlFile}`);
          return null;
        }
      }).filter(Boolean); // Remove any null values from the mapping
    
      return ContentMetadata;
    };
    
    export default getContentMetadata;