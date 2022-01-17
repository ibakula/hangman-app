import WordsView from './Words';
import HangmanView from './Hangman';
import { calculatePossibleMatches } from '../utils/calc-utils.js';
import ScoreboardContainer from '../containers/Scoreboard';

function GameView(props) {
  let gameOver = props.matchedPos.length >= calculatePossibleMatches(props.content);

  return (
    <div>
      {gameOver ? (<ScoreboardContainer 
        startDate={props.startDate}
        playerName={props.playerName} 
        mistakes={props.mistakes} />) : 
      (<>
        <HangmanView 
          mistakes={props.mistakes}
        />
        <WordsView 
          content={props.content} 
          matchedPos={props.matchedPos}
        />
        <h3>Instructions:</h3>
        <p>Choose and press a letter key (A-Z) on your keyboard to guess the hidden letters.</p>
      </>)}
      <form onSubmit={props.handleRestart}>
        <input type="submit" value="Restart game" />
      </form>
    </div>
  );
}

export default GameView;
