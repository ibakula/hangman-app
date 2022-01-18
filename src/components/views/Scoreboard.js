import { calculateScoreByErrorCount } from '../utils/calc-utils.js';
import style from './Scoreboard.module.css';

function ScoreboardView(props) {
  let finishTime = props.endDate.getTime() - props.startDate.getTime();
  finishTime /= 60000;
  const inSeconds = finishTime < 1;
  if (inSeconds) {
    finishTime *= 60;
  }
  finishTime = Number.parseFloat(finishTime).toFixed(2);

  return (
    <>
      <div style={{textAlign:"center"}}>
        <p>Congratulations!</p>
        <p>You have guessed: <br />&quot;{props.content}&quot;</p>
        <p>You have {props.mistakes.length} failed attempts.</p>
        <p>In a duration of {finishTime} {inSeconds ? 'seconds' : 'minutes'}</p>
        <p>Your score: {calculateScoreByErrorCount(props.mistakes.length)}</p>
      </div>
      <table className={style.noTdBorder}>
        <tr><th>Player</th><th>Score</th></tr>
        {
          Array.isArray(props.scores) ? 
          props.scores.map(function(score) {
            if (score.userName.search(/you/i) != -1) {
              return (<tr className={style.highlight}>
                <td>{score.userName}</td>
                <td>{score['score']}</td>
              </tr>);
            }
            return (<tr>
              <td>{score.userName}</td>
              <td>{score['score']}</td>
            </tr>);
          }) : 
          (<tr><td colspan="2">Loading highscores..</td></tr>)
        }
      </table>
    </>
  );
}

export default ScoreboardView;
