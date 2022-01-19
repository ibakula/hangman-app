import WordsView from './Words';
import HangmanView from './Hangman';
import { calculatePossibleMatches } from '../utils/calc-utils.js';
import ScoreboardContainer from '../containers/Scoreboard';

function GameView(props) {
  let gameOver = props.quote.content != null && props.matchedPos.length >= calculatePossibleMatches(props.quote.content);

  return (
    <>
      {gameOver ? (<ScoreboardContainer 
        quote={props.quote}
        startDate={props.startDate}
        playerName={props.playerName} 
        mistakes={props.mistakes} />) : 
      (<>
        <h3 style={{textAlign:"center"}}>Instructions:</h3>
        <p style={{textAlign:"center"}}>Choose and press a letter key (A-Z) on your keyboard to guess the hidden letters.</p>
        <HangmanView 
          mistakes={props.mistakes}
        />
        <WordsView 
          content={props.quote.content} 
          matchedPos={props.matchedPos}
        />
      </>)}
      <form onSubmit={props.handleRestart}>
        <input type="submit" value="Restart game" />
      </form>
    </>
  );
}

export default GameView;
