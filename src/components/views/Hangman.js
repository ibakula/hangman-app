function HangmanView(props) {
  return (
    <img 
     src={`/images/Hangman-${props.mistakes}.png`} 
     alt="A man on gilded gallows" 
     width="256"
     height="256"
    />
  );
}

export default HangmanView;
