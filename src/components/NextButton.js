function NextButton({ dispatch, answer, index, questionsQty }) {
  if (answer === null) return;

  return (
    <>
      {index < questionsQty - 1 ? (
        <button
          onClick={() => dispatch({ type: "nextQuestion" })}
          className="btn btn-ui"
        >
          Next
        </button>
      ) : (
        <button
          onClick={() => dispatch({ type: "finishQuiz" })}
          className="btn btn-ui"
        >
          Finish
        </button>
      )}
    </>
  );
}

export default NextButton;
