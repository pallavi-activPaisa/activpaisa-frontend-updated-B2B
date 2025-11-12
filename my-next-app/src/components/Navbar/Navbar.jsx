import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div
     className='h-[4.5rem]  w-full pt-[16px] pb-[16px] px-[32px] flex items-center'
     style={{
        backgroundColor : "var(--ui-color-surface-container-neutral-neutral-00)"
     }}
     >
        {/* logo */}
      <Image src="/Brand/logo.svg" alt="Logo" width={138} height={27}></Image>

      {/* nav options */}
        <div className='ml-[2.5rem] flex items-center text-black '>
            <span
             style={{
                color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",

                 /* label/l-2/medium */
                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                fontSize: "var(--typogrraphy-label-l-2-size, 0.875rem)",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "var(--typogrraphy-label-l-2-line-height, 1rem)", /* 114.286% */
                letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                padding : "0.5rem 1rem",
                }}>Our Offerings 
                <Image src="/Icons/arrow-down.svg" alt="arrow-down" width={20} height={20} className='inline-block ml-[4px]'></Image>
                </span>
            <span
             style={{
                   color: "var(--ui-color-states-highlighted-primary-1)",

                 /* label/l-2/medium */
                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                fontSize: "var(--typogrraphy-label-l-2-size, 0.875rem)",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "var(--typogrraphy-label-l-2-line-height, 1rem)", /* 114.286% */
                letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                  padding : "0.5rem 1rem",
                }}>Check your Free CIBIL Score</span>
            <span
             style={{
                  color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",

                 /* label/l-2/medium */
                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                fontSize: "var(--typogrraphy-label-l-2-size, 0.875rem)",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "var(--typogrraphy-label-l-2-line-height, 1rem)", /* 114.286% */
                letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                  padding : "0.5rem 1rem",
                }}>About Us</span>
            <span
             style={{
                  color: "var(--ui-color-on-surface-on-neutral-00---1, #374151)",

                 /* label/l-2/medium */
                fontFamily: "var(--typogrraphy-label-inter-font-family, inter)",
                fontSize: "var(--typogrraphy-label-l-2-size, 0.875rem)",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "var(--typogrraphy-label-l-2-line-height, 1rem)", /* 114.286% */
                letterSpacing: "var(--typogrraphy-label-letter-spacing, 0)",
                  padding : "0.5rem 1rem",
                }}>Contact Us</span>
            
            
        </div>
    </div>
  )
}

export default Navbar
