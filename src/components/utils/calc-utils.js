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
