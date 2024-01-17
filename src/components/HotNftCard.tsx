import { FC } from "react";

import Button from "./Button";

const HotNftCard: FC<{
  name: string;
  image: string;
  userDP: string;
  collection: string;
}> = ({ name, image, userDP, collection }) => {
  return (
    <div className="w-[294px] h-[205px] border border-black bg-white flex flex-col">
      <div className="flex w-[294px] h-[126px] justify-center items-center border-b border-black shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-[18px] flex justify-between items-center">
        <div className="inline-flex gap-3.5 items-center">
          <img src={userDP} alt={name} className="w-7 h-7 rounded-full" />
          <div className="flex flex-col gap-1">
            <h6 className="text-[#121212] font-medium font-mukta">{name}</h6>
            <p className="text-[#505050] font-courier">
              {collection} Collection
            </p>
          </div>
        </div>
        <Button size="xs" variant="secondary">
          View
        </Button>
      </div>
    </div>
  );
};

export default HotNftCard;
