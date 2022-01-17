import React from 'react';
import AppView from '../views/App';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName = ""
    };
    this.nameElementRef = React.createRef();
  }

  handleNameChange = (e) => {
    if (this.nameElementRef.current == null || 
       !(this.nameElementRef.current instanceof HTMLInputElement)) {
      this.setState({ playerName: new Error("Unknown error occured. Try again.") });
      return;
    }
    if (this.nameElementRef.current.value.length < 4) {
      this.setState({ playerName: new Error("Please choose a valid name.") });
      return;
    }
    this.setState({ playerName: this.nameElementRef.current.value });
  }

  render() {
    return (
      <AppView 
         ref={this.nameElementRef}
         playerName={this.state.playerName}
         handleNameChange={this.handleNameChange} 
      />
    );
  }
}

export default App;
