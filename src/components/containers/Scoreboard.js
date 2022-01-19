import { Component } from 'react';
import ScoreboardView from '../views/Scoreboard';
import {
  orderHighscores
} from './scoreboard/Utils';
import {
  connect
} from 'react-redux';
import {
  fetchHighscores
} from '../../reducers/scoreboard';

class ScoreboardContainer extends Component {
  constructor(props) {
    super(props);
    this.props.fetchScores();
  }

  render() {
    let data = Array.isArray(this.props.highscores) ? 
    this.props.highscores.concat([{
      userName: `${this.props.playerName} (You)`,
      errors: this.props.mistakes.length
    }]) : this.props.highscores != null && 
    'message' in this.props.highscores ? 
    [{
      userName: `${this.props.playerName} (You)`,
      errors: this.props.mistakes.length
    }] : 
    this.props.highscores;
    if (Array.isArray(data)) {
      data = orderHighscores(data, false);
    }

    return (
      <ScoreboardView 
        content={this.props.quote.content}
        playerName={this.props.playerName}
        mistakes={this.props.mistakes}
        startDate={this.props.startDate} 
        endDate={new Date()}
        scores={data}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    highscores: state.scores.highscores
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchScores() {
      dispatch(fetchHighscores());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreboardContainer);
