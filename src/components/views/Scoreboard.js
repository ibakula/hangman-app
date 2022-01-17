import { calculateScoreByErrorCount } from '../utils/calc-utils.js';
import style from './Scoreboard.module.css';

function ScoreboardView(props) {
  return (
    <>
      <div>
        <p>Your score: {calculateScoreByErrorCount(props.mistakes)}</p>
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
