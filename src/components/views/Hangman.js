function updateHangman(mistakes) {
  switch(mistakes) {
    case 1:
      return "https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png";
    case 2:
      return "https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png";
    case 3:
      return "https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png";
    case 4:
      return "https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png";
    case 5:
      return "https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png";
    case 6:
      return "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png";
    default: 
      return "https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png";
  }
}

function HangmanView(props) {
  return (
    <img 
     src={updateHangman(props.mistakes)} 
     alt="Man on gilded gallows" 
     width="256"
     height="256"
    />
  );
}

export default HangmanView;
