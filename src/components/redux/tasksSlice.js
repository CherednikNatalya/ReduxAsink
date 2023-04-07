import { createSlice } from "@reduxjs/toolkit";
import {fetchTasks} from '../redux/operations'
const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
extraReducers: {
    [fetchTasks.pending](state, action){
        state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action){
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
    },
    [fetchTasks.rejected](state, action){
        state.isLoading = false;
      state.error = action.payload;
    },
}
  
});

// export const {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
