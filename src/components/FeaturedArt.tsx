import { FC } from "react";
import ArtCard from "./ArtCard";
import spaceMan from "../assets/space_man.png";
import spaceCart from "../assets/space_cat.png";
import cent from "../assets/cents.png";
import squirrel from "../assets/split_squirrel.png";
import outreach from "../assets/outreach.png";

const FeaturedArt: FC = () => {
  return (
    <div
      id="discover"
      className="flex w-full max-w-[1440px] py-20 flex-col justify-center items-center gap-6 mx-auto border border-black bg-cream-background"
    >
      <div className="flex flex-col px-6 lg:px-20 lg:flex-row lg:items-center justify-between gap-6 self-stretch w-full">
        <h4 className="self-stretch text-4xl md:text-5xl text-blue-gray-900 font-poppins">
          Featured art categories
        </h4>

        <p className="text-brand-purple font-courier text-lg md:text-xl hover:text-black py-3 transition-all duration-300 cursor-pointer">
          View All Categories
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap items-center justify-center xl:justify-between gap-6 2xl:self-stretch">
        <ArtCard src={spaceMan} />
        <ArtCard src={spaceCart} />
        <ArtCard src={cent} />
        <ArtCard src={squirrel} />
        <ArtCard src={outreach} />
      </div>
    </div>
  );
};

export default FeaturedArt;
