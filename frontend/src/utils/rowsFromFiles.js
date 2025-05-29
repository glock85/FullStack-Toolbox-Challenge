export const rowsFromFiles = (files) => {
  return files.flatMap((fileObj) =>
    (fileObj.lines || []).map((line) => ({
      file: fileObj.file,
      text: line.text,
      number: line.number,
      hex: line.hex,
    }))
  );
};
