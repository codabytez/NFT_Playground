import { FC, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { Modal } from "./Modal";
import ConnectAccount from "./ConnectAccount";

const Navbar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
      <Button size="sm" onClick={handleModalOpen}>
        X-connect your wallet
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ConnectAccount />
      </Modal>
    </div>
  );
};

export default Navbar;
