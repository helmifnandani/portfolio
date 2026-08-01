import Card from "../../utilities/Card";
import GitHubCalendar from "react-github-calendar";

export default function Contributions() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Contributions</h3>
      <p className="font-light leading-7 mb-4">
        Personal GitHub:{" "}
        <a
          href="https://github.com/helmifnandani"
          target="_blank"
          rel="noreferrer"
          className="text-brand font-bold hover:underline"
        >
          @helmifnandani
        </a>
      </p>
      <div className="flex justify-center mb-6">
        <GitHubCalendar username="helmifnandani" />
      </div>
      <p className="font-light leading-7 mb-4">
        Work GitHub:{" "}
        <a
          href="https://github.com/hfebri"
          target="_blank"
          rel="noreferrer"
          className="text-brand font-bold hover:underline"
        >
          @hfebri
        </a>
      </p>
      <div className="flex justify-center">
        <GitHubCalendar username="hfebri" />
      </div>
    </Card>
  );
}
