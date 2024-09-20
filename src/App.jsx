const message = ["Learn React 😇", "Make Practice 🥵", "Get Job 🫠"];

import { useState } from "react";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1);

  const increse = () => {
    {
      step < 3
        ? setStep(step + 1)
        : alert("Job mali gayi ne , avve su krvu che agal");
    }
  };

  const decrese = () => {
    {
      step > 1
        ? setStep(step - 1)
        : alert("Santii thhi pela React sikhne ajji su jovu che");
    }
  };
  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={`${step >= 1 ? "active" : ""}`}>1</div>
          <div className={`${step >= 2 ? "active" : ""}`}>2</div>
          <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <div className="message">
          Step : {step} {message[step - 1]}
        </div>

        <div className="buttons">
          <button
            className={`${step === 1 ? "disble" : ""} `}
            onClick={decrese}
          >
            {" "}
            Prev
          </button>
          <button
            className={`${step === 3 ? "disble" : ""} `}
            onClick={increse}
          >
            Nxt
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
