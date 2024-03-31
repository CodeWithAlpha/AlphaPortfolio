import { useEffect, useState } from "react";
import Header from "../components/Header";
import About from "../section/Homepage/About";
import Contact from "../section/Homepage/Contact";
import Home from "../section/Homepage/Home";
import Progress from "../section/Homepage/Progress";
import Projects from "../section/Homepage/Projects";
import Skills from "../section/Homepage/Skills";
import { useSettingContext } from "../theme/SettingContext";
import { Stack } from "@mui/material";
import { motion } from "framer-motion";

export default function HomePage() {
  const { themeMode } = useSettingContext();
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position

    setScroll(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (val: string) => {
    const section: Element | null = document.querySelector(`#${val}`);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Stack
        sx={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}
        component={motion.div}
        initial={{ y: -10 }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          type: "spring",
          stiffness: 120,
        }}
      >
        <Header
          backgroundColor={
            scroll > window.innerHeight
              ? themeMode == "light"
                ? "white"
                : "black"
              : "transparent"
          }
          scrollTo={scrollTo}
        />
      </Stack>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <Progress />
        <About />
      </section>
      <section id="skill">
        <Skills />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
