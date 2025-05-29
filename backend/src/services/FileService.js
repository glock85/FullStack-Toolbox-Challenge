const ExternalApiService = require("./ExternalApiService");
const CsvParser = require("../utils/CsvParser");

class FileService {
  constructor() {
    this.apiService = new ExternalApiService();
  }

  async getFormattedFiles(fileName = null) {
    const formatted = [];

    const fileNames = fileName
      ? [fileName]
      : await this.apiService.fetchFileList();

    for (const file of fileNames) {
      try {
        const rawContent = await this.apiService.fetchFile(file);
        const lines = CsvParser.parse(rawContent);

        if (lines.length > 0) {
          formatted.push({ file, lines });
        }
      } catch (e) {
        console.warn(`Skipping file ${file} due to error:`, e.message);
      }
    }

    return formatted;
  }
}

module.exports = FileService;
