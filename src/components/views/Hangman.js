import style from './Hangman.module.css';

function HangmanView(props) {
  return (
    <div className={style.hangman}>
      <img 
       src={`/images/Hangman-${props.mistakes > 6 ? 6 : prop.mistakes}.png`} 
       alt="A stick figure with a noose around its neck" 
       width="256"
       height="256"
      />
      <h2 className={props.mistakes > 0 ? `${style.tally} ${style.red}` : `${style.tally}`}>{props.mistakes} wrong guesses.</p>
    </div>
  );
}

export default HangmanView;
