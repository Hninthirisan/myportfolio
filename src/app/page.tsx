"use client";

import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { FlipText } from "@/components/magicui/flip-text";
import { SpinningText } from "@/components/magicui/spinning-text";
import Link from "next/link";
import FlickerText from "@/components/ui/FlickerText";
import { Vortex } from "@/components/ui/vortex";
import { GlowButton } from "@/components/ui/GlowButton";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Vortex className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <div className="relative h-screen w-full flex flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="-translate-y-4 scale-90">
              <FlickerText />
            </div>
            <div className="translate-y-4">
              <FlipText className="text-xl md:text-4xl text-fuchsia-200">
                HNIN THIRI SAN
              </FlipText>
            </div>
          </div>

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            <Link href="/detail">
              <GlowButton>Get to know me more!</GlowButton>
            </Link>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
