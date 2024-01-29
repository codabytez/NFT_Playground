import { FC, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { Modal } from "./Modal";
import ConnectAccount from "./ConnectAccount";
import menu from "../assets/menu.svg";
import closeMenu from "../assets/closeMenu.svg";
import { motion } from "framer-motion";

const Navbar: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="fixed w-full bg-cream-background max-w-[1440px] z-[500]">
      <div className="h-[82px] border-b border-black flex justify-between items-center px-4 lg:px-10 max-w-[1440px]">
        <a href="/" className="flex items-center gap-2">
          <Logo />
          <p className="font-mukta text-2xl font-bold">Playground</p>
        </a>

        <motion.img
          src={isNavbarOpen ? closeMenu : menu}
          alt="menu"
          className="block lg:hidden cursor-pointer"
          initial={{ x: -5 }}
          whileTap={{ x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        />
        <div
          className={`fixed lg:relative top-[80px] lg:top-0 left-0 flex flex-col lg:gap-10 lg:flex-row h-screen lg:h-auto w-[calc(100%+20px)] lg:w-auto items-center transition-all duration-700 ${
            isNavbarOpen
              ? "translate-y-0"
              : "-translate-y-[300%] lg:translate-y-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center bg-brand-purple lg:bg-transparent w-full h-[55%]">
            <a
              href="#auction"
              className="font-courier text-xl text-white lg:text-[#121212] transition-all duration-300 hover:text-contrast-yellow lg:hover:text-brand-purple"
              onClick={() => setIsNavbarOpen(false)}
            >
              Auction
            </a>
            <a
              href="#roadmap"
              className="font-courier text-xl text-white lg:text-[#121212] transition-all duration-300 hover:text-contrast-yellow lg:hover:text-brand-purple"
              onClick={() => setIsNavbarOpen(false)}
            >
              Roadmap
            </a>
            <a
              href="#discover"
              className="font-courier text-xl text-white lg:text-[#121212] transition-all duration-300 hover:text-contrast-yellow lg:hover:text-brand-purple"
              onClick={() => setIsNavbarOpen(false)}
            >
              Discover
            </a>
            <a
              href="#community"
              className="font-courier text-xl text-white lg:text-[#121212] transition-all duration-300 hover:text-contrast-yellow lg:hover:text-brand-purple"
              onClick={() => setIsNavbarOpen(false)}
            >
              Community
            </a>
          </div>
          <div className="flex bg-contrast-yellow lg:bg-transparent w-full justify-center items-center h-[45%]">
            <Button
              size="sm"
              onClick={() => {
                handleModalOpen();
                setIsNavbarOpen(false);
              }}
            >
              X-connect your wallet
            </Button>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <ConnectAccount />
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
