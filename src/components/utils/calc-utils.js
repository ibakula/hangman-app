/*
 * @DESCRIPTION:
 *  Utility function which deduces special characters
 *  count from the character count of the guess words.
 *  
 *  Purpose of the function is its reusability for
 *  the end of the game "if-checks" throughout the code.
 */
export function calculatePossibleMatches(content) {
  let count = content.length;

  for (let i = 0; i < content.length; ++i) {
    if (content.charCodeAt(i) < 48 ||
      (content.charCodeAt(i) > 57 && 
      content.charCodeAt(i) < 65) ||
      (content.charCodeAt(i) > 90 && 
      content.charCodeAt(i) < 97) ||
      content.charCodeAt(i) > 122) {
      --count;
    }
  }

  return count;
};


/*
 * @DESCRIPTION:
 *  keyCode is an integer representing
 *  character position from the Unicode
 *  chart.
 *  
 *  This function checks whether only
 *  A-Z and 0-1 keys are in use.
 */
export function isNotValidKey(keyCode) {
  return (keyCode < 48 || 
    (keyCode > 57 && keyCode < 65) ||
    (keyCode > 90 && keyCode < 97) ||
     keyCode > 122);
};

/*
 * @DESCRIPTION:
 *  Smart score sorting function.
 *  Returns a new highscores object.
 */
export function computeScore(quoteLength, uniqueLetters, errors, duration) {
  let errorBasedScore = 100/(Math.sqrt(1+errors));
  let first = 0.5 * (errorBasedScore == 100 ? (1 - errorBasedScore) : ((100/errors) - errorBasedScore));
  let errAndUnqLtrsBasedScore = errorBasedScore + first / (1 + Math.exp((-uniqueLetters)));
  let second = 0.5 * (errAndUnqLtrsBasedScore - (errorBasedScore + first / (1 + Math.exp((-(uniqueLetters+1))))));
  let errAndUnqLtrsAndLengthBasedScore = errorBasedScore + second / (1 + Math.exp((-quoteLength)));
  let errAndUnqLtrsAndLengthBasedScoreTemp = errorBasedScore + second / (1 +  Math.exp((-(quoteLength+1))));
  let third = 0.5 * (errAndUnqLtrsAndLengthBasedScore - errAndUnqLtrsAndLengthBasedScoreTemp);
  let final = errAndUnqLtrsAndLengthBasedScoreTemp + third * (1 - (1/(1+Math.exp((-duration)))));
  return final;  
};

// Score calculation by error count solely
export function calculateScoreByErrorCount(errorCount) {
  return (100/1+errorCount);
};

export function calculateUniqueCharactersCount(content) {
  const contentLow = content.toLowerCase();
  let count = 0;
  for (let i = 0; i < contentLow.length; ++i) {
    if (isNotValidKey(contentLow.charCodeAt(i))) {
      continue;
    }
    let u = 0;
    for (; u < contentLow.length; ++u) {
      if (u == i) {
        continue;
      }
      if (contentLow[u] === contentLow[i]) {
        break;
      }
    }
    if (u == contentLow.length) {
      ++count;
    }
  }

  return count;
};
