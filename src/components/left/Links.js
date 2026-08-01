export default function Links({ section }) {
  return (
    <div className="flex flex-wrap items-center justify-start mt-6">
      <Link text="WORK" label="01" inView={section === "work"} />
      <Link text="PROJECTS" label="02" inView={section === "projects"} />
      <Link text="EDUCATION" label="03" inView={section === "education"} />
      <Link text="MISC" label="04" inView={section === "misc"} />
    </div>
  );
}

const HOVER_TEXT =
  "[@media(hover:hover)_and_(pointer:fine)]:group-hover:text-brand";
const HOVER_BG =
  "[@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-brand";

const Link = ({ text, label, inView }) => {
  return (
    <div
      onClick={() => {
        const el = document.getElementById(text.toLowerCase());
        el?.scrollIntoView({ behavior: "smooth" });
      }}
      className="group flex items-center justify-center text-xs font-bold mr-4 mb-2 cursor-pointer transition-transform active:scale-95"
    >
      <span
        className={`transition-colors ease-brand-out ${HOVER_TEXT} ${
          inView ? "text-brand" : "text-white"
        }`}
      >
        {label}
      </span>
      <div
        className={`w-[12px] lg:w-[20px] h-[1px] mx-1 transition-colors ease-brand-out ${HOVER_BG} ${
          inView ? "bg-brand" : "bg-white"
        }`}
      />
      <span
        className={`transition-colors ease-brand-out ${HOVER_TEXT} ${
          inView ? "text-brand" : "text-white"
        }`}
      >
        {text.toUpperCase()}
      </span>
    </div>
  );
};
