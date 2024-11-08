import * as React from "react";

interface HamburgerIconProps extends React.SVGProps<SVGSVGElement> {
  color?: "white" | "black";
}

// HamburgerIcon component
const HamburgerIcon: React.FC<HamburgerIconProps & { isOpen: boolean }> = ({
  color = "black",
  isOpen,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    {...props}
    fill={color === "white" ? "#FFF" : "#000"} // This ensures the color stays consistent based on the `color` prop
  >
    <rect
      x="2"
      y="6"
      width="28"
      height="4"
      className={`origin-center transition-all duration-500 ease-in-out ${
        isOpen ? "translate-x-[2px] translate-y-[10px] rotate-45" : ""
      }`}
    />
    <rect
      x="2"
      y="14"
      width="28"
      height="4"
      className={`transition-opacity duration-500 ease-in-out ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    />
    <rect
      x="2"
      y="22"
      width="28"
      height="4"
      className={`origin-center transition-all duration-500 ease-in-out ${
        isOpen ? "translate-x-[2px] translate-y-[-6px] -rotate-45" : ""
      }`}
    />
  </svg>
);

export default HamburgerIcon;
