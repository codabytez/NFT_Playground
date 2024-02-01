import { FC } from "react";

const BurstStar: FC<{ fill?: string }> = ({ fill = "#FFFB47" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      className="w-7 h-7 sm:min-w-[40px] sm:min-h-[40px]"
    >
      <path
        d="M19.6096 0.108398L22.7542 17.2667L39.9678 20.093L22.8589 22.9192L20.3501 40.0775L17.2055 22.9192L-0.00816879 20.093L17.1007 17.2667L19.6096 0.108398Z"
        fill={fill}
      />
    </svg>
  );
};

export default BurstStar;
