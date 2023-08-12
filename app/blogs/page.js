import React from 'react';
import { client } from '@/assets';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/constants';


const BlogListPage = () => {
    return (
      <div className="container mt-32 h-auto mx-auto p-10">
        <h1 className="text-3xl font-semibold mb-6">Our Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
  <div key={blog.slug} className="bg-white shadow-md rounded-md p-6">
    <Image
      src={blog.image}
      alt={blog.title}
      className="w-full h-40 object-cover mb-4 rounded-md"
    />
    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
    <p className="text-gray-600">{blog.description}</p>
    <Link className="text-cyan-600 hover:text-cyan-800 font-semibold mt-4 inline-block" href={`/blogs/${blog.slug}`}>
     
        Read More

    </Link>
  </div>
))}
        </div>
      </div>
    );
  };
  
  export default BlogListPage;
  