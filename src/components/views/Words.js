import style from './Words.module.css';

function WordsView(props) {
  let lettersAndDashes = "";
  for (let i = 0; i < props.content.length; ++i) {
    // If not a letter according to Unicode then reveal character
    if (props.content.charCodeAt(i) < 48 ||
      (props.content.charCodeAt(i) > 57 && 
      props.content.charCodeAt(i)) < 65 ||
      (props.content.charCodeAt(i) > 90 && 
      props.content.charCodeAt(i) < 97) ||
      props.content.charCodeAt(i) > 122) {
      lettersAndDashes += props.content[i];
    }

    let found = props.matchedPos.find(pos => {
      pos == i;
    });

    if (found) {
      lettersAndDashes += props.content[i];
      continue;
    }

    lettersAndDashes += "_";
  }

  return (
    <h3 className={style.h1}>{lettersAndDashes}</h3>
  );
}

export default WordsView;
