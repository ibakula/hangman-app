import style from './Words.module.css';
import { isNotValidKey } from '../utils/calc-utils';

function WordsView(props) {
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
    <h1 className={style.spacing}>{lettersAndDashes}</h1>
  );
}

export default WordsView;
