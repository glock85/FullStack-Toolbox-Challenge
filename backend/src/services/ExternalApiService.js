class ExternalApiService {
  constructor(fetchClient) {
    this.fetch = fetchClient || require("node-fetch");
    this.apiBase = "https://echo-serv.tbxnet.com/v1/secret";
    this.headers = { Authorization: "Bearer aSuperSecretKey" };
  }

  async fetchFileList() {
    const res = await this.fetch(`${this.apiBase}/files`, {
      headers: this.headers,
    });
    if (!res.ok) throw new Error("Failed to fetch file list");
    const data = await res.json();
    return data.files || [];
  }

  async fetchFile(fileName) {
    const res = await this.fetch(`${this.apiBase}/file/${fileName}`, {
      headers: this.headers,
    });
    if (!res.ok) throw new Error(`Failed to fetch file ${fileName}`);
    return await res.text();
  }
}

module.exports = ExternalApiService;
