import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMeaning = createAsyncThunk("getMeaning", async (searchText) => {
  debugger;
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/` + searchText
  );
  let response = res.text();
  return response;
});

const todoSlice = createSlice({
  name: "dictionary",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getMeaning.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMeaning.fulfilled, (state, action) => {
      state.isLoading = false;
      let meaning = JSON.parse(action.payload);
      let MeaningArray = meaning[0].meanings;
      debugger;
      state.data = MeaningArray;
    });
    builder.addCase(getMeaning.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
