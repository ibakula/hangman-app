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

  handleSelectedLetter = (e) => {
    if (!(e instanceof KeyboardEvent) ||
      // Game over
      //this.state.mistakes >= 6 ||
      //(this.state.matchedPos.length >= calculatePossibleMatches(this.props.content))
      isNotValidKey(e.keyCode)) {
      return;
    }

    const lowKey = e.key.toLowerCase();
    const matchesPos = [];
    // Note: this test content will be replaced with an actual prop from redux
    const testContent = "veni; vidi; vici...";
    for (let i = 0; i < testContent.length; ++i) {
      if (testContent[i] === lowKey) {
        matchesPos.push(i);
      }
    }

    if (matchesPos.length == 0) {
      this.setState({ mistakes: (this.state.mistakes+1) });
      return;
    }

    this.setState({ matchedPos: this.state.matchedPos.concat(matchesPos) });
  }

  handleRestart = (e) => {
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

  render() {
   return (
     <GameView 
       playerName={this.props.playerName}
       matchedPos={this.state.matchedPos}
       mistakes={this.state.mistakes}
       handleRestart={this.handleRestart}
       content={"Veni; vidi; vici...".toLowerCase()}
       startDate={this.state.startTime}
     />
   );
  }
}

export default GameContainer;
