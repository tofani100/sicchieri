import React from "react";

export function Button({ children, className = "", variant = "default", size = "default", ...props }) {
  const baseStyle = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg focus:ring-blue-500",
    secondary: "bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg focus:ring-orange-400",
    outline: "border-2 border-slate-300 bg-transparent hover:bg-slate-100 text-slate-800 focus:ring-slate-400",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-300",
    link: "text-blue-600 underline-offset-4 hover:underline focus:ring-blue-400"
  };

  const sizes = {
    default: "h-11 py-2.5 px-5 text-sm",
    sm: "h-9 px-3.5 text-xs",
    lg: "h-13 px-8 text-base",
    icon: "h-10 w-10"
  };

  const chosenVariant = variants[variant] || variants.default;
  const chosenSize = sizes[size] || sizes.default;

  return (
    <button
      className={baseStyle + " " + chosenVariant + " " + chosenSize + " " + className}
      {...props}
    >
      {children}
    </button>
  );
}
