"use client";
import React from "react";

export const SectionDivider = () => (
  <div className="relative my-16 flex items-center justify-center w-full">
    <div className="absolute w-full border-t border-purple-500 opacity-30" />
    <span className="relative z-10 px-4 bg-transparent text-purple-300 text-sm font-semibold uppercase tracking-widest">
      ● ● ●
    </span>
  </div>
);
