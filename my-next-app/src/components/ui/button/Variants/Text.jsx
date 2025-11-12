"use client";

import React from "react";
import Elevated from "./variants/Elevated";
import Filled from "./variants/Filled";
import Outlined from "./variants/Outlined";
import Text from "./variants/Text";

const Button = ({ variant = "elevated", label, onClick }) => {
  switch (variant) {
    case "filled":
      return <Filled label={label} onClick={onClick} />;
    case "outlined":
      return <Outlined label={label} onClick={onClick} />;
    case "text":
      return <Text label={label} onClick={onClick} />;
    default:
      return <Elevated label={label} onClick={onClick} />;
  }
};

export default Button;
