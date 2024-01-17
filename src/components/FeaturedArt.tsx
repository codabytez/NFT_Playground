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
      className="flex w-[1440px] p-20 flex-col justify-center items-center gap-6 mx-auto border border-black bg-cream-background"
    >
      <div className="flex items-center justify-between gap-6 self-stretch">
        <h4 className="self-stretch text-5xl text-blue-gray-900 font-poppins">
          Featured art categories
        </h4>
        <p className="flex py-3 px-4 justify-center items-center text-brand-purple font-courier text-xl">
          View All Categories
        </p>
      </div>

      <div className="flex gap-6 self-stretch">
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
