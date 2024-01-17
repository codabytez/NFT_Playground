import { FC } from "react";

const Button: FC<{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "art";
  size?: "xs" | "sm" | "md" | "lg";
}> = ({
  children,
  onClick,
  disabled = false,
  className = "",
  variant = "primary",
  size = "md",
}) => {
  const variantClass = {
    primary:
      "border-2 border-black bg-brand-purple text-white shadow-[2px_2px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:text-black hover:bg-contrast-yellow transition-all duration-300 ease-in-out active:shadow-none active:text-black active:bg-contrast-yellow",
    secondary:
      "bg-brand-purple text-white border border-[#121212] hover:bg-contrast-yellow hover:text-black transition-all duration-300 ease-in-out active:shadow-none active:text-white active:bg-[#121212] shadow-[2px_2px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000]",
    tertiary:
      "bg-white text-[#121212] border-2 border-[#121212] hover:bg-contrast-yellow hover:text-black transition-all duration-300 ease-in-out active:shadow-none active:text-white active:bg-[#121212] shadow-[2px_2px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000]",
    art: "bg-contrast-yellow text-black border border-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out active:shadow-none active:text-black active:bg-white shadow-[2px_2px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000]",
  };

  const sizeClass = {
    xs: "px-1 py-1 text-xs",
    sm: "p-2.5 gap-2.5 text-sm font-bold",
    md: "px-7 py-[12px] text-xl",
    lg: "px-7 py-[18px] text-lg",
  };

  return (
    <button
      className={`text-center font-courier ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
