import React from "react";
import Link from "next/link";
import getBlogMetadata from "@/constants/getBlogMetadata";
import Image from "next/image";
import { blogData } from "@/constants";
import UsefulLink from "@/components/UsefulLink";

const getBlogContent = async (slug) => {
  const blogJson = blogData.find((blog) => blog.slug === slug);
  if (!blogJson) {
    return (
      <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] ">
        <h1 className="text-4xl font-semibold text-gray-800">
          Oops! Page not found
        </h1>
        <p className="mt-2 text-gray-600">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link href="/" className="mt-4 text-orange-400 hover:underline">
          Go back to home
        </Link>
      </div>
    );
  } else {
    try {
      const { slug } = blogJson;
      const Mymodule = await import(`../../../blog/${slug}`);
      const ContentComponent = Mymodule.default;
      return <ContentComponent />;
    } catch (error) {
      console.log(error);
      return (
        <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] bg-gray-100">
          <h1 className="text-4xl font-semibold text-gray-800">
            Oops! Page not found
          </h1>
          <p className="mt-2 text-gray-600">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link href="/" className="mt-4 text-orange-400 hover:underline">
            Go back to home
          </Link>
        </div>
      );
    }
  }
};

const BlogPage = async (props) => {
  const slug = props.params.slug;
  const blogContent = await getBlogContent(slug);
  const blogJson = blogData.find((content) => content.slug === slug);
  if (!blogJson) {
    return (
      <div className="flex mt-52 flex-col items-center justify-center min-h-[500px] bg-gray-100">
        <h1 className="text-4xl font-semibold text-gray-800">
          Oops! Page not found
        </h1>
        <p className="mt-2 text-gray-600">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link href="/" className="mt-4 text-orange-400 hover:underline">
          Go back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="h-auto mt-12">
      <div className="grid grid-cols-4 mt-20 py-10 px-3 lg:px-24">
        <div className="col-span-full lg:col-span-3">
          <div className="flex flex-col max-w-fit space-y-2 p-2 mb-4">
            <Link
              href="/"
              className="text-orange-500 font-bold hover:text-orange-700 transition-all"
            >
              &larr; Back to Home
            </Link>
            <Link
              href="/blogs"
              className="text-orange-500 transition-all font-bold hover:text-orange-700"
            >
              &larr; Back to Blogs
            </Link>
          </div>
          <div className="mt-5 flex justify-center">
            <Image
              src={blogJson.image}
              alt={blogJson.title}
              height={400}
              width={400}
            />
          </div>

          <h1 className="text-4xl font-bold mb-2 text-center">
            {blogJson.title}
          </h1>
          <div className="flex justify-center mb-4">
            <p className="text-orange-600">
              By {blogJson.author} - {blogJson.date}
            </p>
          </div>
          <div className="flex justify-center mb-4">
            <p className="text-green-600">{blogJson.read} min read</p>
          </div>
          <div>{blogContent}</div>
        </div>
        <div className="hidden lg:block px-10 mt-96 ">
          <h2 className="text-3xl text-slate-800 font-semibold mb-4 whitespace-nowrap">
            All Essays
          </h2>
          <ul className="space-y-2 content-list mb-20">
            <UsefulLink name="Custom Essay Help" href="/" />
            <UsefulLink name="Admission Essay Help" href="/" />
            <UsefulLink name="Exploratory Essay Help" href="/" />
            <UsefulLink name="Law Essay Help" href="/" />
            <UsefulLink name="Deductive Essay Help" href="/" />
            <UsefulLink name="Scholarship Essays Help" href="/" />
            <UsefulLink name="Argumentive Essay Help" href="/" />
            <UsefulLink name="Urgent Essay Help" href="/" />
            <UsefulLink name="Student Essay Writing" href="/" />
            <UsefulLink name="Plagiarism Free Essays" href="/" />
            <UsefulLink name="Essay Help Online" href="/" />
            <UsefulLink name="Essay Homework Help" href="/" />
            <UsefulLink name="Need Help Writing Essay" href="/" />
            <UsefulLink name="Cheap Essay Writer" href="/" />
            <UsefulLink name="Perfect Essay Help" href="/" />
            <UsefulLink name="MBA Essay Writing Service" href="/" />
            <UsefulLink name="Professional Essay Writer" href="/" />
            <UsefulLink name="Cheap Essay Writing Services" href="/" />
            <UsefulLink name="Essay Writers Online" href="/" />
          </ul>
          <h2 className="text-3xl text-slate-800 font-semibold mb-4 whitespace-nowrap">
            Other Services
          </h2>
          <ul className="space-y-2 content-list">
            <UsefulLink name="Assignment Writing" href="/" />
            <UsefulLink name="Cookery" href="/" />
            <UsefulLink name="Property Law" href="/" />
            <UsefulLink name="Constitutional Law" href="/" />
            <UsefulLink name="Administrative Law" href="/" />
            <UsefulLink name="Criminal Law" href="/" />
            <UsefulLink name="Human Rights Law" href="/" />
            <UsefulLink name="Civil Law" href="/" />
            <UsefulLink name="Tort Law" href="/" />
            <UsefulLink name="Management" href="/" />
            <UsefulLink name="Managerial Economics" href="/" />
            <UsefulLink name="Managerial Accounting" href="/" />
            <UsefulLink name="Case Study Writing" href="/" />
            <UsefulLink name="Coursework Writing" href="/" />
            <UsefulLink name="Best Dissertation Writing" href="/" />
            <UsefulLink name="Best Report Writing" href="/" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const blogs = getBlogMetadata();
  return blogs.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props) {
  const blogs = getBlogMetadata();
  const slug = props.params.slug;
  const blog = blogs.find((post) => post.slug === slug);
  if (blog) {
    return {
      slug,
      title: blog.title,
      description: blog.description,
      image: blog.image,
      date: blog.date,
      author: blog.author,
      openGraph: {
        title: blog.openGraph.title,
        description: blog.openGraph.description,
        images: blog.openGraph.images,
        url: blog.openGraph.url,
        locale: blog.openGraph.locale,
        type: blog.openGraph.type,
        site_name: blog.openGraph.site_name,
        publishedTime: blog.openGraph.publishedTime,
        authors: blog.openGraph.authors,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
}
export default BlogPage;
