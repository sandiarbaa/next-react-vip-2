"use client";
import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  classname: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick = () => {},
  type = "button",
  classname,
}) => {
  return (
    <button
      className={`${classname} rounded-md px-3 py-2 text-white font-bold text-center`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
