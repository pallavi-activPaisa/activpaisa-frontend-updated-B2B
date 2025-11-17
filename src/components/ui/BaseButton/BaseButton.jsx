"use client";
import React from "react";
import Image from "next/image";
import styles from "./BaseButton.module.css";

const BaseButton = ({
  label,
  icon,
  iconPosition = "right",
  size = "small", // small | large
  onClick,
}) => {
  return (
    <button
      className={`${styles.baseButton} ${
        size === "small" ? styles.small : styles.large
      }`}
      onClick={onClick}
    >
      {/* Icon on the LEFT */}
      {icon && iconPosition === "left" && (
        <Image
          src={icon}
          alt={`${label}-icon`}
          width={20}
          height={20}
          className={styles.iconLeft}
        />
      )}

      <span>{label}</span>

      {/* Icon on the RIGHT */}
      {icon && iconPosition === "right" && (
        <Image
          src={icon}
          alt={`${label}-icon`}
          width={20}
          height={20}
          className={styles.iconRight}
        />
      )}
    </button>
  );
};

export default BaseButton;
