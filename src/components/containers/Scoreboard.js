import { Component } from 'react';
import ScoreboardView from '../views/Scoreboard';

class ScoreboardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScoreboardView />
    );
  }
}

export default ScoreboardContainer;
