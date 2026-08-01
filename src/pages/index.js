import Clouds from "../components/effects/Clouds";
import Stars from "../components/effects/Stars";
import Waves from "../components/effects/Waves";
import Right from "../components/right/Right";
import Moon from "../components/effects/Moon";
import Left from "../components/left/Left";
import { useState } from "react";
import Head from "next/head";
import logo from "/public/logo.png";

const Home = () => {
  const [section, setSection] = useState("work");

  return (
    <div id="homescreen" className="relative">
      <Head>
        <title>Helmi Febri Nandani: Senior AI Product Specialist, Jakarta</title>
        <meta
          name="description"
          content="Senior AI Product Specialist in Jakarta. I build production AI: RAG platforms on self-hosted infrastructure, agentic tools, and automations that run a company's back office."
        />
        <meta
          property="og:title"
          content="Helmi Febri Nandani: Senior AI Product Specialist, Jakarta"
        />
        <meta
          property="og:description"
          content="I build production AI: RAG platforms, agentic tools, and back-office automation. Jakarta, Indonesia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://helmifnandani.github.io" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Helmi Febri Nandani: Senior AI Product Specialist, Jakarta"
        />
        <meta
          name="twitter:description"
          content="I build production AI: RAG platforms, agentic tools, and back-office automation. Jakarta, Indonesia."
        />
        <link rel="icon" href={logo.src} />
      </Head>
      <Moon />
      <Clouds />
      <Stars />
      <Waves />
      <div className="w-full h-full relative p-6 gap-6 lg:gap-16 lg:p-16 grid grid-cols-1 lg:grid-cols-2">
        <Left section={section} />
        <Right setSection={setSection} />
      </div>
    </div>
  );
};

export default Home;
