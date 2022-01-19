import style from './Words.module.css';
import { isNotValidKey } from '../utils/calc-utils';

function WordsView(props) {
  if (props.content == null) {
    return (
      <h1 className={style.spacing}>Loading a quote...</h1>
    );
  }
  
  if (typeof(props.content) !== "string" && 
    'message' in props.content) {
    return (
      <h1 className={`${style.spacing} ${style.textCenter}`}>Could not start the game.<br /> Error: {props.content.message}</h1>
    );
  }

  let lettersAndDashes = "";
  for (let i = 0; i < props.content.length; ++i) {
    if (isNotValidKey(props.content.charCodeAt(i))) {
      lettersAndDashes += props.content[i];
      continue;
    }

    let found = props.matchedPos.find(function(pos) {
      return pos == i;
    });

    if (found != null) {
      lettersAndDashes += props.content[i];
      continue;
    }

    lettersAndDashes += "_";
  }

  return (
    <div className={style.textContainer}>
      <h3 className={`${style.spacing} ${style.textCenter}`}>{lettersAndDashes}</h3>
    </div>
  );
}

export default WordsView;
