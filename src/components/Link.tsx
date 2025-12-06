import React from "react";

type Variant = "default" | "button" | "outline" | "underline";

interface Props {
  href?: string;
  variant?: Variant;
  className?: string;
  target?: string; 
  children: React.ReactNode;
}

const Link: React.FC<Props> = ({
  href = "#",
  variant = "default",
  className = "",
  target,
  children,
}) => {
  const base = "relative pr-6 group inline-flex items-center font-semibold transition rounded-lg";

  const variants: Record<Variant, string> = {
    default: "text-blue-600 hover:text-blue-700",
    button:
      "bg-[#37A4B3] text-white px-5 py-2 border border-transparent hover:bg-transparent hover:text-[#313181] hover:bg-transparent hover:border-[#313181] transition",
    outline:
      "border border-blue-600 text-blue-600 px-5 py-2 hover:bg-blue-600 hover:text-white",
    underline: "text-blue-600 underline hover:text-blue-700",
  };

  return (
    <a href={href} target={target} className={`${base} ${variants[variant]} ${className}`}>
      <span className="mr-0 group-hover:mr-2 transition">{children}</span>

      {/* Flèche SVG */}
      <img
        className="absolute right-2 w-0 h-4 opacity-0 -translate-x-1 group-hover:w-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
        src="/Arrow_Right_SM.svg"
      />
    </a>
  );
};

export default Link;