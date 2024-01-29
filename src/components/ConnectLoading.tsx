import { FC } from "react";
import Loader from "./Loader";

const ConnectLoading: FC<{ wallet: string }> = ({ wallet }) => {
  return (
    <div className="flex w-[340px] sm:w-[400px] py-4 px-6 flex-col justify-center items-center gap-6">
      <Loader />
      <p className="text-[#212121] text-xl sm:text-2xl font-poppins text-center">
        Connecting Wallet
      </p>
      <p className="text-[#212121] text-center">
        Please connect {wallet} & approve transaction
      </p>
    </div>
  );
};

export default ConnectLoading;
