import { renderHook, act } from "@testing-library/react";
import { useApp } from "../useApp";
import { useDispatch, useSelector } from "react-redux";
import { fetchFiles } from "../../redux/filesSlice";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../redux/filesSlice", () => ({
  fetchFiles: jest.fn((filter) => ({ type: "FETCH", payload: filter })),
}));

describe("useApp", () => {
  const mockDispatch = jest.fn();

  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation((msg, ...args) => {
      if (
        typeof msg === "string" &&
        msg.includes("ReactDOMTestUtils.act is deprecated")
      ) {
        return;
      }
      console.error(msg, ...args);
    });
  });

  afterAll(() => {
    console.error.mockRestore();
  });

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((fn) => fn({ files: { loading: false } }));
    mockDispatch.mockClear();
  });

  it("should return initial state", () => {
    const { result } = renderHook(() => useApp());
    expect(result.current.inputValue).toBe("");
    expect(result.current.loading).toBe(false);
  });

  it("should update input value", () => {
    const { result } = renderHook(() => useApp());
    act(() => {
      result.current.setInputValue("test.csv");
    });
    expect(result.current.inputValue).toBe("test.csv");
  });

  it("should dispatch fetchFiles on submit", () => {
    const { result } = renderHook(() => useApp());
    const event = { preventDefault: jest.fn() };

    act(() => {
      result.current.setInputValue("test.csv");
    });

    act(() => {
      result.current.handleSubmit(event);
    });

    expect(event.preventDefault).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(fetchFiles("test.csv"));
  });

  it("should dispatch fetchFiles on mount", () => {
    renderHook(() => useApp());
    expect(mockDispatch).toHaveBeenCalledWith(fetchFiles());
  });
});
