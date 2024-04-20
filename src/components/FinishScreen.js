import { useQuiz } from "../context/QuizContext";

function FinishScreen() {
  const { points, totalPoints, highscore, dispatch } = useQuiz();
  const percentage = (points / totalPoints) * 100;

  return (
    <>
      <div className="result">
        You scored: <strong>{points}</strong> out of {totalPoints}(
        {Math.ceil(percentage)}%)
      </div>
      <p className="highscore">( Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
