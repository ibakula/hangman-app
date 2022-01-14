import { Component } from 'react';
import GameView from '../views/Game';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mistakes: 0
    };
  }

  handleSelectedLetter = (e) => {
    
  }

  render() {
   return (
     <GameView 
       handleSelectedLetter={this.handleSelectedLetter} 
       content={"Veni; vidi; vici...".toLowerCase()}
     />
   );
  }
}

export default GameContainer;
