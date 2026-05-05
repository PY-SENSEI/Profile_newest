import React from "react";

export function ContactButton() {
  const handleClick = () => {
    window.open("https://wa.me/918630321189", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="relative z-20 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95 cursor-pointer"
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      Contact Me
    </button>
  );
}

export function LiveProjectButton() {
  return (
    <button className="rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10">
      Live Project
    </button>
  );
}
