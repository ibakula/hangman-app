import { Component } from 'react';
import GameView from '../views/Game';
import { 
  calculatePossibleMatches,
  isNotValidKey 
} from '../../utilities/calculation';
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
      typeof(this.props.quote.content) !== "string" ||
      // Game over
      (this.state.matchedPos.length >= calculatePossibleMatches(this.props.quote.content)) ||
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
    let lowerCaseContent = this.props.quote.content.toLowerCase();
    for (let i = 0; i < lowerCaseContent.length; ++i) {
      if (lowerCaseContent[i] === lowKey) {
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
    this.props.fetchQuote();
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleSelectedLetter, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleSelectedLetter, false);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.quote.content !== this.props.quote.content) {
      this.setState({ startDate: new Date });
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
