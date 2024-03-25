import { useState , useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimeChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpire, setTimerExpire] = useState(false);

    function handleStart() {        
        timer.current = setTimeout(() => {
            setTimerExpire(true);
            dialog.current.open();
        }, targetTime * 1000);    
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return (
      <>
        <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />

        <section className="challenge">
          <h2> {title} </h2>
          <p className="challenge-time">
            {targetTime} second {targetTime > 1 ? "s" : ""}
          </p>
          <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
              {timerStarted ? "Stop" : "Start"} Challenge
            </button>
          </p>
          <p className={timerStarted ? "active" : undefined}>
            {timerExpire ? "Time is running..." : " Timer is inactive"}
          </p>
        </section>
      </>
    );   
}