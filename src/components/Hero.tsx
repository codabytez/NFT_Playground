import { FC } from "react";
import Button from "./Button";
import angelaKudz from "../assets/angela_kudz.png";
import ImageTrace from "./ImageTrace";

const Hero: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-10">
      <div className="w-full lg:w-[653px] md:h-[729px] border-r border-b border-black bg-brand-purple flex flex-col justify-center items-center px-3 py-14 lg:py-0 md:px-0">
        <div className="inline-flex gap-12 flex-col">
          <div className="inline-flex gap-3 flex-col">
            <h1 className="lg:w-[461px] text-white mx-auto lg:mx-0 md:text-center lg:text-left font-poppins text-[64px] md:text-[78px] font-medium leading-[88px] tracking-[-1.56px]">
              Explore NFT collections from the best artists
            </h1>
            <p className="text-white font-courier text-xl lg:w-[409px] md:text-center lg:text-left">
              Discover great digital art experience at our NFT Platform.
            </p>
          </div>
          <div>
            <div className="flex lg:w-[409px] w-[80%] mx-auto lg:mx-0 md:justify-center lg:justify-start">
              <Button variant="tertiary">Explore</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[787px] h-[729px] mx-auto border-b border-black bg-contrast-yellow flex flex-col justify-center items-center">
        <div className="w-[600px] sm:w-[640px] sm:h-[539px] relative flex justify-center">
          <svg
            className="flex absolute top-[100px] sm:top-[112px] left-[185px] sm:left-[196px] z-10"
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
          >
            <circle cx="23.5" cy="23.5" r="23.5" fill="#9747FF" />
          </svg>
          <span className="flex absolute top-[120px] sm:top-[136px] left-[230px] sm:left-[239px] h-[3px] w-9 bg-cream-background z-[3]" />
          <svg
            className="flex absolute top-[100px] sm:top-[112px] left-[250px] sm:left-[273px] z-10"
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
          >
            <circle cx="23.5" cy="23.5" r="23.5" fill="#FFFB47" />
          </svg>
          <span className="flex w-[45px] h-[3px] rotate-[-22.735deg] bg-cream-background absolute top-[110px] sm:top-[120.02px] left-[295px] sm:left-[315px] z-[3]" />

          <img
            src={angelaKudz}
            alt="Angela Kudz"
            className="w-[600px] sm:w-full relative z-[2]"
          />

          <div className="flex flex-col gap-2.5 absolute -right-[10px] sm:-right-1 -bottom-[18px] sm:-bottom-[0.614px]">
            <ImageTrace />
          </div>
          <div className="inline-flex flex-col p-4 sm:py-7 sm:pr-[53px] sm:pl-8 border border-[#121212] bg-white absolute -bottom-2.5 z-20">
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
