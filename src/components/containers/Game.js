import { Component } from 'react';
import GameView from '../views/Game';
import { 
  calculatePossibleMatches,
  isNotValidKey 
} from '../utils/calc-utils.js';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mistakes: 0,
      matchedPos: [],
      startDate: new Date()
    };
  }

  handleSelectedLetter = e => {
    if (!(e instanceof KeyboardEvent) ||
      // Game over
      (this.state.matchedPos.length >= calculatePossibleMatches("Veni; vidi; vici...")) ||
      isNotValidKey(e.keyCode)) {
      return;
    }

    const lowKey = e.key.toLowerCase();
    const matchesPos = [];
    // Note: this test content will be replaced with an actual prop from redux
    let found = false;
    const testContent = "veni; vidi; vici...";
    for (let i = 0; i < testContent.length; ++i) {
      if (testContent[i] === lowKey) {
        found = this.state.matchedPos.find(function (pos) {
          return (pos == i);
        });
        if (found != null) {
          return;
        }
        matchesPos.push(i);
      }
    }

    if (matchesPos.length == 0) {
      this.setState({ mistakes: (this.state.mistakes+1) });
      return;
    }

    this.setState({ matchedPos: this.state.matchedPos.concat(matchesPos) });
  }

  handleRestart = e => {
    e.preventDefault();
    this.setState({ 
      mistakes: 0, 
      matchedPos: [],
      startDate: new Date()
    });
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleSelectedLetter, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleSelectedLetter, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.matchedPos.length >= calculatePossibleMatches("Veni; vidi; vici...")) {
      document.removeEventListener("keypress", this.handleSelectedLetter, false);
    }
    if (this.state.matchedPos.length == 0 && 
      prevState.matchedPos != this.state.matchedPos) {
      document.addEventListener("keypress", this.handleSelectedLetter, false);
    }
  }

  render() {
    return (
      <GameView 
        playerName={this.props.playerName}
        matchedPos={this.state.matchedPos}
        mistakes={this.state.mistakes}
        handleRestart={this.handleRestart}
        content={"Veni; vidi; vici..."}
        startDate={this.state.startDate}
      />
    );
  }
}

export default GameContainer;
