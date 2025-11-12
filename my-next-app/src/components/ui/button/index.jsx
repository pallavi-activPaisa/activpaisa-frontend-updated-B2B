"use client";
import React from "react";
import Elevated from "./variants/Elevated";
import Filled from "./variants/Filled";
import Outlined from "./variants/Outlined";
import Text from "./variants/Text";

const Button = ({ variant = "elevated", label, ...props }) => {
  switch (variant) {
    case "filled":
      return <Filled label={label} {...props} />;
    case "outlined":
      return <Outlined label={label} {...props} />;
    case "text":
      return <Text label={label} {...props} />;
    default:
      return <Elevated label={label} {...props} />;
  }
};

export default Button;
