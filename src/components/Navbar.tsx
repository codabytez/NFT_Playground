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
        <p className="font-courier text-xl text-[#121212]">Auction</p>
        <p className="font-courier text-xl text-[#121212]">Roadmap</p>
        <p className="font-courier text-xl text-[#121212]">Discover</p>
        <p className="font-courier text-xl text-[#121212]">Community</p>
      </div>
      <Button>X-connect your wallet</Button>
    </div>
  );
};

export default Navbar;
