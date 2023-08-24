import React from "react";
import { blogData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  const LimitedBlogs = blogData.slice(0, 6);

  return (
    <div id="blogs" className="container mx-auto mb-10 justify-center ">
      <div className="p-2">
        <h1 className="border-b-2 p-2 border-orange-600 border-r-4 sm:border-0  text-2xl md:text-3xl mt-10 text-center sm:mb-5 mb-10  font-bold">
          <span className="p-2 sm:border-b-2 sm:border-orange-600 sm:border-r-4">
            Explore blogs written by our{" "}
            <span className="text-orange-600">writers</span>
          </span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-6  justify-center items-center mt-3 mb-5 animate-fade-right">
        {LimitedBlogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-white w-72 rounded-lg hover:scale-105  transition-all shadow-md p-4"
          >
            {/* Replace 'image-url' with the actual image URL */}
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
            <p className="text-gray-600 line-clamp-2">{blog.description}</p>
            <Link href={blog.slug} className="mt-4 text-slate-900 hover:underline">
              Read more
            </Link>
          </div>
        ))}
        <Link href="blog">
          <div className="flex justify-center items-center ">
            <button
              className="bg-orange-600 w-[200px] font-medium py-2 text-white my-auto
                        hover:bg-white transition-all ring-2 ring-orange-600 hover:ring-orange-600  hover:text-black rounded-lg hover:shadow-md "
            >
              View all blogs →
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
