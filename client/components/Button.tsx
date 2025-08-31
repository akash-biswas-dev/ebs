import React, { ReactNode } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const Button = ({
  variant = "primary",
  disabled = false,
  loading = false,
  className = "",
  leftIcon=<></>,
  rightIcon=<></>,
  onClick = () => {},
  type = "button",
  href,
  children
}: {
  variant?: ButtonVarient;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
  type?: ButtonType;
  children: string;
  href?:string;
}) => {
  // Base styles
  const baseClasses =
    "cursor-pointer inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant styles
  const variantClasses: {
    primary: string;
    secondary: string;
    danger: string;
    warning: string;
    success: string;
    ghost: string;
  } = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-500",
    secondary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    ghost: "text-blue-900 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100",
  };

  // Combine classes
  const buttonClasses = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

    if(href){
      return (
        <Link
          className={buttonClasses}
          href={href}
        >
          {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
        </Link>
      );
    }

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
    
  );
};

export type ButtonVarient =
  | "primary"
  | "secondary"
  | "danger"
  | "warning"
  | "success"
  | "ghost";

export type ButtonType = "submit" | "reset" | "button";


export default Button;