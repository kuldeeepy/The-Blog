import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# 

## About Me

![Kuldeep](/images/profile.jpeg)

Hi, I'm Kuldeep! I'm into Computer Science as I work towards landing a Software Development Engineer (SDE) role. I’m naturally passionate about knowing new things and solving interesting problems.

On this blog, I share what excites me — from coding and tech insights to personal experiences. I hope you find something here that sparks your interest or helps you on your own journey.

Thanks for stopping by! Feel free to reach out if you want to chat.

## Say hi!

Linkedin: [@kuldeep](https://www.linkedin.com/in/kuldeeep-yadav)

`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "A personal blog where I share things relevant to my life, experiences and interest.",
    openGraph: {
      title: "About Me",
      description: "A personal blog where I share things relevant to my life, experiences and interest.",
      images: [
        signOgImageUrl({
          title: "Kuldeep",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
