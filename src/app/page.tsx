"use client";

import { useRef } from "react";
import { Header } from "@/components/Header";
import { Section1 } from "@/components/sections/Section1";
import { Section2 } from "@/components/sections/Section2";
import { Section3 } from "@/components/sections/Section3";

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: 1 | 2 | 3) => {
    const refs = {
      1: section1Ref,
      2: section2Ref,
      3: section3Ref,
    } as const;
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Header onNavigate={handleNavigate} />
      <div className="flex flex-col">
        <Section1 ref={section1Ref} />
        <Section2 ref={section2Ref} />
        <Section3 ref={section3Ref} />
      </div>
    </main>
  );
}
