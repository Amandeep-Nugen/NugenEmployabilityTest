"use client";
import React from "react";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ params: { slug } }) => {
  return (
    <p className="text-2xl">
      Showing the dynamic routing for the slug <strong>{slug}</strong>
    </p>
  );
};

export default BlogPost;
