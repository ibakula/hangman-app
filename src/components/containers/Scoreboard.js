import { Component } from 'react';
import ScoreboardView from '../views/Scoreboard';
import {
  orderHighscores
} from './scoreboard/Utils';

class ScoreboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highscores: null
    }
  }

  componentDidUpdate(prevProps) {
    /*if (this.props.scoresData != prevProps.scoresData) {
      let data = this.props.scoresData.concat([{
        userName: `${this.props.playerName} (You)`,
        errors: this.props.mistakes
      }]);
      this.setState({ 
        highscores: orderHighscores(data, false)
      });
    }*/
  }

  render() {
    return (
      <ScoreboardView 
        playerName={this.props.playerName}
        mistakes={this.props.mistakes}
        startDate={this.props.startDate} 
        endDate={new Date()}
        scores={this.state.highscores}
      />
    );
  }
}

export default ScoreboardContainer;
