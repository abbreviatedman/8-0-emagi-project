const getCategory = require("../scripts/get-category.js");
const emojis = require("./emojis");

describe("getCategory", () => {
  it("returns an array of emojis that match a category word", () => {
    const word1 = "faces";
    const word2 = "weather";
    const emojis1 = [
      {
        symbol: "๐ฝ",
        letter: "a",
        name: "alien",
        category: "faces",
      },
      {
        symbol: "๐ถ",
        letter: "b",
        name: "baby",
        category: "faces",
      },
      {
        symbol: "๐ป",
        letter: "g",
        name: "ghost",
        category: "faces",
      },
      {
        symbol: "๐คน",
        letter: "j",
        name: "juggler",
        category: "faces",
      },
      {
        symbol: "๐ฉ",
        letter: "p",
        name: "poop",
        category: "faces",
      },
      {
        symbol: "๐ค",
        letter: "r",
        name: "robot",
        category: "faces",
      },
      {
        symbol: "๐",
        letter: "s",
        name: "die",
        category: "faces",
      },
      {
        symbol: "๐ค",
        letter: "z",
        name: "zipper",
        category: "faces",
      },
      {
        symbol: "๐",
        name: "grin",
        category: "faces",
      },
      {
        symbol: "๐",
        name: "sunglasses",
        category: "faces",
      },
      {
        symbol: "๐",
        name: "laugh",
        category: "faces",
      },
      {
        symbol: "๐ ",
        name: "mad",
        category: "faces",
      },
      {
        symbol: "๐ญ",
        name: "cry",
        category: "faces",
      },
      {
        symbol: "๐",
        name: "silly",
        category: "faces",
      },
      {
        symbol: "๐ฑ",
        name: "whoops",
        category: "faces",
      },
    ];

    const emojis2 = [
      {
        symbol: "๐ง",
        name: "rain",
        category: "weather",
      },
      {
        symbol: "๐จ",
        name: "snow",
        category: "weather",
      },
      {
        symbol: "๐ฉ",
        name: "thunderstorm",
        category: "weather",
      },
      {
        symbol: "๐",
        name: "sun",
        category: "weather",
      },
      {
        symbol: "๐ช",
        name: "tornado",
        category: "weather",
      },
    ];

    expect(getCategory(word1, emojis)).toEqual(emojis1);
    expect(getCategory(word2, emojis)).toEqual(emojis2);
  });

  it("returns an empty array if no matching emojis are found", () => {
    const word1 = "building";
    const word2 = "colin";
    const emojis1 = [];
    const emojis2 = [];

    expect(getCategory(word1, emojis)).toEqual(emojis1);
    expect(getCategory(word2, emojis)).toEqual(emojis2);
  });
});
