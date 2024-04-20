import { useQuiz } from "../context/QuizContext";

function ProgressBar() {
  const { index, questionsQty, points, totalPoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={questionsQty} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {questionsQty}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default ProgressBar;
