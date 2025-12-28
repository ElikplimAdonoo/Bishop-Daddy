import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import instructions from "../data/instructions";
import bg from "../assets/instructionsbg.jpg";
import music from "../assets/instructionsmusic.mp3";
import "./InstructionsPage.css";

export default function InstructionsPage() {
  const [displayedText, setDisplayedText] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (currentLine >= instructions.length) {
      setShowPlayButton(true);
      return;
    }

    if (currentChar < instructions[currentLine].length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => {
          const copy = [...prev];
          copy[currentLine] = (copy[currentLine] || "") + instructions[currentLine][currentChar];
          return copy;
        });
        setCurrentChar(c => c + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 500);
    }
  }, [currentChar, currentLine]);

  return (
    <div className="instructions-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <audio ref={audioRef} src={music} loop />

        <div className="instructions-text">
          {displayedText.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {showPlayButton && (
          <button className="play-btn" onClick={() => navigate("/quiz")}>
            Start Game
          </button>
        )}
      </div>
    </div>
  );
}
