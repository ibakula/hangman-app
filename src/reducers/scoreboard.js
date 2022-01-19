import { 
  createAsyncThunk, 
  createSlice 
} from '@reduxjs/toolkit';
import axios from 'axios';

export const sendScore = createAsyncThunk(
  'scores/sendScore',
  async function(score) {
    const response = await axios.post("http://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores", score);
    return response;
  }
);

export const fetchHighscores = createAsyncThunk(
  'scores/fetchHighscores', 
  async function () { 
    const response = await axios.get("http://my-json-server.typicode.com/stanko-ingemark/hang_the_wise_man_frontend_task/highscores");
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
      return { 
        highscores: action.payload
      };
    })
    .addCase(fetchHighscores.pending, function(state, action) {
      return initState;
    })
    .addCase(fetchHighscores.rejected, function(state, action) {
      return { 
        highscores: action.error
      };
    });
  }
});

export default scoresSlice.reducer;
