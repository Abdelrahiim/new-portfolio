import About from "~/components/About";
import Contacts from "~/components/Contacts";
import Experience from "~/components/Experience";
import Intro from "~/components/Intro";
import Projects from "~/components/Projects";
import SectionDivider from "~/components/SectionDivider";
import Skills from "~/components/Skills";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects/>
      <Skills/>
      <SectionDivider />
      <Experience/>
      <Contacts/>
    </main>
  );
}
