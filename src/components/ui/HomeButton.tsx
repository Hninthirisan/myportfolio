"use client";

import Link from "next/link";
import { StepBack } from "lucide-react";
import React from "react";
import "@/style/glow-button.css";

export const HomeButton = () => {
  return (
    <Link href="/" passHref>
      <button className="glow-button p-2 px-4 flex items-center gap-2">
        <StepBack size={18} />
        <span className="sr-only">Back to Home</span>
      </button>
    </Link>
  );
};
