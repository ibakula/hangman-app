import { Component } from 'react';
import GameView from '../views/Game';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mistakes: 0,
      matchedPos: []
    };
  }

  handleSelectedLetter = (e) => {
    if (!(e instanceof KeyboardEvent) ||
      // Game over
      this.state.mistakes > 7) {
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
    this.setState({ mistakes: 0, matchedPos: [] });
  }

  render() {
   return (
     <GameView 
       matchedPos={this.state.matchedPos}
       mistakes={this.state.mistakes}
       onKeyPress={this.handleSelectedLetter} 
       handleRestart={this.handleRestart}
       content={"Veni; vidi; vici...".toLowerCase()}
     />
   );
  }
}

export default GameContainer;
