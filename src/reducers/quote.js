import { 
  createAsyncThunk, 
  createSlice 
} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandomQuote', 
  async function () { 
    const response = await axios.get("http://api.quotable.io/random");
    return response.data;
  }
);

const initState = {
  content: null
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState: initState,
  extraReducers: function (builder) {
    builder.addCase(fetchRandomQuote.fulfilled, function(state, action) {
      return action.payload;
    })
    .addCase(fetchRandomQuote.pending, function(state, action) {
      return initState;
    })
    .addCase(fetchRandomQuote.rejected, function(state, action) {
      return { 
        content: action.error
      };
    });
  }
});

export default quoteSlice.reducer;
