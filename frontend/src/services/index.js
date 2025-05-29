export const getAllFilesData = async (filter = "") => {
  const request = await fetch(
    `http://localhost:4000/files/data${filter ? `?fileName=${filter}` : ""}`
  );
  return await request.json();
};
