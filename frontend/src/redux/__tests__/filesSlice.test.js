import filesReducer, { fetchFiles } from "../filesSlice";

describe("filesSlice", () => {
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };

  it("should handle initial state", () => {
    expect(filesReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle fetchFiles.pending", () => {
    const action = { type: fetchFiles.pending.type };
    const state = filesReducer(initialState, action);
    expect(state).toEqual({ data: [], loading: true, error: null });
  });

  it("should handle fetchFiles.fulfilled", () => {
    const action = {
      type: fetchFiles.fulfilled.type,
      payload: [{ file: "file.csv", lines: [] }],
    };
    const state = filesReducer(initialState, action);
    expect(state).toEqual({
      data: action.payload,
      loading: false,
      error: null,
    });
  });

  it("should handle fetchFiles.rejected", () => {
    const action = {
      type: fetchFiles.rejected.type,
      error: { message: "Error fetching" },
    };
    const state = filesReducer(initialState, action);
    expect(state).toEqual({
      data: [],
      loading: false,
      error: "Error fetching",
    });
  });
});
