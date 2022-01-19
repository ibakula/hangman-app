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
export function sortHighscore(quoteLength, uniqueLetters, errors, duration) {
  
};

// Score calculation by error count solely
export function calculateScoreByErrorCount(errorCount) {
  return (100/1+errorCount);
};
