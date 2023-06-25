const Finish = ({ points, maxPossiplePoints, highscore, dispatch, score }) => {
  let express;

  if (score === 100) express = "Excellent";
  if (score >= 80 && score < 100) express = "Good";
  if (score >= 50 && score < 80) express = "Not Bad";
  if (score >= 0 && score < 50) express = "You must Study harder and good luck";
  if ((score = 0)) express = "What is this bro?!";
  return (
    <>
      <p className="result">
        <span>{express}... </span> You Scored <strong>{points}</strong> out of{" "}
        {maxPossiplePoints}
      </p>
      <p className="highscore">(High Score :{highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quizz
      </button>
    </>
  );
};

export default Finish;
