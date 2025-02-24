import React, { ReactNode } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
