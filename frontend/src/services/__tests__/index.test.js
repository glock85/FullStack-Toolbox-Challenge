import { getAllFilesData } from "../index";

global.fetch = jest.fn();

describe("getAllFilesData", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches without filter", async () => {
    const mockResponse = { data: "all files" };
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await getAllFilesData();
    expect(fetch).toHaveBeenCalledWith("http://localhost:4000/files/data");
    expect(result).toEqual(mockResponse);
  });

  it("fetches with filter", async () => {
    const mockResponse = { data: "filtered files" };
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await getAllFilesData("test.csv");
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:4000/files/data?fileName=test.csv"
    );
    expect(result).toEqual(mockResponse);
  });
});
