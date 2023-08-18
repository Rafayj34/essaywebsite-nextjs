import React from "react";
import fs from "fs";
import Link from "next/link";
import getPostMetadata from "@/constants/getPostMetadata";
import Image from "next/image";
import { blogs } from "@/constants";

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.html`;
  try {
    const content = fs.readFileSync(file, "utf-8");
    return content;
  } catch (error) {
    return <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] bg-gray-100">
    <h1 className="text-4xl font-semibold text-gray-800">Oops! Page not found</h1>
    <p className="mt-2 text-gray-600">
      The page you are looking for might have been removed or is temporarily unavailable.
    </p>
    <Link href="/" className="mt-4 text-blue-500 hover:underline">Go back to home
    </Link>
  </div>;
  }
};

const BlogPage = (props) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] bg-gray-100">
    <h1 className="text-4xl font-semibold text-gray-800">Oops! Page not found</h1>
    <p className="mt-2 text-gray-600">
      The page you are looking for might have been removed or is temporarily unavailable.
    </p>
    <Link href="/" className="mt-4 text-blue-500 hover:underline">Go back to home
    </Link>
  </div>;
  }

  return (
    <div className="p-5 mx-auto h-auto mt-12">
          <div className="container mt-20 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col max-w-fit space-y-2 p-2 mb-4">
            <Link href="/" className="text-orange-500 font-bold hover:text-orange-700 transition-all">
              &larr; Back to Home
            </Link>
            <Link href="/blogs" className="text-orange-500 transition-all font-bold hover:text-orange-700">
              &larr; Back to Blogs
            </Link>
          </div>
      <div className="mt-5 flex justify-center">
        <Image src={blog.image} alt={blog.title} height={400} width={400} />
      </div>
  
          <h1 className="text-4xl font-bold mb-2 text-center">{blog.title}</h1>
          <div className="flex justify-center mb-4">
            <p className="text-orange-600">
              By {blog.author} - {blog.date}
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <p className="text-green-600">{blog.read} min read</p>
          </div>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
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
  const slug = props.params.slug;
  const post = posts.find((post) => post.slug === slug);
  if (post) {
  return {
    title: post.title,
    description: post.description
  };
} else {
  return {
  notFound: true,
  }
}
}
export default BlogPage;
