import { Eye, EyeOff } from "lucide-react";
import { ReactNode, useState } from "react";

const Input = ({
  inputType = "text",
  label = "input",
  value,
  onChange,
  errors,
  placeHolder,
  inputIcon,
}: {
  inputType?: InputType;
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  errors?: string;
  placeHolder?: string;
  inputIcon?: ReactNode;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const iconClassName =
    "absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer";
  const inputBaseClassName =
    "w-full px-3 py-2 pr-10 border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors";
  return (
    <div>
      <label
        htmlFor="password"
        className="block text-sm font-medium text-slate-900 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {inputType === "password" ? (
          <>
            <input
              type={showPassword ? "text" : "password"}
              name={label.toLowerCase().replaceAll(" ", "_")}
              value={value && value}
              onChange={(eve) => onChange && onChange(eve.target.value)}
              className={`${inputBaseClassName} ${
                errors
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-slate-300"
              }`}
              placeholder={placeHolder}
            />
            <span onClick={togglePasswordVisibility} className={iconClassName}>
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </span>
          </>
        ) : (
          <>
            <input
              type={inputType}
              name={label.toLowerCase().replaceAll(" ", "_")}
              value={value && value}
              onChange={(eve) => onChange && onChange(eve.target.value)}
              className={`w-full px-3 py-2 pr-10 border rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-slate-300"
              }`}
              placeholder={placeHolder}
            />
            {inputIcon && <span className={iconClassName}>{inputIcon}</span>}
          </>
        )}
      </div>
      {errors && <p className="mt-1 text-sm text-red-600">{errors}</p>}
    </div>
  );
};

export default Input;

export type InputType = "email" | "date" | "text" | "password";
