import { FC } from "react";
import NftCard from "./NftCard";
import spiral from "../assets/spiral.png";
import allison from "../assets/allison.png";
import checkers from "../assets/checkers.png";
import mason from "../assets/mason.png";
import neutral from "../assets/neutral.png";
import louie from "../assets/louie.png";

const Collection: FC = () => {
  const nftCards = [
    {
      name: "Sprial",
      bid: "4",
      image: spiral,
      userName: "allison",
      userDp: allison,
      time: "02D:18H:58M:40S",
    },
    {
      name: "Checkers",
      bid: "0.04",
      image: checkers,
      userName: "ma_son",
      userDp: mason,
      time: "02D:18H:58M:40S",
    },
    {
      name: "Neutral",
      bid: "2",
      image: neutral,
      userName: "louie_meæ",
      userDp: louie,
      time: "02D:18H:58M:40S",
    },
  ];

  return (
    <div
      id="auction"
      className="w-[1438px] h-[1065px] mx-auto border-b border-black px-[90px] py-20 flex flex-col justify-center items-center gap-16"
    >
      <div className="flex flex-col w-[697px] gap-3.5 items-center justify-center">
        <h2 className="text-[#121212] text-center font-poppins text-[46px] leading-[56px] tracking-[-0.92px]">
          Discover the most popular NFTs
        </h2>
        <p className="w-[549px] text-[#1F1F1F] text-center font-courier text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="inline-flex gap-6 justify-center items-center">
        <button className="flex py-3 px-6 justify-center items-center gap-3.5 border border-[#121212] text-[#121212] text-xl font-courier hover:bg-brand-purple hover:shadow-[4px_4px_0px_0px_#000] hover:text-white transition-all duration-300">
          Popular
        </button>
        <button className="flex py-3 px-6 justify-center items-center gap-3.5 border border-[#121212] text-[#121212] text-xl font-courier hover:bg-brand-purple hover:shadow-[4px_4px_0px_0px_#000] hover:text-white transition-all duration-300">
          Brizzy
        </button>
        <button className="flex py-3 px-6 justify-center items-center gap-3.5 border border-[#121212] text-[#121212] text-xl font-courier hover:bg-brand-purple hover:shadow-[4px_4px_0px_0px_#000] hover:text-white transition-all duration-300">
          Abstract
        </button>
        <button className="flex py-3 px-6 justify-center items-center gap-3.5 border border-[#121212] text-[#121212] text-xl font-courier hover:bg-brand-purple hover:shadow-[4px_4px_0px_0px_#000] hover:text-white transition-all duration-300">
          Gaming
        </button>
        <button className="flex py-3 px-6 justify-center items-center gap-3.5 border border-[#121212] text-[#121212] text-xl font-courier hover:bg-brand-purple hover:shadow-[4px_4px_0px_0px_#000] hover:text-white transition-all duration-300">
          Avatar
        </button>
        <button className="flex py-3 px-6 justify-center items-center gap-3.5 border border-[#121212] text-[#121212] text-xl font-courier hover:bg-brand-purple hover:shadow-[4px_4px_0px_0px_#000] hover:text-white transition-all duration-300">
          Photography
        </button>
        <button
          className="text-brand-purple font-courier text-xl hover:bg-contrast-yellow transition-all duration-300 flex py-3 px-6 justify-center items-center gap-3.5 hover:border hover:border-black
        "
        >
          More
        </button>
      </div>

      <div className="flex gap-6">
        {nftCards.map((nft, index) => (
          <NftCard key={index} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
