import style from './Scoreboard.module.css';

function ScoreboardView(props) {
  let finishTime = props.ownData.duration;
  finishTime /= 60000;
  const inSeconds = finishTime < 1;
  if (inSeconds) {
    finishTime *= 60;
  }
  finishTime = Number.parseFloat(finishTime).toFixed(2);

  return (
    <>
      <div className={style.scoreboardContainer}>
        <p>Congratulations!</p>
        <p>You have guessed: <br /><i>&quot;{props.content}&quot;</i></p>
        <p>You have {props.ownData.errors} failed attempts.</p>
        <p>In a duration of {finishTime} {inSeconds ? 'seconds' : 'minutes'}</p>
        <p>Your score is highlighted <mark>yellow</mark>.</p>
      </div>
      <table className={style.noTdBorder}>
        <tr><th>Player</th><th>Score</th></tr>
        {
          Array.isArray(props.scores) ? 
          props.scores.map(function(score) {
            let highlight = score.userName.search(props.ownData.userName) != -1 ? style.highlight : '';
            return (<tr>
              <td className={highlight}>{score.userName}</td>
              <td className={highlight}>{score['score'].toPrecision(3)}</td>
            </tr>);
          }) : 
          (<tr><td colspan="2">Loading highscores..</td></tr>)
        }
      </table>
    </>
  );
}

export default ScoreboardView;
