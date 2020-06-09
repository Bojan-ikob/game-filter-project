import React from "react";
import "../css/voved.css";

const Voved = () => {
  return (
    <div className="voved">
      <div className="rgba">
        <p className="parag">
          Изработено од студенти на академијата за програмирање{" "}
          <span>Brainster</span>
        </p>
        <h1>FUTURE-PROOF YOUR ORGANIZATION</h1>
        <h3>
          Find out how to unlock progress in your business.Understand your
          current state, identify <br></br>
          opportunity areas and prepare to take charge of your organization's
          future.
        </h3>
        <a
          href="https://brainsterquiz.typeform.com/to/kC2I9E"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Тake the Assessment</button>
        </a>
      </div>
    </div>
  );
};

export default Voved;
