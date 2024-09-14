'use client';
import { DiscussionEmbed } from 'disqus-react';
import React from 'react';

// Define the type for the post prop
interface Post {
  slug: string;
  title: string;
}

interface DisqusCommentsProps {
  post: Post;
}

function DisqusComments({ post }: DisqusCommentsProps) {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : "";
  const disqusConfig = {
    url: pageUrl,
    identifier: post.slug,
    title: post.title,
  };
  
  return (
    <DiscussionEmbed
      shortname="beyondbytes-1"
      config={disqusConfig}
    />
  );
}

export default DisqusComments;
