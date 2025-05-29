const { expect } = require("chai");

const externalApiPath = require.resolve("../src/services/ExternalApiService");

require.cache[externalApiPath] = {
  id: externalApiPath,
  filename: externalApiPath,
  loaded: true,
  exports: class ExternalApiServiceMock {
    async fetchFileList() {
      return ["test.csv"];
    }

    async fetchFile() {
      return "file,text,number,hex\nfile1,text1,1234,abcdabcdabcdabcdabcdabcdabcdabcd\nfile2,text2,NaN,invalid";
    }
  },
};

const FileController = require("../src/controllers/FileController");

describe("FileController - getFilesData", () => {
  let controller;

  beforeEach(() => {
    controller = new FileController();
  });

  it("should return files with only valid lines", async () => {
    const mockReq = {};
    const mockRes = {
      statusCode: null,
      jsonBody: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(body) {
        this.jsonBody = body;
      },
    };

    await controller.getFilesData(mockReq, mockRes);

    expect(mockRes.statusCode).to.equal(200);
    expect(mockRes.jsonBody).to.deep.equal([
      {
        file: "test.csv",
        lines: [
          {
            text: "text1",
            number: 1234,
            hex: "abcdabcdabcdabcdabcdabcdabcdabcd",
          },
        ],
      },
    ]);
  });
});
