import { FC } from "react";
import roadmap from "../assets/roadmap.png";
import roadmap2 from "../assets/roadmap2.png";
import roadmap3 from "../assets/roadmap3.png";

const Roadmap: FC = () => {
  return (
    <div
      id="roadmap"
      className="flex flex-col lg:flex-row max-w-[1440px] min-h-[1004px] items-start"
    >
      <div className="flex-1 w-full flex py-28 sm:py-[203px] pl-[20px] sm:pr-[73px] lg:pl-5 lg:pr-12 xl:pr-[73px] xl:pl-[95px] flex-col justify-center items-center border-black border border-l-0 bg-brand-purple">
        <div className="flex w-full sm:w-[569px] h-[597px] lg:w-full xl:w-[569px] flex-col justify-center items-start shrink-0 relative">
          <div className="w-[80%] sm:w-[417px] sm:h-[554px] border border-black absolute -right-10">
            <img
              src={roadmap3}
              alt="roadmap3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[110%] sm:w-[571px] sm:h-[609px] lg:w-full xl:w-[571px] border border-black absolute right-3 sm:-right-2 lg:-right-4 xl:-right-2">
            <img
              src={roadmap2}
              alt="roadmap2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[100%] sm:w-[550px] sm:h-[709px] lg:w-full xl:w-[550px] border border-black absolute -left-10 sm:-left-0">
            <img
              src={roadmap}
              alt="roadmap"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-start h-[1004px] pt-10 pb-[91px] pl-16 lg:pl-4 xl:pl-16 gap-10 border-y bg-contrast-yellow border-black w-full">
        <div className="w-[80%] lg:w-full flex flex-col items-start gap-[19px]">
          <div className="w-[58px] h-[59px] inline-flex py-3 px-4 justify-center items-center border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]">
            <p className="text-white text-center font-mukta text-2xl font-medium">
              01
            </p>
          </div>
          <h3 className="text-[#121212] font-poppins text-[46px] leading-[56px] tracking-[-0.92px]">
            Connect your wallet
          </h3>

          <p className="text-[#1F1F1F] font-courier text-xl lg:w-[509px]">
            Users can securely connect their digital wallets, providing them
            with a personalized and secure experience while managing their
            digital assets.
          </p>
        </div>

        <div className="w-[80%] lg:w-full flex flex-col items-start gap-[19px]">
          <div className="w-[58px] h-[59px] inline-flex py-3 px-4 justify-center items-center border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]">
            <p className="text-white text-center font-mukta text-2xl font-medium">
              02
            </p>
          </div>
          <h3 className="text-[#121212] font-poppins text-[46px] leading-[56px] tracking-[-0.92px]">
            Create Your Artwork
          </h3>

          <p className="text-[#1F1F1F] font-courier text-xl lg:w-[487px]">
            Artists and creators are empowered with user-friendly tools and
            features, allowing them to showcase their talents and originality by
            designing, minting, and listing their NFTs on the platform.
          </p>
        </div>

        <div className="w-[80%] lg:w-full flex flex-col items-start gap-[19px]">
          <div className="w-[58px] h-[59px] inline-flex py-3 px-4 justify-center items-center border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]">
            <p className="text-white text-center font-mukta text-2xl font-medium">
              03
            </p>
          </div>
          <h3 className="text-[#121212] font-poppins text-[46px] leading-[56px] tracking-[-0.92px]">
            Optimize on Community
          </h3>

          <p className="text-[#1F1F1F] font-courier text-xl lg:w-[487px]">
            Building and nurturing a strong community is a core focus, offering
            forums, chats, and social features to engage users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
