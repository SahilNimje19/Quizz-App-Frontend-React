import { useState } from "react";
import questions from "../data/questions.jsx";
import Result from "./Result";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <Result
        score={score}
        total={questions.length}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div className="quiz-container">
      <h2>
        Question {currentIndex + 1} of {questions.length}
      </h2>

      <p className="question">{questions[currentIndex].question}</p>

      {questions[currentIndex].options.map((option, index) => (
        <label key={index} className="option">
          <input
            type="radio"
            name="option"
            checked={selectedOption === index}
            onChange={() => setSelectedOption(index)}
          />
          {option}
        </label>
      ))}

      <button
        className="next-btn"
        onClick={handleNext}
        disabled={selectedOption === null}
      >
        Next
      </button>
    </div>
  );
}

export default Quiz;
