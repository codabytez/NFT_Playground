import { FC } from "react";
import Button from "./Button";

const NftCard: FC<{
  image: string;
  name: string;
  bid: string;
  userName: string;
  userDp: string;
  time: string;
}> = ({ image, name, bid, userName, userDp, time }) => {
  return (
    <div className="sm:w-[400px] h-[563px] border border-[#121212] bg-white flex flex-col gap-6">
      <div className="sm:w-[400px] h-[391px] ">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-4 px-2 sm:px-7">
        <div className="inline-flex gap-0.5 flex-col">
          <h5 className="text-[#121212] text-2xl font-medium">{name}</h5>
          <p className="text-[#505050] font-courier text-lg">
            Current bid : <span className="text-[#121212]">{bid} ETH</span>
          </p>
        </div>
        <span className="sm:w-[340px] border border-[#121212]" />

        <div className="sm:w-[340px] h-7 flex justify-between">
          <div className="inline-flex justify-center items-center gap-2.5">
            <img src={userDp} alt={userName} className="w-7 h-7 rounded-full" />
            <p className="text-[#505050] text-center font-courier">
              @{userName}
            </p>
          </div>
          <Button size="xs" variant="secondary">
            {time}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
