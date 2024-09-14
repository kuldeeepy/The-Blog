// components/DisqusComments.js
import { useEffect } from 'react';

const DisqusComments = ({ postUrl, identifier, title }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://beyondbytes-1.disqus.com/embed.js';
    script.setAttribute('data-timestamp', +new Date());
    (document.head || document.body).appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    window.disqus_config = function () {
      this.page.url = postUrl;
      this.page.identifier = identifier;
      this.page.title = title;
    };
  }, [postUrl, identifier, title]);

  return (
    <div id="disqus_thread"></div>
  );
};

export default DisqusComments;
