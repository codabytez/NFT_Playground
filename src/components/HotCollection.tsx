import { FC } from "react";
import HotNftCard from "./HotNftCard";
import jamesNft from "../assets/james_kim.png";
import kim from "../assets/kim.png";
import takehiroNft from "../assets/takehiro_fum.png";
import takehiro from "../assets/fum.png";
import tylerNft from "../assets/tyler_karen.png";
import tyler from "../assets/karen.png";
import markNft from "../assets/mark_scott.png";
import mark from "../assets/scott.png";

const HotCollection: FC = () => {
  const hotNfts = [
    {
      name: "James Kim",
      image: jamesNft,
      userDP: kim,
      collection: "5",
    },
    {
      name: "Takehiro Fum",
      image: takehiroNft,
      userDP: takehiro,
      collection: "12",
    },
    {
      name: "Tyler Karen",
      image: tylerNft,
      userDP: tyler,
      collection: "5",
    },
    {
      name: "Mark Scott",
      image: markNft,
      userDP: mark,
      collection: "27",
    },
  ];

  return (
    <div className="flex h-[512px] py-20 px-24 flex-col gap-11 border-b border-black">
      <div className="flex flex-col gap-2">
        <h3 className="text-[#121212] font-poppins text-[46px] leading-[56px] tracking-[-0.92px]">
          Most Popular Artists
        </h3>
        <p className="text-[#1F1F1F] font-courier text-xl">
          The most popular artists across the verse
        </p>
      </div>
      <div className="flex justify-center items-center gap-6">
        {hotNfts.map((nft, index) => (
          <HotNftCard key={index} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default HotCollection;
