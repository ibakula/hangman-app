/*
 * @DESCRIPTION:
 *  Utility function which deduces special characters
 *  count from the character count of the guess words.
 *  
 *  Purpose of the function is its reusability for
 *  the end of the game "if-checks" throughout the code.
 */
export function deductValidCharacterCountFrom(content) {
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
export function isAnInvalidKeycode(keyCode) {
  return (keyCode < 48 || 
    (keyCode > 57 && keyCode < 65) ||
    (keyCode > 90 && keyCode < 97) ||
     keyCode > 122);
};

// errors: 1023 cap / 10 bits
// uniqueLetters: 1023 cap / 10 bits
// quoteLength: 1023 cap / 10 bits
// duration (ms): 59940000 cap (999 mins) / 26 bits
function calculateVanillaScore(quoteLength, uniqueLetters) {
  // this initial number will be used for score reduction based on error count
  let score = 10230000000000000000;
  score += ((uniqueLetters > 1023 ? 1023 : uniqueLetters)*1000000000000);
  score += ((quoteLength > 1023 ? 1023 : quoteLength)*100000000);
  score += 59940000;
  return score;
}

export function computeScore(quoteLength, uniqueLetters, errors, duration) {
  const vanillaScore = calculateVanillaScore(quoteLength, uniqueLetters);
  let score = vanillaScore;
  score -= ((errors > 1023 ? 1023 : errors)*10000000000000);
  score -= (duration > 59940000 ? 59940000 : duration);

  return { 
    maxScore: vanillaScore,
    score
  };
};

// Score calculation by error count solely
export function calculateScoreByErrorCount(errorCount) {
  return (100/1+errorCount);
};

export function deductUniqueLettersCountFrom(content) {
  const contentLow = content.toLowerCase();
  let count = 0;
  for (let i = 0; i < contentLow.length; ++i) {
    if (isAnInvalidKeycode(contentLow.charCodeAt(i))) {
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
