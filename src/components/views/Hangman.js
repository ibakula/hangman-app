import style from './Hangman.module.css';

function HangmanView(props) {
  const imgNr = props.mistakes.length > 6 ? 6 : props.mistakes.length;
  return (
    <div className={style.hangman}>
      <img 
       src={`/images/Hangman-${imgNr}.png`} 
       alt="A stick figure with a noose around its neck" 
       width="256"
       height="256"
      />
      <h2 className={props.mistakes.length > 0 ? `${style.tally} ${style.red}` : `${style.tally}`}>{props.mistakes.length} wrong guesses.</h2>
    </div>
  );
}

export default HangmanView;
