import { FC } from "react";
import Button from "./Button";

const ConnectError: FC<{
  onConnect: () => void;
}> = ({ onConnect }) => {
  return (
    <div className="flex w-[400px] py-4 px-6 flex-col justify-center items-center gap-6">
      <div className="flex items-center gap-4 flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="48"
          viewBox="0 0 52 48"
          fill="none"
        >
          <path
            d="M2 37.8226C2 36.3649 2.37149 34.9313 3.0794 33.6571L17.9256 6.93394C19.2416 4.56516 21.5314 2.89373 24.1885 2.3623C25.3843 2.12313 26.6157 2.12313 27.8115 2.3623C30.4686 2.89373 32.7584 4.56515 34.0744 6.93393L48.9206 33.6571C49.6285 34.9313 50 36.3649 50 37.8226C50 42.5598 46.1598 46.4 41.4226 46.4H10.5774C5.84022 46.4 2 42.5598 2 37.8226Z"
            fill="#FFE1E1"
            stroke="#FF8989"
            strokeWidth="3"
          />
          <path
            d="M26 16.3998L26 25.9998"
            stroke="#FF8989"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 33.1997L26 34.3997"
            stroke="#FF8989"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="flex flex-col items-center gap-2">
          <h3 className="w-[352px] text-2xl font-poppins text-[#212121]">
            An Unwanted Error Occurred
          </h3>
          <p className="text-[#212121] font-poppins">
            Wallet not connected. Please try again.
          </p>
        </div>
      </div>
      <Button variant="secondary" size="sm" onClick={() => onConnect()}>
        Reconnect
      </Button>
    </div>
  );
};

export default ConnectError;
