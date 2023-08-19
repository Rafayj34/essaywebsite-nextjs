import Link from "next/link";
import getContentMetadata from "@/constants/getContentMetadata";
import Image from "next/image";
import { contentData } from "@/constants";

const getContent = async (slug) => {
  const contentJson = contentData.find((content) => content.slug === slug);
  if (!contentJson) {
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
      const { slug } = contentJson;
      const module = await import(`../../content/${slug}`);
      const ContentComponent = module.default;
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
      // ... Return the not-found JSX you provided in your original code ...
    }
  }
};

const ContentPage = async (props) => {
  const slug = props.params.content;
  const content = await getContent(slug);
  const content_json = contentData.find((content) => content.slug === slug);
  if (!content_json) {
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
      <div className="container mt-20 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex max-w-fit flex-col space-y-2 p-2 mb-4">
            <Link
              href="/"
              className="text-orange-500 font-bold hover:text-orange-700 transition-all"
            >
              &larr; Back to Home
            </Link>
            <Link
              href="/blogs"
              className="text-orange-500 transition-all hover:text-orange-700 font-bold"
            >
              &larr; Back to Blogs
            </Link>
          </div>
          <div className="mt-5 flex justify-center">
            <Image
              src={content_json.image}
              alt={content_json.alt}
              height={400}
              width={400}
            />
          </div>

          <h1 className="text-4xl font-bold mb-2 text-center">
            {content_json.title}
          </h1>
          <div className="flex justify-center mb-4">
            <p className="text-orange-600">
              Date Posted: {content_json.last_modified}
            </p>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const contents = getContentMetadata();
  return contents.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata(props) {
  const posts = getContentMetadata();
  const slug = props.params.content;
  const post = posts.find((post) => post.slug === slug);
  if (post) {
    return {
      title: post.title,
      description: post.description,
    };
  } else {
    return {
      notFound: true,
    };
  }
}

export default ContentPage;
