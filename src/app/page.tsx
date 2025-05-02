import { Section1 } from "@/components/sections/Section1";
import { Section2 } from "@/components/sections/Section2";
import Section4 from "@/components/sections/Section4";
import FeaturesSection from "@/components/sections/FeaturesSection";
// import { Section3 } from "@/components/sections/Section3";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <Section1 />
        <FeaturesSection />
        <Section2 />
        <Section4 />
        {/* <Section3 ref={section3Ref} /> */}
      </div>
    </main>
  );
}
