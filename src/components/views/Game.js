import WordsView from './Words';
import HangmanView from './Hangman';
import { calculatePossibleMatches } from '../utils/calc-utils.js';
import ScoreboardContainer from '../containers/Scoreboard';

function GameView(props) {
  let gameOver = (props.mistakes > 5 || 
  props.matchedPos.length >= calculatePossibleMatches(props.content));

  return (
    <div>
      {gameOver ? <ScoreboardContainer 
        startDate={props.startDate} /> : 
      <HangmanView 
        mistakes={props.mistakes}
      />
      <WordsView 
        content={props.content} 
        matchedPos={props.matchedPos}
      />}
      <form onSubmit={props.handleRestart}>
        <input type="submit" value="Restart game" />
      </form>
    </div>
  );
}

export default GameView;
