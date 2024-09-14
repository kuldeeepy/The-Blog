'use client';
import { DiscussionEmbed } from 'disqus-react';
import React from 'react';

function DisqusComments({ post }) {
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