"use client";
import React from "react";
import clsx from "clsx";
import "./Button.css"; // local CSS

const Button = ({
  label,
  variant = "primary",
  size = "small", // default size small
  isLoading = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "button-base00",
        `button-${variant}`, // ✅ FIXED
        `button-${size}`,    // ✅ FIXED (dynamic size)
        className
      )}
      {...props}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;
