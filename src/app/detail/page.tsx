"use client";
import { ModeToggle } from "@/components/ui/modetoggle";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { useState } from "react";
import { Lens } from "@/components/ui/lens";
import { TypingAnimate } from "@/components/magicui/typing-animation";
import { BubbleText } from "@/components/ui/BubbleTextNoCSS";
import Footer from "@/components/ui/Footer";
import FocusAreaSection from "@/components/ui/FocusAreaSection";
import { HomeButton } from "@/components/ui/HomeButton";
import { ProjectSection } from "@/components/ui/ProjectSection";
import { SectionDivider } from "@/components/ui/SectionDivider";
import ContactSection from "@/components/ui/ContactSection";

export default function Home() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="h-full ">
      <GridBackgroundDemo>
        <div className="min-h-screen w-full">
          <TracingBeam className="px-6">
            <div className="flex flex-col items-center justify-start min-h-screen w-full px-6 pt-12 sm:pt-16 gap-12">
              <div className="self-end">
                <HomeButton />
              </div>
              <div className="flex flex-col items-center justify-center gap-20">
                <TypingAnimate className="text-4xl">ABOUT ME</TypingAnimate>
                <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
                  <div className="w-full">
                    <BubbleText />
                  </div>
                  <div className="flex justify-center items-center">
                    <Lens hovering={hovering} setHovering={setHovering}>
                      <img
                        src="/violet.jpg"
                        alt="image"
                        width={700}
                        height={500}
                        className="rounded-2xl w-full max-w-[300px] h-auto object-cover aspect-square border-10 border-[#c18dd9]"
                      />
                    </Lens>
                  </div>
                </div>
              </div>
              <SectionDivider />
              <div className="flex flex-col items-center justify-center gap-5">
                <TypingAnimate className="text-4xl">FOCUS AREAS</TypingAnimate>
                <FocusAreaSection />
              </div>
              <SectionDivider />
              <div className="flex flex-col items-center justify-center gap-5">
                <TypingAnimate className="text-4xl">PROJECTS</TypingAnimate>
                <ProjectSection />
              </div>
              <SectionDivider />
              <div className="flex flex-col items-center justify-center gap-5">
                <TypingAnimate className="text-4xl">CONTACT</TypingAnimate>
                <ContactSection />
              </div>
              
              <div className="px-6 pb-6 text-xl">
                <Footer />
              </div>
            </div>
          </TracingBeam>
        </div>
      </GridBackgroundDemo>
    </div>
  );
}
