import React from 'react';
import fs from 'fs/promises';
import path from 'path';

function BlogPost({ content }) {

  
  return (
    <div className="container mt-10">
      <h1 className="text-3xl font-semibold mb-4">{content.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.content }} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.html`);
  const fileContent = await fs.readFile(filePath, 'utf-8');
  
  // Extract title and content from the HTML file
  const lines = fileContent.split('\n');
  const title = lines[0].replace('<h1>', '').replace('</h1>', '');
  const content = lines.slice(1).join('\n');
  
  return {
    props: {
      content: {
        title,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = blogs.map(blog => blog.slug);
  const paths = blogSlugs.map(slug => ({ params: { slug } }));
  
  return {
    paths,
    fallback: false,
  };
}

export default BlogPost;
