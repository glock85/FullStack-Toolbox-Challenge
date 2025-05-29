const FileService = require("../services/FileService");

class FileController {
  constructor() {
    this.fileService = new FileService();
  }

  async getFilesData(req, res) {
    try {
      const { fileName } = req.query;
      const result = await this.fileService.getFormattedFiles(fileName);
      res.status(200).json(result);
    } catch (error) {
      console.error("FileController Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = FileController;
