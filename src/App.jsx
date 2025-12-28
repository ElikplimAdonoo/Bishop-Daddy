import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import InstructionsPage from "./pages/InstructionsPage";
// These must be lowercase 'q' and 'r' to match your filenames:
import QuizQuestions from "./pages/Quizquestions"; 
import QuizResults from "./pages/Quizresults"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/instructions" element={<InstructionsPage />} />
      <Route path="/quiz" element={<QuizQuestions />} />
      <Route path="/results" element={<QuizResults />} />
    </Routes>
  );
}

export default App;