import { Component } from 'react';
import ScoreboardView from '../views/Scoreboard';
import { 
  calculateScoreByErrorCount 
} from '../utils/calc-utils';

function orderHighscores(data, orderByAsc = true) {
  let orderedHighscore = [];

  if (Array.isArray(data)) {
    data.forEach(function(score) {
      let calculatedScore = {
        score: calculateScoreByErrorCount(score.errors),
        userName: score.userName
      };

      if (orderedHighscore.length == 0) {
        orderedHighscore.push(calculatedScore);
        return;
      }

      for (let i = 0; i < orderedHighscore.length; ++i) {
        if (orderByAsc && 
          orderedHighscore[i].score > calculatedScore.score) {
          orderedHighscore.splice(i, 0, calculatedScore);
          break;
        }
        else if (!orderByAsc && 
          orderedHighscore[i].score < calculatedScore.score) {
          orderedHighscore.splice((i+1), 0, calculatedScore);
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
      this.setState({ 
        highscores: orderHighscores(this.props.scoresData, false)
      });
    }*/
  }

  render() {
    return (
      <ScoreboardView 
        startDate={this.props.startDate} 
        endDate={new Date()}
        scores={this.state.highscores}
      />
    );
  }
}

export default ScoreboardContainer;
