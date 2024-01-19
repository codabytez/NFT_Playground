import { FC } from "react";
import Loader from "./Loader";

const RetryLoading: FC<{ wallet: string }> = ({ wallet }) => {
  return (
    <div className="flex w-[400px] py-4 px-6 flex-col justify-center items-center gap-6">
      <Loader />
      <p className="text-[#212121] text-2xl font-poppins text-center">
        Trying to reconnect
      </p>
      <p className="text-[#212121] w-[216px] text-center">
        Please connect {wallet} & approve transaction
      </p>
      <p className="text-[#212121] text-center text-xs">
        Sometimes block size is more, It may take little time to connect
      </p>
    </div>
  );
};

export default RetryLoading;
