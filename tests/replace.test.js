const replace = require("../scripts/replace");
const emojis = require("./emojis");

describe("replace", () => {
  it("gives back the emoji version of the given word", () => {
    const word1 = "elephant";
    const word2 = "news";
    const word3 = "poop";
    const emoji1 = "🐘";
    const emoji2 = "📰";
    const emoji3 = "💩";

    expect(replace(word1, emojis)).toBe(emoji1);
    expect(replace(word2, emojis)).toBe(emoji2);
    expect(replace(word3, emojis)).toBe(emoji3);
  });

  it("if there is no emoji for that word, returns the original word", () => {
    const word1 = "help";
    const word2 = "me";
    const word3 = "please";

    expect(replace(word1, emojis)).toBe(word1);
    expect(replace(word2, emojis)).toBe(word2);
    expect(replace(word3, emojis)).toBe(word3);
  });

  it("is case-insensitive", () => {
    const word1 = "Octopus";
    const word2 = "dIe";
    const word3 = "TONGUE";
    const emoji1 = "🐙";
    const emoji2 = "💀";
    const emoji3 = "👅";

    expect(replace(word1, emojis)).toBe(emoji1);
    expect(replace(word2, emojis)).toBe(emoji2);
    expect(replace(word3, emojis)).toBe(emoji3);
  });
});
