import React, { forwardRef } from "react";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, placeholder}, ref) => {
  return (
      <input
        className="border px-3 py-2 text-sm w-full"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        // autoFocus
        required
        ref={ref}
      />
    )
  }
)

// Menambahkan displayName untuk debugging
Input.displayName = "Input"

export default Input;
