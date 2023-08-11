import { blogs } from "@/constants";

import Image from "next/image";

const Blogs = () => {
  const LimitedBlogs = blogs.slice(0, 6);

  return (
    <div
      id="blogs"
      className="flex flex-col mx-10 sm:mx-15 md:mx-20 lg:mx-32 mb-6  items-center justify-center"
    >
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl pe-3 flex items-center mt-10 w-fit border-b-2 p-2 border-orange-400 border-r-4 justify-center sm:mb-5 text-center whitespace-nowrap  font-bold">
        Explore blogs written by our writers
      </div>
      <div className="flex justify-center items-center my-3">
        <div className="flex flex-wrap items-center justify-center gap-4 my-6 max-w-5xl">
          {LimitedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg hover:scale-105 transition-all shadow-md p-4"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-600">{blog.description}</p>
              <a href="#" className="mt-4 text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          ))}
          <div className="flex justify-center items-center my-6">
            <button
              className="bg-orange-400 w-[200px] font-medium py-2 text-black
                        hover:bg-white transition-all border-2 hover:border-orange-400 rounded-lg hover:shadow-md"
            >
              View all blogs →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
