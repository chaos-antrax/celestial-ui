import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonHTMLAttributes, ReactNode, FormHTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};
declare const Button: ({ children, className, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
    children: ReactNode;
};
declare const Form: ({ children, className, ...props }: FormProps) => react_jsx_runtime.JSX.Element;

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};
declare const Input: ({ children, className, ...props }: InputProps) => react_jsx_runtime.JSX.Element;

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    children: ReactNode;
};
declare const Label: ({ children, className, ...props }: LabelProps) => react_jsx_runtime.JSX.Element;

export { Button, Form, Input, Label };
