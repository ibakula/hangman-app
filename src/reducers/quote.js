import { createSlice } from '@redux/toolkit';
import axios from 'axios';

const initState = {
  quote: ""
};

const quoteSlice = createSLice({
  name: 'quote',
  initialState: initState,
  extraReducers: function (builder) {
  }
});

export default quoteSlice.reducer;
