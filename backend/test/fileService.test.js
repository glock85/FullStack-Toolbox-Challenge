const { expect } = require("chai");
const CsvParser = require("../src/utils/CsvParser");
const testCases = require("./data/csvParser.testCases");

describe("CsvParser Utility", () => {
  describe("parse() method", () => {
    testCases.forEach(({ title, csv, expected }) => {
      it(title, () => {
        const result = CsvParser.parse(csv);
        expect(result).to.deep.equal(expected);
      });
    });
  });
});
