const search = require("../scripts/search");
const emojis = require("./emojis");

describe("search", () => {
  it(`returns an array containing the emoji whose name matches the given word`, () => {
    const searchTerm1 = "mushroom";
    const searchResult1 = [
      {
        symbol: "🍄",
        letter: "m",
        name: "mushroom",
        category: '',
      },
    ];
    const searchTerm2 = "alien";
    const searchResult2 = [
      {
        symbol: "👽",
        letter: "a",
        name: "alien",
        category: "faces",
      },
    ];
    const searchTerm3 = "unicorn";
    const searchResult3 = [
      {
        symbol: "🦄",
        letter: "u",
        name: "unicorn",
        category: "animals",
      },
    ];

    expect(search(searchTerm1, emojis)).toEqual(searchResult1);
    expect(search(searchTerm2, emojis)).toEqual(searchResult2);
    expect(search(searchTerm3, emojis)).toEqual(searchResult3);
  });

  it(`given a partial word, returns the emoji whose name contains that word`, () => {
    const searchTerm1 = "piz";
    const searchTerm2 = "za";
    const emoji1 = [
      {
        symbol: "🍕",
        name: "pizza",
        category: "food",
      },
    ];

    const searchTerm3 = "burr";
    const searchTerm4 = "urri";
    const emoji2 = [
      {
        symbol: "🌯",
        name: "burrito",
        category: "food",
      },
    ];

    const searchTerm5 = "thun";
    const searchTerm6 = "storm";
    const emoji3 = [
      {
        symbol: "🌩",
        name: "thunderstorm",
        category: "weather",
      },
    ];

    expect(search(searchTerm1, emojis)).toEqual(emoji1);
    expect(search(searchTerm2, emojis)).toEqual(emoji1);
    expect(search(searchTerm3, emojis)).toEqual(emoji2);
    expect(search(searchTerm4, emojis)).toEqual(emoji2);
    expect(search(searchTerm5, emojis)).toEqual(emoji3);
    expect(search(searchTerm6, emojis)).toEqual(emoji3);
  });

  it(`can return multiple matches`, () => {
    const searchTerm1 = "heart";
    const emojis1 = [
      {
        symbol: "💜",
        letter: "h",
        name: "heart",
        category: '',
      },
      {
        symbol: "💔",
        name: "heartbreak",
        category: '',
      },
    ];
    const searchTerm2 = "corn";
    const emojis2 = [
      {
        symbol: "🦄",
        letter: "u",
        name: "unicorn",
        category: "animal",
      },
      {
        symbol: "🍿",
        name: "popcorn",
        category: "food",
      },
    ];
    const searchTerm3 = "bo";
    const emojis3 = [
      {
        symbol: "🤖",
        letter: "r",
        name: "robot",
        category: "faces",
      },
      {
        symbol: "🍼",
        name: "bottle",
        category: "drinks",
      },
      {
        symbol: "⛵",
        name: "boat",
        category: "vehicles",
      },
      {
        symbol: "📖",
        name: "book",
        category: "entertainment",
      },
      {
        symbol: "📓",
        name: "notebook",
        category: '',
      },
    ];

    expect(search(searchTerm1, emojis)).toEqual(emojis1);
    expect(search(searchTerm2, emojis)).toEqual(emojis2);
    expect(search(searchTerm3, emojis)).toEqual(emojis3);
  });

  it("is case-insensitive", () => {
    const searchTerm1 = "Robot";
    const searchTerm2 = "pOpCoRn";
    const searchTerm3 = "HEARTBREAK";

    const emojis1 = [
      {
        symbol: "🤖",
        letter: "r",
        name: "robot",
        category: "faces",
      },
    ];

    const emojis2 = [
      {
        symbol: "🍿",
        name: "popcorn",
        category: "food",
      },
    ];

    const emojis3 = [
      {
        symbol: "💔",
        name: "heartbreak",
        category: '',
      },
    ];

    expect(search(searchTerm1, emojis)).toEqual(emojis1);
    expect(search(searchTerm2, emojis)).toEqual(emojis2);
    expect(search(searchTerm3, emojis)).toEqual(emojis3);
  });
});