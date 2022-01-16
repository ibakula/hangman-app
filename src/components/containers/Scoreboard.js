import { Component } from 'react';
import ScoreboardView from '../views/Scoreboard';

class ScoreboardContainer extends Component {
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
