"use client";
import { React, useState } from "react";
import { blogging } from "@/public/assets";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/constants";

const BlogListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs based on the search term
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-24 h-auto mx-auto  p-5">
      <div className="flex justify-center">
        <Image src={blogging} alt="blog image" height={500} width={500} />
      </div>
      <Link
        href="/"
        className="text-orange-500 font-bold hover:scale-90 hover:translate-y-1/2 transition-all"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl font-semibold mt-5 mb-6">
        Our Latest Blog Posts
      </h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-md p-6">
            <Image
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <Link href={`/blog/${blog.slug}`}>
              <h2 className="sm:text-xl hover:text-orange-500 cursor-pointer font-semibold mb-2 text-lg">
                {blog.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-2 line-clamp-4 text-xs sm:text-base">
              {blog.description}
            </p>
            <p className="text-gray-400 text-sm">
              By {blog.author} - {blog.date}
            </p>
            <Link
              className="text-slate-800 hover:text-orange-600 font-semibold mt-4 inline-block"
              href={`/blog/${blog.slug}`}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
