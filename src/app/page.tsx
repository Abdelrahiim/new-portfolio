import About from "~/components/About";
import Intro from "~/components/Intro";
import Projects from "~/components/Projects";
import SectionDivider from "~/components/SectionDivider";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects/>
    </main>
  );
}
