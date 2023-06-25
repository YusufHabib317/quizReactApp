function Options({ question, dispatch, answer }) {
  const hasAnswerd = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, idx) => {
        return (
          <button
            className={`btn btn-option
            ${idx === answer ? "answer" : ""}
            ${
              hasAnswerd
                ? idx === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }
            `}
            key={idx}
            onClick={() => dispatch({ type: "newAnswer", payload: idx })}
            disabled={hasAnswerd}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
