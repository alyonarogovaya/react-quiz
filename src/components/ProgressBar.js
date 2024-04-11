function ProgressBar({ index, questionsQty, points, totalPoints, answer }) {
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
