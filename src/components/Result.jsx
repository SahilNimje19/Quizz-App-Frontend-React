function Result({ score, total, restartQuiz }) {
  return (
    <div className="result-container">
      <h2>Quiz Completed </h2>
      <p>Your Score: {score}</p>
      <p>Total Questions: {total}</p>

      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Result;
