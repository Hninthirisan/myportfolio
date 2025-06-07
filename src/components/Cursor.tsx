"use client";

import Script from "next/script";

export default function Cursor() {
  return (
    <>
      {/* ▼ SVG filter (zero size so it’s invisible) */}
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* ▼ Cursor root container */}
      <div id="cursor" className="Cursor" />

      {/* ▼ GSAP (TweenMax) CDN, then your untouched code */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/cursor.js" strategy="lazyOnload" />
    </>
  );
}
