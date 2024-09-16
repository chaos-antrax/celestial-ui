import React, { LabelHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode;
};

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label {...props} className={twMerge("mx-2 tracking-wider", className)}>
      {children}
    </label>
  );
};

export default Label;
