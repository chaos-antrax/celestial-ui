import { ButtonHTMLAttributes, ReactNode } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      id="td1"
      className={twMerge(
        "bg-black px-4 py-2 rounded-full min-w-fit tracking-wider font-semibold text-white my-2",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
