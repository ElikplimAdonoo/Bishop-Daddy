import Timer from "../components/Timer";
import "./Quizquestions.css";

export default function QuizQuestions() {
  const handleTimeUp = () => {
    alert("Time's up!");
    // later: auto move to next question or results
  };

  return (
    <div className="quiz-container">
      <div className="quiz-overlay">

        {/* TIMER */}
        <Timer duration={15} onTimeUp={handleTimeUp} />

        {/* QUESTION */}
        <h1 className="quiz-title">QUESTION 1</h1>

        <p className="quiz-question">
          Who founded the church?
        </p>

        {/* OPTIONS */}
        <div className="quiz-options">
          <button className="quiz-option">Bishop A</button>
          <button className="quiz-option">Bishop B</button>
          <button className="quiz-option">Bishop C</button>
          <button className="quiz-option">Bishop D</button>
        </div>

      </div>
    </div>
  );
}
