import Intro from "~/components/Intro";
import SectionDivider from "~/components/SectionDivider";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
    </main>
  );
}
