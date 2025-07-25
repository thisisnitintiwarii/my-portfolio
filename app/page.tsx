import Education from "@/components/Education";
import Intro from "@/components/Intro";
import { Meteors } from "@/components/magicui/meteors";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

import Image from "next/image";
import CustomDock from "@/components/CustomDock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-7/12 sm:w-full mx-auto">
      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10" />
      <CustomDock />

      <Meteors />
      <Intro />
      {/* <WorkExperience/> */}
      <Education />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  );
}
