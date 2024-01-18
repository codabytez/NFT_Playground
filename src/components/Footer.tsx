import { FC } from "react";
import playstore from "../assets/png-transparent-google-play-store.png";
import appstore from "../assets/appstore.png";

const Footer: FC = () => {
  return (
    <div className="flex py-6 px-10 flex-col items-end gap-[75px] self-stretch bg-brand-purple">
      <div className="flex justify-between items-start self-stretch">
        <div className="flex flex-col gap-6 w-[177px] items-start">
          <h3 className="text-[#FFFB47] font-courier text-xl">Download App</h3>
          <div className="flex flex-col gap-2 self-stretch">
            <p className="text-white font-courier text-sm self-stretch opacity-70">
              Connect faster using the mobile App
            </p>
            <div className="flex flex-col gap-2 self-stretch">
              <img
                src={playstore}
                alt="playstore"
                className="w-[104px] h-[34px]"
              />
              <img
                src={appstore}
                alt="appstore"
                className="w-[104px] h-[34px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-[177px] items-start">
          <h3 className="text-[#FFFB47] font-courier text-xl">Support</h3>
          <div className="flex flex-col gap-2 self-stretch">
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Support ticket
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              info@playground.nft
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              889-50400
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start">
          <h3 className="text-[#FFFB47] font-courier text-xl">
            Account & Directs
          </h3>

          <div className="flex flex-col gap-2 self-stretch">
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Profile Info
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Wish List
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Auction
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Roadmap
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Discover
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Community
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start">
          <h3 className="text-[#FFFB47] font-courier text-xl">Specials</h3>

          <div className="flex flex-col gap-2 self-stretch">
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Featured Collection
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Latest Collection
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Best Selling pieces
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Top Rated pieces
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Popular artists
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-start">
          <h3 className="text-[#FFFB47] font-courier text-xl">Quick Link</h3>

          <div className="flex flex-col gap-2 self-stretch">
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Terms Of Use
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-white font-courier text-sm transition-all duration-300 hover:text-[#FFFB47] hover:cursor-pointer hover:opacity-80"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-6">
            <h3 className="text-[#FFFB47] font-courier text-xl">Newsletter</h3>
            <p className="text-white font-courier">Subscribe to our channel</p>
          </div>
          <div className="w-[243px] h-[60px] inline-flex py-4 px-6 justify-center items-center border border-black bg-brand-purple gap-8 shadow-[4px_4px_0px_0px_#000]">
            <input
              placeholder="Enter your email"
              className="border-none outline-none bg-transparent text-white opacity-50 w-[150px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="min-w-6 min-h-6"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M9.91196 12.3709H3.99996L2.02296 4.5059C2.0103 4.46019 2.00259 4.41325 1.99996 4.3659C1.97796 3.6449 2.77196 3.1449 3.45996 3.4749L22 12.3709L3.45996 21.2669C2.77996 21.5939 1.99596 21.1079 1.99996 20.3999C2.00198 20.3366 2.0131 20.274 2.03296 20.2139L3.49996 15.3709"
                stroke="#FFFB47"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center self-stretch opacity-60">
        <span className="flex w-[1440px] justify-center items-center border border-white opacity-80" />

        <p className="text-white font-courier">
          © {new Date().getFullYear()} cooked by MK3DITS served to BYTEZ. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
