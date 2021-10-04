const replace = (word, emojis) => {
  const emoji = emojis.find((emoji) => emoji.name === word.toLowerCase());
  if (!emoji) {
    return word;
  }

  return emoji.symbol;
};

// Don't touch below!

// Make sure to export the file only if we're running tests in the terminal.
if (typeof module !== "undefined") {
  module.exports = replace;
}
