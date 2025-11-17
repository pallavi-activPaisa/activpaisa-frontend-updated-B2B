// "use client";
// import React from "react";
// import Image from "next/image";
// import styles from "./BaseButton.module.css";

// const BaseButton = ({
//   label,
//   icon = "/Icons/arrow-down.svg", // ✅ use public path, not variable
//   iconPosition = "right",
//   onClick,
// }) => {
//   return (
//     <button className={styles.baseButton} onClick={onClick}>
//       {/* Icon on left (optional) */}
//       {icon && iconPosition === "left" && (
//         <Image
//           src={icon}
//           alt={`${label}-icon`}
//           width={20}
//           height={20}
//           className={styles.iconLeft}
//         />
//       )}

//       <span>{label}</span>

//       {/* Icon on right (optional) */}
//       {icon && iconPosition === "right" && (
//         <Image
//           src={icon}
//           alt={`${label}-icon`}
//           width={20}
//           height={20}
//           className={styles.iconRight}
//         />
//       )}
//     </button>
//   );
// };

// export default BaseButton;

"use client";
import React from "react";
import Image from "next/image";
import styles from "./BaseButton.module.css";

const BaseButton = ({ label, icon, iconPosition = "right", onClick }) => {
  return (
    <button className={styles.baseButton} onClick={onClick}>
      {/* Icon on left (optional) */}
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

      {/* Icon on right (optional) */}
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
