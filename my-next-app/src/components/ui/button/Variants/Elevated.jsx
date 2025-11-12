import React from "react";
import { buttonTokens } from "../config";
import Content from "../Content";
import StateLayer from "../StateLayer";

const Elevated = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex justify-center items-center transition-all"
      style={{
        padding: `${buttonTokens.paddingY} ${buttonTokens.paddingX}`,
        gap: buttonTokens.gap,
        borderRadius: buttonTokens.radius,
        border: buttonTokens.border,
        background: buttonTokens.background,
        boxShadow: buttonTokens.boxShadow,
      }}
    >
      <StateLayer />
      <Content label={label} />
    </button>
  );
};

export default Elevated;
