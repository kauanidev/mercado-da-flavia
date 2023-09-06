import clsx from "clsx";
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div>
      {label && (
        <label className="text-xs text-gray-200 mb-2 block">{label}</label>
      )}
      <input
        {...props}
        className={clsx(
          "bg-gray-500 h-10 w-full border border-gray-300 rounded-md focus:outline-none text-gray-100 text-sm px-3 focus:border-purple-light transition-colors",
          className
        )}
      />
    </div>
  );
};
