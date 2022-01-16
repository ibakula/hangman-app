function calculatePossibleMatches(content) {
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
}


/*
 * @DESCRIPTION:
 *  keyCode is an integer representing
 *  character position from the Unicode
 *  chart.
 *  
 *  This function checks whether only
 *  A-Z and 0-1 keys are in use.
 */
function isNotValidKey(keyCode) {
  return (keyCode < 48 || 
    (keyCode > 57 && keyCode < 65) ||
    (keyCode > 90 && keyCode < 97) ||
     keyCode > 122);
}

export calculatePossibleMatches;

export isNotValidKey;
