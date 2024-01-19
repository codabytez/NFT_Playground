import { FC } from "react";
import Button from "./Button";
import angelaKudz from "../assets/angela_kudz.png";
import ImageTrace from "./ImageTrace";

const Hero: FC = () => {
  return (
    <div className="flex">
      <div className="w-[653px] h-[729px] border-r border-b border-black bg-brand-purple flex flex-col justify-center items-center">
        <div className="inline-flex gap-12 flex-col">
          <div className="inline-flex gap-3 flex-col">
            <h1 className="w-[461px] text-white font-poppins text-[78px] font-medium leading-[88px] tracking-[-1.56px]">
              Explore NFT collections from the best artists
            </h1>
            <p className="text-white font-courier text-xl w-[409px]">
              Discover great digital art experience at our NFT Platform.
            </p>
          </div>
          <div>
            <Button variant="tertiary">Explore</Button>
          </div>
        </div>
      </div>

      <div className="w-[787px] h-[[729px] border-b border-black bg-contrast-yellow flex flex-col justify-center items-center">
        <div className="w-[640px] h-[539px] relative flex justify-center">
          <svg
            className="absolute top-[112px] left-[196px] z-10"
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
          >
            <circle cx="23.5" cy="23.5" r="23.5" fill="#9747FF" />
          </svg>
          <span className="absolute top-[136px] left-[239px] h-[3px] w-9 bg-cream-background z-[3]" />
          <svg
            className="absolute top-[112px] left-[273px] z-10"
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
          >
            <circle cx="23.5" cy="23.5" r="23.5" fill="#FFFB47" />
          </svg>
          <span className="w-[45px] h-[3px] rotate-[-22.735deg] bg-cream-background absolute top-[120.02px] left-[315px] z-[3]" />

          <img
            src={angelaKudz}
            alt="Angela Kudz"
            className="w-full h-full object-cover relative z-[2]"
          />

          <div className="flex flex-col gap-2.5 absolute -right-1 -bottom-[0.614px]">
            <ImageTrace />
          </div>
          <div className="inline-flex flex-col py-7 pr-[53px] pl-8 border border-[#121212] bg-white absolute -bottom-2.5 z-20">
            <p className="font-poppins text-[#121212] text-3xl">Angela Kudz</p>
            <p className="font-courier text-[#121212] font-bold">
              20 COLLECTIONS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
