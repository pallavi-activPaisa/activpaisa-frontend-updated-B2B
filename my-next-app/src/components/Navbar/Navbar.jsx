// import React from "react";
// import Image from "next/image";
// // import Button from "@/components/UI/Button";
// import Button from "@/components/ui/button";

// const Navbar = () => {
//   return (
//     <div>
//       <div
//         className="h-[4.5rem]  w-full pt-[16px] pb-[16px] px-[32px] flex items-center"
//         style={{
//           backgroundColor:
//             "var(--ui-color-surface-container-neutral-neutral-00)",
//         }}
//       >
//         {/* logo */}
//         <Image src="/Brand/logo.svg" alt="Logo" width={138} height={27}></Image>

//         {/* nav options */}
//         <div className="ml-[2.5rem] flex items-center text-black ">
//           <span
//             style={{
//               color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",

//               /* label/l-2/medium */
//               fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
//               fontSize: "var(--typogrraphy-label-l-2-size, 0.875rem)",
//               fontStyle: "normal",
//               fontWeight: 500,
//               lineHeight:
//                 "var(--typogrraphy-label-l-2-line-height, 1rem)" /* 114.286% */,
//               letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
//               padding: "0.5rem 1rem",
//             }}
//           >
//             Our Offerings
//             <Image
//               src="/Icons/arrow-down.svg"
//               alt="arrow-down"
//               width={20}
//               height={20}
//               className="inline-block ml-[4px]"
//             ></Image>
//           </span>
//           <span
//             style={{
//               color: "var(--ui-color-states-highlighted-primary-1)",

//               /* label/l-2/medium */
//               fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
//               fontSize: "var(--typogrraphy-label-l-2-size, 0.875rem)",
//               fontStyle: "normal",
//               fontWeight: 600,
//               lineHeight:
//                 "var(--typogrraphy-label-l-2-line-height, 1rem)" /* 114.286% */,
//               letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
//               padding: "0.5rem 1rem",
//             }}
//           >
//             Check your Free CIBIL Score
//           </span>
//           <span
//             style={{
//               color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",

//               /* label/l-2/medium */
//               fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
//               fontSize: "var(--typogrraphy-label-l-2-size, 0.875rem)",
//               fontStyle: "normal",
//               fontWeight: 500,
//               lineHeight:
//                 "var(--typogrraphy-label-l-2-line-height, 1rem)" /* 114.286% */,
//               letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
//               padding: "0.5rem 1rem",
//             }}
//           >
//             About Us
//           </span>
//           <span
//             style={{
//               color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",

//               /* label/l-2/medium */
//               fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
//               fontSize: "var(--typogrraphy-label-l-2-size, 0.875rem)",
//               fontStyle: "normal",
//               fontWeight: 500,
//               lineHeight:
//                 "var(--typogrraphy-label-l-2-line-height, 1rem)" /* 114.286% */,
//               letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
//               padding: "0.5rem 1rem",
//             }}
//           >
//             Contact Us
//           </span>
//           <span>
//             <div className="p-8 flex gap-4">
//               <Button variant="elevated" label="Check Offers" />
//               <Button variant="outlined" label="Learn More" />
//               <Button variant="filled" label="Apply Now" />
//             </div>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import React from "react";
import Image from "next/image";

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
      <button
        style={{
          display: "flex",
          padding: "var(--spacing-sp-10, 0.625rem) var(--spacing-sp-16, 1rem)",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--spacing-sp-6, 0.375rem)",
          borderRadius: "var(--corner-radius-2xsmall, 0.5rem)",
          border:
            "var(--border-width-width-1, 1px) solid var(--ui-color-border-neutral-10, #E5E7EB)",
          background:
            "var(--ui-color-surface-container-neutral-neutral-00, #FFF)",
          boxShadow:
            "0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04)), 0 1px 2px 0 var(--effects-shadow-4, rgba(17, 24, 39, 0.04))",
        }}
      >
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
