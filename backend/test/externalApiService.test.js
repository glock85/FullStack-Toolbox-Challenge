const { expect } = require("chai");
const ExternalApiService = require("../src/services/ExternalApiService");

describe("ExternalApiService", () => {
  const mockFetch = (url) => {
    if (url.includes("/files")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ files: ["file1.csv", "file2.csv"] }),
      });
    }

    if (url.includes("/file/test.csv")) {
      return Promise.resolve({
        ok: true,
        text: () =>
          Promise.resolve("file,text,number,hex\nfile1,text1,1234,abcd"),
      });
    }

    return Promise.resolve({
      ok: false,
      status: 404,
      text: () => Promise.resolve("Not Found"),
    });
  };

  const apiService = new ExternalApiService(mockFetch);

  it("should return the list of files", async () => {
    const result = await apiService.fetchFileList();
    expect(result).to.deep.equal(["file1.csv", "file2.csv"]);
  });

  it("should return the content of the file", async () => {
    const result = await apiService.fetchFile("test.csv");
    expect(result).to.equal("file,text,number,hex\nfile1,text1,1234,abcd");
  });

  it("should throw an error if the file does not exist", async () => {
    try {
      await apiService.fetchFile("notfound.csv");
      throw new Error("Test failed: expected method to throw.");
    } catch (error) {
      expect(error.message).to.equal("Failed to fetch file notfound.csv");
    }
  });
});
