import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

export default function Work({ setSection }) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("work");
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="work">
      <h2 className="font-bold text-3xl mb-2">Work</h2>

      <Card>
        <h3 className="font-bold text-2xl">Senior AI Product Specialist</h3>
        <p className="font-light text-white/80">
          <a
            href="https://leverategroup.asia/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            Leverate Group
          </a>{" "}
          • Full-Time • Mar 2025 - Present
        </p>
        <p className="font-light mb-4 text-white/80">Jakarta</p>
        <p className="font-light leading-7 mb-4">
          Hired as the first and only AI person at a 100+ employee agency
          with no AI department. Built the function from scratch: the
          roadmap, the products, the team, and the internal case for why any
          of it mattered. Now lead a four-person AI team reporting directly
          to the COO.
        </p>
        <p className="font-light leading-7 mb-2">What I have shipped here:</p>
        <ul className="ms-4 font-light leading-7 list-disc">
          <li className="mb-2">
            Took Brandmind ID, an AI social strategy platform for Indonesian
            brands, from zero to a live closed beta: retrieval-augmented
            generation over a self-hosted pgvector knowledge base, running on
            infrastructure I provisioned and maintain.
          </li>
          <li className="mb-2">
            Built an agentic voice sales trainer for a global FMCG client.
            Sales reps practice against an AI interviewer that scores them
            automatically, replacing a process that used to need a human
            trainer in the room.
          </li>
          <li className="mb-2">
            Automated back-office operations company-wide. n8n workflows now
            handle attendance and payroll administration for the People and
            Finance teams across 100+ employees.
          </li>
          <li className="mb-2">
            Built and delivered paid AI workshops and client adoption
            programs, including a 2026 curriculum developed with an
            executive education partner.
          </li>
          <li>
            Act as the translation layer between engineers and executives,
            managing expectations in both directions so AI is neither
            oversold nor quietly underestimated.
          </li>
        </ul>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl">Front End Developer</h3>
        <p className="font-light text-white/80">
          <a
            href="https://www.isellercommerce.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            iSeller
          </a>{" "}
          • Full-Time • Sep 2021 - Aug 2024
        </p>
        <p className="font-light mb-4 text-white/80">North Jakarta</p>
        <p className="font-light leading-7">
          Built responsive storefronts and web applications on the iSeller
          commerce platform, working alongside the backend team on
          integration, supporting clients through bugfixes and feature
          requests, and leading a UI/UX revamp of the company&apos;s own
          marketing site and web app. Client work spanned F&amp;B and retail
          brands including Christin Wu, JJ Royal Coffee, Bisou, Bandar
          Djakarta, Hop Hop, Mama Roz, Tokyu Dorinku, and Mr Milk Co, plus
          the Livin&apos; by Mandiri banking integration.
        </p>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl">Software Engineer</h3>
        <p className="font-light text-white/80">
          PT Sahabat Safari Semesta • Full-Time • Jan 2019 — Jul 2020
        </p>
        <p className="font-light mb-4 text-white/80">South Jakarta</p>

        <p className="font-light leading-7">
          Develop ERP Sytem for both internal and work partner. Design UI/UX for
          mobile based application for Umrah and Hajj
        </p>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl">Lead Software Developer</h3>

        <p className="font-light text-white/80">
          PT Biz Infosistem • Full-Time • May 2017 — Dec 2018
        </p>
        <p className="font-light mb-4 text-white/80">Cibubur</p>

        <p className="font-light leading-7">
          Develop ERP System that is tailored based on the client business
          model. Assisted and give support to client with about software issues
          and concerns.
        </p>
      </Card>
    </section>
  );
}
