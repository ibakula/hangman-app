import { Component } from 'react';
import ScoreboardView from '../views/Scoreboard';
import { 
  calculateScoreByErrorCount 
} from '../utils/calc-utils';

function orderHighscores(data, orderByDesc = false) {
  let orderedHighscore = [];

  if (Array.isArray(data)) {
    data.forEach(function(score) {
      let calculatedScore = {
        score: calculateScoreByErrorCount(score.errors),
        userName: score.userName
      };

      if (orderedHighscore.length == 0) {
        orderedHighscore.push(calculatedScore);
        continue;
      }

      for (let i = 0; i < orderedHighscore.length; ++i) {
        if (orderByDesc && 
          orderedHighscore[i].score > calculatedScore.score) {
          orderedHighscore.splice(i, 0, calculatedScore);
          break;
        }
        else if (!orderedByDesc && 
          orderedHighscore[i].score < calculatedScore.score) {
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

  return orderedHighscores;
}

class ScoreboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highscores: null
    }
  }

  componentDidUpdate(prevProps) {
    /*if (this.props.scoresData != prevProps.scoresData) {
      this.state.highscores;
    }*/
  }

  render() {
    return (
      <ScoreboardView 
        startDate={this.props.startDate} 
        endDate={new Date()}
        scores={[]}
      />
    );
  }
}

export default ScoreboardContainer;
