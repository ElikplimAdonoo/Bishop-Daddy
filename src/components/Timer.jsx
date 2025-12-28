import { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer({ duration = 15, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp && onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  return (
    <div className={`timer ${timeLeft <= 5 ? "danger" : ""}`}>
      ⏰ {timeLeft}s
    </div>
  );
}
