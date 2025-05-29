import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllFilesData } from "../services";

export const fetchFiles = createAsyncThunk(
  "files/fetchFiles",
  async (filter = "") => {
    const response = await getAllFilesData(filter);
    return response;
  }
);

const filesSlice = createSlice({
  name: "files",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default filesSlice.reducer;