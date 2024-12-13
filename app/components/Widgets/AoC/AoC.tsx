import { LINKS } from "../../../constants/globals";
import Widget from "../Widget/Widget";
import "./AoC.css";

const AoC = () => {
  return (
    <Widget size="small" className="aoc" href={LINKS.GitHub.AoC}>
      <h2 className="aoc-body">Advent of Code</h2>
      <p className="aoc-body">
        <span className="aoc-body-secondary">//</span> 2024
      </p>
    </Widget>
  );
};

export default AoC;
