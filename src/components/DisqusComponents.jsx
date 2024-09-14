import { useEffect } from "react";
import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ postUrl, identifier, title }) => {
  useEffect(() => {
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = postUrl;
          this.page.identifier = identifier;
          this.page.title = title;
        },
      });
    }
  }, [postUrl, identifier, title]);

  return (
    <div id="disqus_thread">
      <DiscussionEmbed
        shortname='beyondbytes-1'
        config={{
          url: postUrl,
          identifier: identifier,
          title: title,
        }}
      />
    </div>
  );
};

export default DisqusComments;
