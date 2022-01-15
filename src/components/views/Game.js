import WordsView from './Words';
import HangmanView from './Hangman';

function GameView(props) {
  return (
    <div>
      <HangmanView 
        mistakes={props.mistakes}
      />
      <WordsView 
        content={props.content} 
        matchedPos={props.matchedPos}
      />
      <form onSubmit={props.handleRestart}>
        <input type="submit" value="Restart game" />
      </form>
    </div>
  );
}

export default GameView;
