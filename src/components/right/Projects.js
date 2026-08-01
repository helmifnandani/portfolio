import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";
import { useState } from "react";

export default function Projects({ setSection }) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("projects");
  }, [inView, setSection]);

  const renderTags = (tech) => {
    return (
      <div className="flex flex-wrap items-center justify-start -mb-2">
        {tech.map((tag) => {
          return (
            <span
              className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand"
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section ref={ref} className="mb-16" id="projects">
      <h2 className="font-bold text-3xl mb-2">Projects</h2>
      <p className="font-light leading-7 mb-6">
        AI systems first, then the web work. One or two engagements stay
        unnamed by client request; everything else is named directly.
      </p>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-1">
          <h3 className="font-bold text-2xl">Brandmind ID</h3>
          <a
            href="https://brandmindid.com/"
            target="_blank"
            rel="noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            brandmindid.com
          </a>
        </div>
        <p className="font-light text-white/60 text-sm mb-4">
          Live closed beta
        </p>
        <p className="font-light leading-7 mb-3">
          A brand&apos;s annual strategy usually takes weeks to produce, and
          it only reflects as much as the strategist remembers from a folder
          of documents nobody re-reads. I built a platform that actually
          reads a brand&apos;s documents and social reports, then generates
          the annual strategy, the monthly editorial calendar, and tactical
          campaigns from them.
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            Retrieval-augmented generation over a self-hosted PostgreSQL and
            pgvector knowledge base, so answers are grounded in the
            client&apos;s material rather than invented
          </li>
          <li>
            Orchestrated with LangChain against GPT-5 via Replicate, with a
            conversational interface built to push back on brand ideas
            rather than agree with them
          </li>
          <li>
            Competitive intelligence pulled from the RivalIQ API and folded
            into strategy output
          </li>
          <li>
            Migrated off managed hosting onto self-hosted infrastructure I
            provisioned and maintain: Dokploy, Postgres 16, Redis, valid TLS
            across frontend and API
          </li>
        </ul>
        {renderTags([
          "Next.js 15",
          "TypeScript",
          "LangChain",
          "pgvector",
          "RAG",
          "Drizzle",
          "Redis",
          "Dokploy",
          "Tailwind",
        ])}
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-1">Agentic Sales Trainer</h3>
        <p className="font-light text-white/60 text-sm mb-4">
          Client work, available on request
        </p>
        <p className="font-light leading-7 mb-3">
          Sales reps only get better by practicing, and practicing needs a
          trainer in the room, which doesn&apos;t scale across a global
          salesforce. So I built an AI interviewer that plays the buyer
          instead: available any time, in any market, scoring every session
          automatically.
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            Sales reps hold spoken practice conversations with an AI that
            stays in character as a retail buyer
          </li>
          <li>
            Sessions are scored against the brand&apos;s own selling
            framework, so the feedback matches how the company actually
            evaluates its people
          </li>
          <li>
            An agentic session engine handles multi-turn conversation state,
            scenario branching, and rubric evaluation
          </li>
        </ul>
        {renderTags(["Agents", "Voice AI", "LLM Evaluation", "Next.js"])}
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-1">Creative Velocity</h3>
        <p className="font-light text-white/60 text-sm mb-4">In build</p>
        <p className="font-light leading-7 mb-3">
          Ad creative gets judged after the budget is already spent, and the
          lesson from it rarely makes it into the next campaign. Every
          campaign starts from opinion again. This closes the loop, so
          performance actually feeds generation.
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            A creative ships, n8n pulls performance data from the Meta Ads
            API, and an AI reads what actually worked before shaping the
            next creative
          </li>
          <li>
            Turns ad creative from a series of one-off guesses into a system
            that compounds
          </li>
        </ul>
        {renderTags(["n8n", "Meta Ads API", "LLM", "Automation"])}
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-1">Back-Office Automation</h3>
        <p className="font-light text-white/60 text-sm mb-4">
          Internal, 100+ employees
        </p>
        <p className="font-light leading-7 mb-3">
          Attendance and payroll administration for a 100+ person company
          was manual spreadsheet work, every month, indefinitely. I built
          workflows that do it instead.
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            Handles attendance for the People team and payslip generation
            for Finance
          </li>
          <li>
            A separate lead-enrichment pipeline tracks its own progress, so
            a failed run never re-spends API credits on contacts it already
            processed
          </li>
          <li>
            Unglamorous by design: this is the category of AI work that
            pays for itself fastest
          </li>
        </ul>
        {renderTags(["n8n", "Automation", "Python", "API Integration"])}
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-1">
          <h3 className="font-bold text-2xl">Fracture</h3>
          <a
            href="https://fracture-arc.pages.dev/"
            target="_blank"
            rel="noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            fracture-arc.pages.dev
          </a>
        </div>
        <p className="font-light text-white/60 text-sm mb-4">Live</p>
        <p className="font-light leading-7">
          I broke my foot on 17 March 2026: gravity, stairs, a metal pin in
          the metatarsal. Then I answered the same seven questions about it,
          every day, for weeks. So I built a site, and now I send the link.
          A bilingual FAQ covering the incident timeline, the surgery, the
          recovery estimate, and an optional X-ray viewer for people who ask
          and then regret asking. Deadpan throughout, structured like a
          medical dashboard, built during recovery with one working leg.
        </p>
        <div className="mt-3">
          {renderTags(["Next.js", "Tailwind", "Cloudflare Pages"])}
        </div>
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-1">
          <h3 className="font-bold text-2xl">ANUGERAH</h3>
          <a
            href="https://komikasetengahpendeta.pages.dev/"
            target="_blank"
            rel="noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            komikasetengahpendeta.pages.dev
          </a>
        </div>
        <p className="font-light text-white/60 text-sm mb-4">Live</p>
        <p className="font-light leading-7">
          A live comedy special needs somewhere to send an audience before
          tickets exist, so I shipped a single-page event site fast on
          Cloudflare Pages. Promotional site for ANUGERAH, a stand-up
          special staged in Cibitung in July 2026.
        </p>
        <div className="mt-3">
          {renderTags(["Next.js", "Tailwind", "Cloudflare Pages"])}
        </div>
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-1">
          <h3 className="font-bold text-2xl">Hout Cutlery</h3>
          <a
            href="https://hout-cutlery.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            hout-cutlery.vercel.app
          </a>
        </div>
        <p className="font-light text-white/60 text-sm mb-4">Live</p>
        <p className="font-light leading-7 mb-3">
          Small makers usually end up with a storefront or an inventory
          system, rarely both, and almost never in sync. I built both,
          sharing one source of truth: a Next.js storefront with a dynamic
          catalogue and Framer Motion transitions, paired with a React
          admin dashboard for real-time inventory, kept in sync through
          Supabase.
        </p>
        {renderTags([
          "React",
          "Next.js",
          "React Query",
          "Tailwind",
          "Framer Motion",
          "Supabase",
        ])}
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-1">
          <h3 className="font-bold text-2xl">Christin Wu</h3>
          <a
            href="https://christinwu.com/"
            target="_blank"
            rel="noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            christinwu.com
          </a>
        </div>
        <p className="font-light text-white/60 text-sm mb-4">Live</p>
        <p className="font-light leading-7 mb-3">
          Contributed to the storefront for an Indonesian designer footwear
          label, spanning seasonal collections, designer collaborations, and
          a bridal line.
        </p>
        {renderTags([".NET", "C#", "Liquid", "JavaScript", "HTML", "CSS"])}
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-1">
          <h3 className="font-bold text-2xl">JJ Royal Coffee</h3>
          <a
            href="https://jjroyalcoffee.com/"
            target="_blank"
            rel="noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            jjroyalcoffee.com
          </a>
        </div>
        <p className="font-light text-white/60 text-sm mb-4">Live</p>
        <p className="font-light leading-7 mb-3">
          Contributed to a specialty coffee storefront running three
          languages, three currencies, and multiple regional shipping
          carriers.
        </p>
        {renderTags([".NET", "C#", "Liquid", "JavaScript", "HTML", "CSS"])}
      </Card>

      <Card>
        <h3 className="font-bold text-xl mb-2">
          Contributed to Livin&apos; by Mandiri
        </h3>
        <p className="font-light leading-7">
          A commerce integration built inside one of Indonesia&apos;s
          largest banking apps.
        </p>
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-1">
          <h3 className="font-bold text-2xl">Thekoreandaily</h3>
          <a
            href="https://thekoreandaily.co.id/"
            target="_blank"
            rel="noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            thekoreandaily.co.id
          </a>
        </div>
        <p className="font-light leading-7 mb-3">
          A Korean-fashion e-commerce catalogue for a two-person team. I
          built the customer-facing storefront and a web admin panel to
          keep the catalogue current.
        </p>
        {renderTags(["React", "Tailwind"])}
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">The Wild Oasis</h3>
          <div>
            <a
              href="https://the-wild-oasis-website-hfn.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              The Wild Oasis
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-3">
          Built a full-featured accommodation booking platform inspired by
          Airbnb:
        </p>
        <ul className="font-light leading-7 mb-6 list-disc mx-6">
          <li>
            Engineered responsive Next.js frontend with dynamic search,
            filtering, and booking capabilities
          </li>
          <li>
            Developed interactive property listings with image galleries and map
            integration
          </li>
          <li>
            Created secure user authentication system with booking management
            dashboard
          </li>
          <li>
            Implemented real-time availability calendar and reservation system
          </li>
          <li>
            Built admin dashboard for property management and booking oversight
          </li>
          <li>
            Optimized performance with server-side rendering and image
            optimization
          </li>
        </ul>
        <p className="font-semibold leading-7 mb-3">Key Features:</p>
        <ul className="font-light leading-7 mb-6 list-disc mx-6">
          <li>Property listing management for hosts</li>
          <li>Booking system with availability tracking</li>
          <li>User profiles and booking history</li>
          <li>Advanced search with multiple filter options</li>
        </ul>
        {renderTags([
          "ReactJS",
          "Next.Js",
          "Tailwind",
          "React Query",
          "Context API",
        ])}
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">Forkify</h3>
          <div>
            <a
              href="https://forkify-ndn.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Forkify
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          This project is a recipe finder website build with ReactJS. It helps
          people who like to try recipe. Complete with adjustment of the
          ingredients according to the portion that user want to cook.
        </p>
        {renderTags(["ReactJS"])}
      </Card>
    </section>
  );
}
