"use client";

import React from "react";

interface CommonButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function CommonButton({
  label,
  onClick,
  className = "",
  type = "button",
}: CommonButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#1E9BB0] hover:bg-[#1a8a9d] transition
        text-white
        px-3 sm:px-4
        py-2 sm:py-3
        text-[12px] sm:text-[17px]
        font-bold
        mb-4 sm:mb-6 lg:mb-8
        hidden md:block
        ${className}`}
    >
      {label}
    </button>
  );
}
