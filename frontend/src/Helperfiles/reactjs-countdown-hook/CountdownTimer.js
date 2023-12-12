import React, { useState } from "react";
import { useTimer } from "reactjs-countdown-hook";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";
import BoxComponent from "../styled-components/BoxComponent";

function CountdownTimer() {
  const [customMinutes, setCustomMinutes] = useState(5);
  const [customSeconds, setCustomSeconds] = useState(0);

  let handleTimerFinish = () => {
    alert("Times up!");
  };

  const {
    isActive,
    counter,
    seconds,
    minutes,
    hours,
    days,
    pause,
    resume,
    reset,
  } = useTimer(customMinutes * 60 + customSeconds, handleTimerFinish);

  const handleCustomTimeChange = () => {
    reset();
    const totalSeconds = customMinutes * 60 + customSeconds;
    reset(totalSeconds);
  };

  return (
    <CenterScreen>
      <TitleComponent>Reactjs-countdown-hook</TitleComponent>
      <BoxComponent>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {`${minutes} : ${seconds}`}
          </div>
          <div>
            <div style={{ marginBottom: "10px" }}>
              <label style={{ marginRight: "10px" }}>Minutes:</label>
              <input
                type="number"
                value={customMinutes}
                onChange={(e) => setCustomMinutes(e.target.value)}
              />
              <label style={{ margin: "0 10px" }}>Seconds:</label>
              <input
                type="number"
                value={customSeconds}
                onChange={(e) => setCustomSeconds(e.target.value)}
              />
              <button
                onClick={handleCustomTimeChange}
                style={{ marginLeft: "10px" }}
              >
                Set Custom Time
              </button>
            </div>
            <button
              onClick={() => (isActive ? pause() : resume())}
              style={{
                padding: "10px",
                margin: "5px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {isActive ? "Pause" : "Resume"}
            </button>
            <button
              onClick={reset}
              style={{
                padding: "10px",
                margin: "5px",
                fontSize: "16px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </BoxComponent>
    </CenterScreen>
  );
}

export default CountdownTimer;
