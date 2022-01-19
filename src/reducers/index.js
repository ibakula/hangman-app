import quoteReducer from './quote';
import scoresReducer from './scoreboard';

const reducer = {
  reducer: { 
    quote: quoteReducer,
    scores: scoresReducer
  }
};

export default reducer;
