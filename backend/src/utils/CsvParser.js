class CsvParser {
  static parse(csv) {
    const lines = csv.trim().split("\n").slice(1);
    const validLines = [];

    for (const line of lines) {
      const parts = line.split(",");

      if (parts.length === 4) {
        const [, text, number, hex] = parts;

        const parsedNumber = Number(number);
        if (!isNaN(parsedNumber) && hex.length === 32) {
          validLines.push({ text, number: parsedNumber, hex });
        }
      }
    }

    return validLines;
  }
}

module.exports = CsvParser;
