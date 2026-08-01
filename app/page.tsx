import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Skeleton from "@/components/Skeleton";

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <Skeleton />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <Skeleton />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <Skeleton />,
});
const Education = dynamic(() => import("@/components/Education"), {
  loading: () => <Skeleton />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <Skeleton />,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
