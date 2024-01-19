import { FC } from "react";
import walletOwner from "../assets/walletowner.png";
import Button from "./Button";

const Connected: FC<{
  wallet: string;
  disconnect: () => void;
}> = ({ wallet, disconnect }) => {
  return (
    <div className="flex w-[400px] py-4 px-6 flex-col gap-6">
      <div className="flex w-[354px] h-[106px] p-1 flex-col justify-center gap-2.5 border border-[#E0E0E0]">
        <div className="flex items-center">
          <img
            src={walletOwner}
            alt="wallet owner"
            className="w-[27px] h-[27px] rounded-full"
          />
          <p className="p-2 text-[#212121] font-medium text-sm font-poppins">
            0x05c41sa5cfas....5c12a11178a1c5wa12
          </p>
        </div>
        <div className="flex gap-8 pl-2">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
            >
              <rect
                x="1"
                y="1.5"
                width="10"
                height="14"
                rx="3"
                stroke="#717171"
                stroke-width="1.5"
              />
              <path
                d="M13.5 5.90137C14.3967 6.42008 15 7.3896 15 8.50002V16.5C15 18.1569 13.6569 19.5 12 19.5H8.00002C6.8896 19.5 5.92008 18.8967 5.40137 18"
                stroke="#717171"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <p className="text-[#616161] text-sm p-2 font-poppins">
              Copy address
            </p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
            >
              <rect
                x="1"
                y="1.5"
                width="16"
                height="20"
                rx="4"
                stroke="#717171"
                stroke-width="1.5"
              />
              <path
                d="M5 6.5H13"
                stroke="#717171"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M5 11.5H13"
                stroke="#717171"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M5 16.5H9"
                stroke="#717171"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <p className="text-[#616161] text-sm p-2 font-poppins">
              View on explorer
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center self-stretch">
        <p className="p-2.5 font-poppins text-sm text-[#212121] font-medium">
          Connected with {wallet}
        </p>
        <Button variant="success" size="sm" onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    </div>
  );
};

export default Connected;
