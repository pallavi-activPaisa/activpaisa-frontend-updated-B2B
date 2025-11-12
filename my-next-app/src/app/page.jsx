import React from 'react'

function Home() {
  return (
    <div className="h-48 w-full bg-amber-200 flex justify-center items-center gap-4">
      <button 
      style={{
        backgroundColor : "var(--ui-color-surface-container-brand-primary-30)",
        color : "var(--ui-color-typography-on-primary)",
        padding : "10px 20px",
      }}
      >click</button>
      
      <button 
      style={{
        backgroundColor : "var(--ui-color-surface-container-brand-primary-30)",
        color : "var(--ui-color-typography-on-primary)",
        padding : "10px 20px",
      }}
      >click</button>
    </div>
  )
}

export default Home
