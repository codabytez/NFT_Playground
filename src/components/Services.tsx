import { FC, useState } from "react";
import {
  Server,
  Trophy,
  PieChart,
  People,
  ShieldCheckmark,
} from "react-ionicons";
import Button from "./Button";
import Strip from "./Strip";
import { Modal } from "./Modal";
import ConnectAccount from "./ConnectAccount";

const Services: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-[698px] self-stretch border border-black bg-cream-background flex flex-col justify-end py-20 relative">
      <div className="absolute -top-[120px]">
        <div className="w-[1530px] h-[296px] shrink-0 relative">
          <div className="absolute -top-20 md:top-0 -left-20 md:-left-10  inline-flex rotate-[-8.151deg]">
            <Strip />
          </div>

          <div className="absolute top-10 right-0 inline-flex rotate-[3deg]">
            <Strip bg="yellow" direction="right" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-20 px-5">
        <h2 className="self-stretch text-[40px] md:text-5xl text-blue-gray-900 font-poppins text-center pt-20 md:pt-[150px] lg:pt-0">
          Services you get when you’re connected
        </h2>
        <div className="flex flex-col md:flex-row w-full lg:w-[1058px] pb-7 justify-center items-center md:justify-between gap-10 lg:gap-20">
          <div className="inline-flex flex-col gap-2 h-[108px] max-w-[173.3px] self-stretch  justify-center items-center flex-[1_0_0] mx-auto md:mx-0">
            <div
              className="flex w-[64px] h-[64px] p-3 justify-center items-center shrink-0 border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]
            "
            >
              <Server color="#FFFB47" height="40px" width="40px" />
            </div>

            <p className="flex-[1_0_0] text-center text-blue-gray-900 font-courier text-xl">
              Profitable
            </p>
          </div>

          <div className="inline-flex flex-col gap-2 h-[108px] max-w-[173.3px] self-stretch  justify-center items-center flex-[1_0_0] mx-auto md:mx-0">
            <div
              className="flex w-[64px] h-[64px] p-3 justify-center items-center shrink-0 border border-black bg-contrast-yellow shadow-[2px_3px_0px_0px_#000]
            "
            >
              <Trophy color="#9747FF" height="40px" width="40px" />
            </div>

            <p className="flex-[1_0_0] text-center text-blue-gray-900 font-courier text-xl">
              Top artists
            </p>
          </div>

          <div className="inline-flex flex-col gap-2 h-[108px] max-w-[173.3px] self-stretch  justify-center items-center flex-[1_0_0] mx-auto md:mx-0">
            <div
              className="flex w-[64px] h-[64px] p-3 justify-center items-center shrink-0 border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]
            "
            >
              <ShieldCheckmark color="#FFFB47" height="40px" width="40px" />
            </div>

            <p className="flex-[1_0_0] text-center text-blue-gray-900 font-courier text-xl">
              Secured
            </p>
          </div>

          <div className="inline-flex flex-col gap-2 h-[108px] max-w-[173.3px] self-stretch  justify-center items-center flex-[1_0_0] mx-auto md:mx-0">
            <div
              className="flex w-[64px] h-[64px] p-3 justify-center items-center shrink-0 border border-black bg-contrast-yellow shadow-[2px_3px_0px_0px_#000]
            "
            >
              <PieChart color="#9747FF" height="40px" width="40px" />
            </div>

            <p className="flex-[1_0_0] text-center text-blue-gray-900 font-courier text-xl">
              Good metrics
            </p>
          </div>

          <div className="inline-flex flex-col gap-2 h-[108px] max-w-[173.3px] self-stretch  justify-center items-center flex-[1_0_0] mx-auto md:mx-0">
            <div
              className="flex w-[64px] h-[64px] p-3 justify-center items-center shrink-0 border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]
            "
            >
              <People color="#FFFB47" height="40px" width="40px" />
            </div>

            <p className="flex-[1_0_0] text-center text-blue-gray-900 font-courier text-xl">
              Collaborate
            </p>
          </div>
        </div>
        <Button variant="secondary" onClick={handleModalOpen}>
          Connect
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ConnectAccount />
      </Modal>
    </div>
  );
};

export default Services;
