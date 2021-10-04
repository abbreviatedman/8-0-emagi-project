const encodeWord = require("../scripts/encode");
const emojis = require("./emojis");

describe("encodeWord", () => {
  it("gives back the emoji version of each letter in the given word", () => {
    const word1 = "help";
    const word2 = "hello";
    const word3 = "please";
    const expectedWord1 = "💜🐘🐞💩";
    const expectedWord2 = "💜🐘🐞🐞🐙";
    const expectedWord3 = "💩🐞🐘👽💀🐘";

    expect(encodeWord(word1, emojis)).toBe(expectedWord1);
    expect(encodeWord(word2, emojis)).toBe(expectedWord2);
    expect(encodeWord(word3, emojis)).toBe(expectedWord3);
  });

  it("leaves non-letters untouched", () => {
    const word1 = "help!";
    const word2 = "r2d2";
    const word3 = "colin@pursuit.org";
    const expectedWord1 = "💜🐘🐞💩!";
    const expectedWord2 = "🤖2🍩2";
    const expectedWord3 = "🌵🐙🐞🍦📰@💩🦄🤖💀🦄🍦👅.🐙🤖👻";

    expect(encodeWord(word1, emojis)).toBe(expectedWord1);
    expect(encodeWord(word2, emojis)).toBe(expectedWord2);
    expect(encodeWord(word3, emojis)).toBe(expectedWord3);
  });

  it("is case-insensitive", () => {
    const word1 = "Colin";
    const word2 = "YELLS";
    const word3 = "at Greg Testo";
    const expectedWord1 = "🌵🐙🐞🍦📰";
    const expectedWord2 = "☯🐘🐞🐞💀";
    const expectedWord3 = "👽👅 👻🤖🐘👻 👅🐘💀👅🐙";

    expect(encodeWord(word1, emojis)).toBe(expectedWord1);
    expect(encodeWord(word2, emojis)).toBe(expectedWord2);
    expect(encodeWord(word3, emojis)).toBe(expectedWord3);
  });
});
