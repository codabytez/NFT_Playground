import { FC } from "react";

const ArtCard: FC<{ src: string }> = ({ src }) => {
  return (
    <div className="flex w-full min-w-[236px] max-w-[365px] h-[356px] lg:w-[236.8px] lg:h-[354px] flex-col border border-blue-gray-200 relative group overflow-hidden transition-all duration-300">
      <img src={src} alt="Space Man" className="w-full h-full object-cover" />
      <button className="absolute bottom-0 hidden group-hover:flex justify-center items-center border border-[#121212] w-full py-[18px] px-[28px] bg-contrast-yellow text-black transition-all duration-300">
        Open
      </button>
    </div>
  );
};

export default ArtCard;
