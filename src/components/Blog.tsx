import { FC } from "react";
import BlogCard from "./BlogCard";
import nftToken from "../assets/nft_token.png";
import ethereum from "../assets/ethereum_network.png";
import popularToken from "../assets/popular_tokens.png";

const Blog: FC = () => {
  const blogPosts = [
    {
      title: "What is NFT Token?",
      image: nftToken,
      author: "mk3dits",
      date: "10 May 2023",
    },
    {
      title: "Etherium Network",
      image: ethereum,
      author: "byTEz",
      date: "10 Oct 2023",
    },
    {
      title: "Popular NFT Tokens?",
      image: popularToken,
      author: "byTEz",
      date: "10 Oct 2023",
    },
  ];

  return (
    <div
      id="community"
      className="min-h-[628px] border-b border-black max-w-[1440px] flex flex-col gap-16 justify-center py-10 px-4"
    >
      <div className="w-full max-w-[1236.5px] mx-auto min-h-[91px] flex flex-col md:flex-row justify-between md:items-center gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-[#121212] font-poppins text-[40px] sm:text-5xl">
            All about NFT World
          </h3>
          <p className="text-[#1F1F1F] font-courier text-lg">
            Get access to premium gist all about the nft world
          </p>
        </div>

        <p className="text-brand-purple font-courier text-xl hover:text-black md:px-4 md:py-3 transition-all duration-300 cursor-pointer">
          See all
        </p>
      </div>

      <div className="inline-flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6">
        {blogPosts.map((blogPost, index) => (
          <BlogCard key={index} {...blogPost} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
