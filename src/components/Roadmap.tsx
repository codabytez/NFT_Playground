import { FC } from "react";
import roadmap from "../assets/roadmap.png";

const Roadmap: FC = () => {
  return (
    <div className="flex max-w-[1440px] h-[1004px] items-start">
      <div className="flex-1 flex h-[1004px] py-[203px] pr-[73px] pl-[95px] flex-col justify-center items-center border-black border border-l-0 bg-brand-purple">
        <div className="flex w-[569px] h-[597px] flex-col justify-end items-center shrink-0 border-2 border-black bg-[#141414]">
          <img
            src={roadmap}
            alt="roadmap"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-start h-[1004px] pt-10 pb-[91px] pl-16 gap-10 border-y bg-contrast-yellow border-black">
        <div className="flex flex-col items-start gap-[19px]">
          <div className="w-[58px] h-[59px] inline-flex py-3 px-4 justify-center items-center border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]">
            <p className="text-white text-center font-mukta text-2xl font-medium">
              01
            </p>
          </div>
          <h3 className="text-[#121212] font-poppins text-[46px] leading-[56px] tracking-[-0.92px]">
            Connect your wallet
          </h3>

          <p className="text-[#1F1F1F] font-courier text-xl w-[509px]">
            Users can securely connect their digital wallets, providing them
            with a personalized and secure experience while managing their
            digital assets.
          </p>
        </div>

        <div className="flex flex-col items-start gap-[19px]">
          <div className="w-[58px] h-[59px] inline-flex py-3 px-4 justify-center items-center border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]">
            <p className="text-white text-center font-mukta text-2xl font-medium">
              02
            </p>
          </div>
          <h3 className="text-[#121212] font-poppins text-[46px] leading-[56px] tracking-[-0.92px]">
            Create Your Artwork
          </h3>

          <p className="text-[#1F1F1F] font-courier text-xl w-[487px]">
            Artists and creators are empowered with user-friendly tools and
            features, allowing them to showcase their talents and originality by
            designing, minting, and listing their NFTs on the platform.
          </p>
        </div>

        <div className="flex flex-col items-start gap-[19px]">
          <div className="w-[58px] h-[59px] inline-flex py-3 px-4 justify-center items-center border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]">
            <p className="text-white text-center font-mukta text-2xl font-medium">
              03
            </p>
          </div>
          <h3 className="text-[#121212] font-poppins text-[46px] leading-[56px] tracking-[-0.92px]">
            Optimize on Community
          </h3>

          <p className="text-[#1F1F1F] font-courier text-xl w-[487px]">
            Building and nurturing a strong community is a core focus, offering
            forums, chats, and social features to engage users
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
