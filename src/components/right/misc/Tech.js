import Card from "../../utilities/Card";

const TECH_GROUPS = [
  {
    group: "AI & Machine Learning",
    items:
      "OpenAI API, Replicate, LangChain, RAG Pipelines, pgvector, ChromaDB, Embeddings, MCP, Claude Code, MediaPipe, Prompt Engineering, LLM Evaluation",
  },
  {
    group: "Front End",
    items:
      "TypeScript, JavaScript, React, Next.js, Tailwind, React Query, Redux Toolkit, Framer Motion, HTML, CSS",
  },
  {
    group: "Back End & Data",
    items:
      "PostgreSQL, Drizzle ORM, Redis, Supabase, Python, REST APIs, MS SQL Server, C# / .NET",
  },
  {
    group: "Automation & Infrastructure",
    items: "n8n, Docker, Dokploy, Cloudflare, Vercel, Azure, Git, Figma, Notion",
  },
];

export default function Tech() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Tech I Work With</h3>
      <p className="font-light leading-7 mb-4">
        AI is where I spend most of my time now. The front-end layer
        underneath it is what keeps the output from looking like a demo.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse table-fixed">
          <thead>
            <tr className="border-b border-white/20">
              <th className="font-bold py-2 pr-4 align-top w-1/3">Group</th>
              <th className="font-bold py-2 align-top">Items</th>
            </tr>
          </thead>
          <tbody>
            {TECH_GROUPS.map(({ group, items }) => (
              <tr key={group} className="border-b border-white/10">
                <td className="font-semibold py-3 pr-4 align-top">
                  {group}
                </td>
                <td className="font-light leading-7 py-3 align-top">
                  {items}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
