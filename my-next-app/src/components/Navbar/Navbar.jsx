"use client";
import React from "react";
import Image from "next/image";
import Button from "../ui/button/Button";
import BaseButton from "../ui/BaseButton/BaseButton";

const Navbar = () => {
  return (
    <nav
      className="h-[4.5rem] w-full pt-[16px] pb-[16px] px-[32px] flex items-center justify-between"
      style={{
        backgroundColor: "var(--ui-color-surface-container-neutral-neutral-00)",
      }}
    >
      {/* ✅ Logo Section */}
      <div className="flex items-center gap-10">
        <Image
          src="/Brand/logo.svg"
          alt="Logo"
          width={138}
          height={27}
          priority
        />

        {/* ✅ Nav Links */}
        <div className="flex items-center text-black gap-2">
          <span
            className="flex items-center"
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              lineHeight: "1rem",
              padding: "0.5rem 1rem",
            }}
          >
            Our Offerings
            <Image
              src="/Icons/arrow-down.svg"
              alt="arrow-down"
              width={20}
              height={20}
              className="inline-block ml-[4px]"
            />
          </span>

          <span
            style={{
              color: "var(--ui-color-states-highlighted-primary-1)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              lineHeight: "1rem",
              padding: "0.5rem 1rem",
            }}
          >
            Check your Free CIBIL Score
          </span>

          <span
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              lineHeight: "1rem",
              padding: "0.5rem 1rem",
            }}
          >
            About Us
          </span>

          <span
            style={{
              color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              lineHeight: "1rem",
              padding: "0.5rem 1rem",
            }}
          >
            Contact Us
          </span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "18px" }}>
        {/* <BaseButton label="Get Started" /> */}
        <BaseButton label="Get Started" iconPosition="right" />

        <Button label="Check Free Offers" />
      </div>
    </nav>
  );
};

export default Navbar;
