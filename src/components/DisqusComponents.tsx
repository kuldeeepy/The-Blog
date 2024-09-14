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
    <div className='my-8 p-4 bg-white shadow-md rounded-lg'>
      <DiscussionEmbed
      shortname="beyondbytes-1"
      config={disqusConfig}
      />
    </div>
  );
}

export default DisqusComments;
