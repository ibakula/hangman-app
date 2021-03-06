import { 
  calculateScoreByErrorCount, 
  computeScore
} from './calculation';

export function orderHighscores(data, orderByAsc = true, computeComplex = true) {
  let orderedHighscore = [];

  if (Array.isArray(data)) {
    data.forEach(function(score) {
      let calculatedScore = {
        scoreData: computeComplex ? computeScore(score.length, score.uniqueCharacters, score.errors, score.duration) : calculateScoreByErrorCount(score.errors),
        userName: score.userName
      };

      if (orderedHighscore.length == 0) {
        orderedHighscore.push(calculatedScore);
        return;
      }

      for (let i = 0; i < orderedHighscore.length; ++i) {
        if (orderByAsc && 
          orderedHighscore[i].scoreData.score > calculatedScore.scoreData.score) {
          orderedHighscore.splice(i, 0, calculatedScore);
          break;
        }
        else if (!orderByAsc && 
          orderedHighscore[i].scoreData.score < calculatedScore.scoreData.score) {
          orderedHighscore.splice(i, 0, calculatedScore);
          break;
        }

        if (i == (orderedHighscore.length-1)) {
          orderedHighscore.push(calculatedScore);
          break;
        }
      }
    });
  }

  return orderedHighscore;
};
