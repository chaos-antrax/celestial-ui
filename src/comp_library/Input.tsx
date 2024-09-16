import React, { InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  //   children: ReactNode;
};

const Input = ({ children, className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={twMerge(
        "bg-white w-full px-4 py-2 tracking-wider active:border-0 rounded-full mt-2 mb-4",
        className
      )}
    ></input>
  );
};

export default Input;
