import Link from "next/link";
import Links from "./Links";
import { TypeAnimation } from "react-type-animation";
import github from "/public/github.svg";
import google from "/public/google.svg";
import linkedin from "/public/linkedin.svg";

export default function Hero({ section }) {
  return (
    <div className="mb-6 sticky top-[7rem] mt-12 lg:mt-0">
      <h1 className="text-5xl lg:text-6xl leading-tight lg:leading-tight font-black">
        <TypeAnimation
          sequence={["Hi", 3000, "Hello", 3000, "Halo", 3000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: "inline-block" }}
        />
        <br />
        I&apos;m Helmi Febri Nandani<span className="text-brand">.</span>
      </h1>
      <div className="flex items-center justify-start my-8">
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://github.com/helmifnandani", "_blank");
            }}
            src={github.src}
          />
        </div>
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/helmifebrinandani/",
                "_blank"
              );
            }}
            src={linkedin.src}
          />
        </div>
        <div className="transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("mailto:helmifnandani@gmail.com");
            }}
            src={google.src}
            className="transition-opacity hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
      <div className="mb-8">
        <a
          href={`/resume.pdf`}
          download="helmifnandani.pdf"
          target="_blank"
          className="text-brand font-semibold hover:underline"
        >
          Download my Resume
        </a>
      </div>
      <p className="font-light leading-7 mb-4">
        Senior AI Product Specialist at{" "}
        <a
          href="https://leverategroup.asia/"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-brand hover:underline"
        >
          Leverate Group
        </a>
        , based in Jakarta. I build production AI: RAG platforms on
        self-hosted infrastructure, agentic tools, and the unglamorous
        automations that quietly run a company&apos;s back office.
      </p>
      <p className="font-light leading-7 mb-4">
        Nearly a decade of front-end engineering sits underneath all of it,
        which is why the AI I ship doesn&apos;t look like a rushed demo.
      </p>
      <p className="font-light leading-7">
        I also teach it: paid workshops, client adoption programs, and the
        work of translating what AI can actually do into something a
        non-technical executive can act on.
      </p>
      <Links section={section} />
    </div>
  );
}
