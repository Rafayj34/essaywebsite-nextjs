import React from "react";
import fs from "fs";
import getPostMetadata from "@/constants/getPostMetadata";
import Image from "next/image";
import { blogs } from "@/constants";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.html`;
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

const BlogPage = (props) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);

  const blog = blogs.find((blog) => blog.slug === slug); // Find the blog by slug

  if (!blog) {
    // Handle the case when the blog is not found
    return <div>Blog not found.</div>;
  }

  return (
    <div className="h-[1900px]">
      <div className="mt-52 flex justify-center">
        <Image src={blog.image} alt={blog.title} height={600} width={600} /> 
      </div>
      <h1 className="flex justify-center text-4xl font-bold">{blog.title}</h1>
      <div
        className="container mx-auto p-10"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};


export async function generateMetadata(props) {
  const posts = getPostMetadata();
  const slug = props.params.slug; // Assuming you can get the slug from the params object
  const post = posts.find((post) => post.slug === slug);
    return {
      title: post.title,
      description: post.description
    }
}
export default BlogPage;
