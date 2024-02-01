import { FC } from "react";
import BurstStar from "./BurstStar";
import { motion } from "framer-motion";

const Strip: FC<{
  bg?: "purple" | "yellow";
  direction?: string;
}> = ({ bg = "purple", direction = "left" }) => {
  const stripVariants = {
    initial: {
      x: "0%",
    },
    animate: {
      x: direction === "left" ? "-100%" : "100%",
      transition: {
        x: {
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      className={`flex sm:py-6 select-none items-center ${
        bg === "purple" ? "bg-brand-purple" : "bg-contrast-yellow"
      } overflow-hidden`}
      variants={stripVariants}
    >
      <motion.div
        className="flex gap-8 sm:gap-12 justify-center items-center pl-8 sm:pl-12"
        variants={stripVariants}
        initial="initial"
        animate="animate"
      >
        <h3
          className={`font-bold ${
            bg === "purple" ? "text-contrast-yellow" : "text-brand-purple"
          } lining-nums tabular-nums font-poppins text-lg sm:text-[40px] sm:leading-[56px] uppercase`}
        >
          Creativity
        </h3>
        <BurstStar fill={bg === "purple" ? "#FFFB47" : "#9747FF"} />

        <h3
          className={`font-bold ${
            bg === "purple" ? "text-contrast-yellow" : "text-brand-purple"
          } lining-nums tabular-nums font-poppins text-lg sm:text-[40px] sm:leading-[56px] uppercase`}
        >
          Art
        </h3>
        <BurstStar fill={bg === "purple" ? "#FFFB47" : "#9747FF"} />

        <h3
          className={`font-bold ${
            bg === "purple" ? "text-contrast-yellow" : "text-brand-purple"
          } lining-nums tabular-nums font-poppins text-lg sm:text-[40px] sm:leading-[56px] uppercase`}
        >
          Profitable
        </h3>
        <BurstStar fill={bg === "purple" ? "#FFFB47" : "#9747FF"} />

        <h3
          className={`font-bold ${
            bg === "purple" ? "text-contrast-yellow" : "text-brand-purple"
          } lining-nums tabular-nums font-poppins text-lg sm:text-[40px] sm:leading-[56px] uppercase`}
        >
          Unique
        </h3>
        <BurstStar fill={bg === "purple" ? "#FFFB47" : "#9747FF"} />

        <h3
          className={`font-bold ${
            bg === "purple" ? "text-contrast-yellow" : "text-brand-purple"
          } lining-nums tabular-nums font-poppins text-lg sm:text-[40px] sm:leading-[56px] uppercase`}
        >
          Originals
        </h3>
        <BurstStar fill={bg === "purple" ? "#FFFB47" : "#9747FF"} />
      </motion.div>

      <motion.div
        className="flex gap-8 sm:gap-12 justify-center items-center pl-8 sm:pl-12"
        variants={stripVariants}
        initial="initial"
        animate="animate"
      >
        <h3
          className={`font-bold ${
            bg === "purple" ? "text-contrast-yellow" : "text-brand-purple"
          } lining-nums tabular-nums font-poppins text-lg sm:text-[40px] sm:leading-[56px] uppercase`}
        >
          Creativity
        </h3>
        <BurstStar fill={bg === "purple" ? "#FFFB47" : "#9747FF"} />

        <h3
          className={`font-bold ${
            bg === "purple" ? "text-contrast-yellow" : "text-brand-purple"
          } lining-nums tabular-nums font-poppins text-lg sm:text-[40px] sm:leading-[56px] uppercase`}
        >
          Art
        </h3>
        <BurstStar fill={bg === "purple" ? "#FFFB47" : "#9747FF"} />

        <h3
          className={`font-bold ${
            bg === "purple" ? "text-contrast-yellow" : "text-brand-purple"
          } lining-nums tabular-nums font-poppins text-lg sm:text-[40px] sm:leading-[56px] uppercase`}
        >
          Profitable
        </h3>
        <BurstStar fill={bg === "purple" ? "#FFFB47" : "#9747FF"} />

        <h3
          className={`font-bold ${
            bg === "purple" ? "text-contrast-yellow" : "text-brand-purple"
          } lining-nums tabular-nums font-poppins text-lg sm:text-[40px] sm:leading-[56px] uppercase`}
        >
          Unique
        </h3>
        <BurstStar fill={bg === "purple" ? "#FFFB47" : "#9747FF"} />

        <h3
          className={`font-bold ${
            bg === "purple" ? "text-contrast-yellow" : "text-brand-purple"
          } lining-nums tabular-nums font-poppins text-lg sm:text-[40px] sm:leading-[56px] uppercase`}
        >
          Originals
        </h3>
        <BurstStar fill={bg === "purple" ? "#FFFB47" : "#9747FF"} />
      </motion.div>
    </motion.div>
  );
};

export default Strip;
