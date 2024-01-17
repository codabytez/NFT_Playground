import { FC } from "react";
import {
  Server,
  Trophy,
  PieChart,
  People,
  ShieldCheckmark,
} from "react-ionicons";
import Button from "./Button";
import Strip from "./Strip";

const Services: FC = () => {
  return (
    <div className="h-[698px] self-stretch border border-black bg-cream-background flex flex-col justify-end py-20 relative">
      <div className="absolute -top-[120px]">
        <div className="w-[1530px] h-[296px] shrink-0 relative">
          <div className="absolute top-0 -left-10  inline-flex rotate-[-8.151deg]">
            <Strip />
          </div>

          <div className="absolute top-10 right-0  inline-flex rotate-[3deg]">
            <Strip bg="yellow" direction="right" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-20">
        <h2 className="self-stretch text-5xl text-blue-gray-900 font-poppins text-center">
          Our Services
        </h2>
        <div className="flex w-[1058px] pb-7 justify-between gap-22">
          <div className="inline-flex flex-col gap-2 h-[108px] max-w-[173.3px] self-stretch  justify-center items-center flex-[1_0_0] ">
            <div
              className="flex w-[64px] h-[64px] p-3 justify-center items-center shrink-0 border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]
            "
            >
              <Server
                color="#FFFB47"
                title="server"
                height="40px"
                width="40px"
              />
            </div>

            <p className="flex-[1_0_0] text-center text-blue-gray-900 font-courier text-xl">
              Profitable
            </p>
          </div>

          <div className="inline-flex flex-col gap-2 h-[108px] max-w-[173.3px] self-stretch  justify-center items-center flex-[1_0_0] ">
            <div
              className="flex w-[64px] h-[64px] p-3 justify-center items-center shrink-0 border border-black bg-contrast-yellow shadow-[2px_3px_0px_0px_#000]
            "
            >
              <Trophy
                color="#9747FF"
                title="server"
                height="40px"
                width="40px"
              />
            </div>

            <p className="flex-[1_0_0] text-center text-blue-gray-900 font-courier text-xl">
              Top artists
            </p>
          </div>

          <div className="inline-flex flex-col gap-2 h-[108px] max-w-[173.3px] self-stretch  justify-center items-center flex-[1_0_0] ">
            <div
              className="flex w-[64px] h-[64px] p-3 justify-center items-center shrink-0 border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]
            "
            >
              <ShieldCheckmark
                color="#FFFB47"
                title="server"
                height="40px"
                width="40px"
              />
            </div>

            <p className="flex-[1_0_0] text-center text-blue-gray-900 font-courier text-xl">
              Secured
            </p>
          </div>

          <div className="inline-flex flex-col gap-2 h-[108px] max-w-[173.3px] self-stretch  justify-center items-center flex-[1_0_0] ">
            <div
              className="flex w-[64px] h-[64px] p-3 justify-center items-center shrink-0 border border-black bg-contrast-yellow shadow-[2px_3px_0px_0px_#000]
            "
            >
              <PieChart
                color="#9747FF"
                title="server"
                height="40px"
                width="40px"
              />
            </div>

            <p className="flex-[1_0_0] text-center text-blue-gray-900 font-courier text-xl">
              Good metrics
            </p>
          </div>

          <div className="inline-flex flex-col gap-2 h-[108px] max-w-[173.3px] self-stretch  justify-center items-center flex-[1_0_0] ">
            <div
              className="flex w-[64px] h-[64px] p-3 justify-center items-center shrink-0 border border-black bg-brand-purple shadow-[2px_3px_0px_0px_#000]
            "
            >
              <People
                color="#FFFB47"
                title="server"
                height="40px"
                width="40px"
              />
            </div>

            <p className="flex-[1_0_0] text-center text-blue-gray-900 font-courier text-xl">
              Collaborate
            </p>
          </div>
        </div>
        <Button variant="secondary">Drive in</Button>
      </div>
    </div>
  );
};

export default Services;
