function ScoreboardView(props) {
  return (
    <>
      <div>
        <p>Your score: {props.playerScore}</p>
      </div>
      <table>
        <tr><th>Player</th><th>Score</th></tr>
        {
          Array.isArray(props.scores) ? 
          props.scores.map(function(score) {
            return (<tr>
              <td>{score.userName}</td>
              <td>{score['score']}</td>
            </tr>);
          }) : 
          (<tr><td>Loading highscores..</td></tr>)
        }
      </table>
    </>
  );
}

export default ScoreboardView;
