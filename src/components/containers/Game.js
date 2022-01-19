import { Component } from 'react';
import GameView from '../views/Game';
import { 
  calculatePossibleMatches,
  isNotValidKey 
} from '../utils/calc-utils.js';
import { 
  connect 
} from 'react-redux';
import { fetchRandomQuote } from '../../reducers/quote';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mistakes: [],
      matchedPos: [],
      startDate: null
    };
    this.props.fetchQuote();
  }

  handleSelectedLetter = e => {
    if (!(e instanceof KeyboardEvent) ||
      // Game over
      (this.state.matchedPos.length >= calculatePossibleMatches("Veni; vidi; vici...")) ||
      isNotValidKey(e.keyCode)) {
      return;
    }

    const lowKey = e.key.toLowerCase();

    let keyAttempted = this.state.mistakes.find(function(key) {
      return lowKey === key;
    });
    // This prevents repeating
    if (keyAttempted != null) {
      return;
    }

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
      this.setState({ mistakes: this.state.mistakes.concat([ lowKey ]) });
      return;
    }

    this.setState({ matchedPos: this.state.matchedPos.concat(matchesPos) });
  }

  handleRestart = e => {
    e.preventDefault();
    if (this.props.quote.content == null) {
      return;
    }
    this.setState({ 
      mistakes: [], 
      matchedPos: []
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleSelectedLetter, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.quote.content == null) {
      document.removeEventListener("keypress", this.handleSelectedLetter, false);
      return;
    }
    if (this.state.matchedPos.length >= calculatePossibleMatches("Veni; vidi; vici...")) {
      document.removeEventListener("keypress", this.handleSelectedLetter, false);
    }
    if (this.state.matchedPos.length == 0 && 
      (prevState.matchedPos != this.state.matchedPos && 
      (typeof(this.props.quote.content) === "string" && 
      this.props.quote.content !== prevProps.quote.content))) {
      this.setState({ startDate: new Date() });
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
        quote={this.props.quote}
        startDate={this.state.startDate}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    quote: state.quote
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuote() {
      dispatch(fetchRandomQuote());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
