import { Component } from 'react';
import ScoreboardView from '../views/Scoreboard';
import { orderHighscores } from '../utils/sorting-utils';
import { calculateUniqueCharactersCount } from '../utils/calc-utils';
import { connect } from 'react-redux';
import { fetchHighscores } from '../../reducers/scoreboard';

class ScoreboardContainer extends Component {
  constructor(props) {
    super(props);
    this.props.fetchScores();
    this.ownData = {
      userName: this.props.playerName,
      errors: this.props.mistakes.length,
      length: this.props.quote.content.length,
      uniqueCharacters: calculateUniqueCharactersCount(this.props.quote.content),
      duration: new Date().getTime() - props.startDate.getTime()
    };
  }

  render() {
    let data = Array.isArray(this.props.highscores) ? 
    this.props.highscores.concat([ this.ownData ]) : this.props.highscores != null && 
    'message' in this.props.highscores ? 
    [ this.ownData ] : 
    this.props.highscores;
    if (Array.isArray(data)) {
      data = orderHighscores(data, false);
    }

    return (
      <ScoreboardView 
        content={this.props.quote.content}
        startDate={this.props.startDate} 
        ownData={this.ownData}
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
