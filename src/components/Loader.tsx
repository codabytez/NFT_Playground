import { FC } from "react";
import { motion } from "framer-motion";

const Loader: FC = () => {
  const rectVariants = {
    up: { y: "-10px" },
    middle: { y: "0px" },
    down: { y: "10px" },
  };

  const sideRectVariants = {
    up: { x: "14px" },
    middle: { x: "0px" },
    down: { x: "14px" },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <motion.rect
        x="34"
        y="20"
        width="8"
        height="8"
        fill="#D9D9D9"
        variants={sideRectVariants}
        animate={{ x: ["0px", "-14px", "0px", "-14px"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.rect
        x="6"
        y="20"
        width="8"
        height="8"
        fill="#D9D9D9"
        variants={sideRectVariants}
        animate={{ x: ["0px", "14px", "0px", "14px"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.rect
        x="20"
        y="20"
        width="8"
        height="8"
        fill="#212121"
        variants={rectVariants}
        animate={{ y: ["-10px", "0px", "10px", "0px"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default Loader;
