import { FC } from "react";
import Logo from "./Logo";
import Button from "./Button";

const Navbar: FC = () => {
  return (
    <div className=" h-[82px] border-b border-black flex justify-between items-center px-10">
      <div className="flex items-center gap-2">
        <Logo />
        <p className="font-mukta text-2xl font-bold">Playground</p>
      </div>

      <div className="flex gap-8">
        <a
          href="#auction"
          className="font-courier text-xl text-[#121212] transition-all duration-300 hover:text-brand-purple"
        >
          Auction
        </a>
        <a
          href="#roadmap"
          className="font-courier text-xl text-[#121212] transition-all duration-300 hover:text-brand-purple"
        >
          Roadmap
        </a>
        <a
          href="#discover"
          className="font-courier text-xl text-[#121212] transition-all duration-300 hover:text-brand-purple"
        >
          Discover
        </a>
        <a
          href="#community"
          className="font-courier text-xl text-[#121212] transition-all duration-300 hover:text-brand-purple"
        >
          Community
        </a>
      </div>
      <Button size="sm">X-connect your wallet</Button>
    </div>
  );
};

export default Navbar;
