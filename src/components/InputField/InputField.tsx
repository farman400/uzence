import { useState } from "react";
import clsx from "clsx";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
  className?: string;
}

export function InputField({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
  className,
}: InputFieldProps) {
  const [internalValue, setInternalValue] = useState(value ?? "");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInternalValue("");
    onChange?.({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const inputSize = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  }[size];

  const variantStyles = {
    filled: "bg-gray-100 border border-transparent focus:border-blue-500",
    outlined: "border border-gray-300 focus:border-blue-500",
    ghost: "border-none bg-transparent focus:ring-2 focus:ring-blue-500",
  }[variant];

  return (
    <div className={clsx("flex flex-col gap-1 w-full", className)}>
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}

      <div className="relative flex items-center">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={clsx(
            "w-full rounded-md focus:outline-none",
            inputSize,
            variantStyles,
            disabled && "bg-gray-100 text-gray-400 cursor-not-allowed",
            invalid && "border-red-500 focus:border-red-500"
          )}
        />

        {/* Clear button */}
        {clearable && internalValue && !disabled && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-8 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        )}

        {/* Password toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
      </div>

      {/* Helper/Error text */}
      {invalid && errorMessage ? (
        <p className="text-xs text-red-500">{errorMessage}</p>
      ) : (
        helperText && <p className="text-xs text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
