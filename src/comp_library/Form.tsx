import React, { FormHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};

const Form = ({ children, className, ...props }: FormProps) => {
  return (
    <form
      {...props}
      className={twMerge(
        "bg-neutral-200 shadow-2xl rounded-xl p-5 min-w-fit min-h-fit m-2",
        className
      )}
    >
      {children}
    </form>
  );
};

export default Form;
