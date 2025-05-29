import { rowsFromFiles } from "../rowsFromFiles";

describe("rowsFromFiles", () => {
  it("should flatten and transform the data correctly", () => {
    const files = [
      {
        file: "file1.csv",
        lines: [
          { text: "abc", number: 123, hex: "7b" },
          { text: "def", number: 456, hex: "1c8" },
        ],
      },
    ];

    const result = rowsFromFiles(files);
    expect(result).toEqual([
      { file: "file1.csv", text: "abc", number: 123, hex: "7b" },
      { file: "file1.csv", text: "def", number: 456, hex: "1c8" },
    ]);
  });

  it("should handle files with no lines", () => {
    const files = [{ file: "file2.csv", lines: [] }];
    expect(rowsFromFiles(files)).toEqual([]);
  });

  it("should handle missing lines field", () => {
    const files = [{ file: "file3.csv" }];
    expect(rowsFromFiles(files)).toEqual([]);
  });
});
