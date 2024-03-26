import About from "../section/Homepage/About";
import Home from "../section/Homepage/Home";
import Progress from "../section/Homepage/Progress";
import Projects from "../section/Homepage/Projects";
import Skills from "../section/Homepage/Skills";

export default function HomePage() {
  return (
    <>
      <Home />
      <Progress />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
