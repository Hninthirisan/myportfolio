"use client";

import React from "react";
import "@/style/glow-button.css";

export const GlowButton = ({
  children = "Button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{children}</button>;
};
