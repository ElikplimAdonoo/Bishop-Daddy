import { useNavigate } from "react-router-dom";
import "./Quizquestions.css"; // You can create a QuizResults.css for unique styling

export default function QuizResults() {
  const navigate = useNavigate();

  // In a real app, you'd get the score from a State/Context
  const score = 0; 

  return (
    <div className="quiz-container">
      <div className="quiz-overlay">
        <h1 className="quiz-title">Game Over!</h1>
        
        <p className="quiz-question">
          Your final score is: <strong>{score}</strong>
        </p>

        <div className="quiz-options">
          <button 
            className="quiz-option" 
            onClick={() => navigate("/quiz")}
          >
            Try Again
          </button>
          
          <button 
            className="quiz-option" 
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}