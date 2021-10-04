const getCategory = require("../scripts/get-category.js");
const emojis = require("./emojis");

describe("getCategory", () => {
  it("returns an array of emojis that match a category word", () => {
    const word1 = "faces";
    const word2 = "weather";
    const emojis1 = [
      {
        symbol: "👽",
        letter: "a",
        name: "alien",
        category: "faces",
      },
      {
        symbol: "👶",
        letter: "b",
        name: "baby",
        category: "faces",
      },
      {
        symbol: "👻",
        letter: "g",
        name: "ghost",
        category: "faces",
      },
      {
        symbol: "🤹",
        letter: "j",
        name: "juggler",
        category: "faces",
      },
      {
        symbol: "💩",
        letter: "p",
        name: "poop",
        category: "faces",
      },
      {
        symbol: "🤖",
        letter: "r",
        name: "robot",
        category: "faces",
      },
      {
        symbol: "💀",
        letter: "s",
        name: "die",
        category: "faces",
      },
      {
        symbol: "🤐",
        letter: "z",
        name: "zipper",
        category: "faces",
      },
      {
        symbol: "😁",
        name: "grin",
        category: "faces",
      },
      {
        symbol: "😎",
        name: "sunglasses",
        category: "faces",
      },
      {
        symbol: "😆",
        name: "laugh",
        category: "faces",
      },
      {
        symbol: "😠",
        name: "mad",
        category: "faces",
      },
      {
        symbol: "😭",
        name: "cry",
        category: "faces",
      },
      {
        symbol: "😜",
        name: "silly",
        category: "faces",
      },
      {
        symbol: "😱",
        name: "whoops",
        category: "faces",
      },
    ];

    const emojis2 = [
      {
        symbol: "🌧",
        name: "rain",
        category: "weather",
      },
      {
        symbol: "🌨",
        name: "snow",
        category: "weather",
      },
      {
        symbol: "🌩",
        name: "thunderstorm",
        category: "weather",
      },
      {
        symbol: "🌞",
        name: "sun",
        category: "weather",
      },
      {
        symbol: "🌪",
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
