import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName = "";
    };
    this.nameElementRef = React.createRef();
  }
  
  handleNameChange = (e) => {
    if (!(this.nameElementRef.current instanceof HTMLInputElement)) {
      this.setState({ playerName: new Error("Unkown error occured. Try again.") });
      return;
    }
    if (this.nameElementRef.current.value.length < 1) {
      this.setState({ playerName: new Error("Please choose a valid name.") });
      return;
    }
    this.setState({ playerName: this.nameElementRef.current.value });
  }

  render() {
    return (
      <div />
    );
  }
}

export default App;
