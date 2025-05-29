module.exports = [
  {
    title: "should return valid objects with text, number, and hex",
    csv: `file,text,number,hex
file1,text1,1234,abcdabcdabcdabcdabcdabcdabcdabcd`,
    expected: [
      {
        text: "text1",
        number: 1234,
        hex: "abcdabcdabcdabcdabcdabcdabcdabcd",
      },
    ],
  },
  {
    title: "should ignore lines with missing fields",
    csv: `file,text,number,hex
invalid,line
file2,text2,5678,abcdabcdabcdabcdabcdabcdabcdabcd`,
    expected: [
      {
        text: "text2",
        number: 5678,
        hex: "abcdabcdabcdabcdabcdabcdabcdabcd",
      },
    ],
  },
  {
    title: "should ignore lines with invalid number field",
    csv: `file,text,number,hex
file1,text1,NaN,abcdabcdabcdabcdabcdabcdabcdabcd`,
    expected: [],
  },
  {
    title: "should ignore lines with invalid hex (less than 32 characters)",
    csv: `file,text,number,hex
file1,text1,1234,shorthex`,
    expected: [],
  },
  {
    title: "should handle multiple lines and include only valid ones",
    csv: `file,text,number,hex
file1,text1,1234,abcdabcdabcdabcdabcdabcdabcdabcd
file2,text2,5678,shorthex
file3,text3,NaN,abcdabcdabcdabcdabcdabcdabcdabcd
file4,text4,91011,abcdabcdabcdabcdabcdabcdabcdabcd`,
    expected: [
      {
        text: "text1",
        number: 1234,
        hex: "abcdabcdabcdabcdabcdabcdabcdabcd",
      },
      {
        text: "text4",
        number: 91011,
        hex: "abcdabcdabcdabcdabcdabcdabcdabcd",
      },
    ],
  },
];
