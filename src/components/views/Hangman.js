function HangmanView(props) {
  return (
    <div>
      <img 
       src={`/images/Hangman-${props.mistakes > 6 ? 6 : prop.mistakes}.png`} 
       alt="A man on gilded gallows" 
       width="256"
       height="256"
      />
      <p>{props.mistakes}</p>
    </div>
  );
}

export default HangmanView;
