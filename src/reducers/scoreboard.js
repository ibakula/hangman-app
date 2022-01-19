import { 
  createAsyncThunk, 
  createSlice 
} from '@reduxjs/toolkit';
import axios from 'axios';

const fetchHighscores = createAsyncThunk(
  'scores/fetchHighscores', 
  async function () { 
    const response = axios.get("/highscores");
    return response.data;
  }
);

const initState = {
  highscores: null
};

const scoresSlice = createSlice({
  name: 'scores',
  initialState: initState,
  extraReducers: function (builder) {
    builder.addCase(fetchHighscores.fulfilled, function(state, action) {
      return action.payload;
    })
    .addCase(fetchHighscores.pending, function(state, action) {
      return initState;
    })
    .addCase(fetchHighscores.rejected, function(state, action) {
      return { 
        highscores: action.payload.error
      };
    });
  }
});

export default scoresSlice.reducer;
