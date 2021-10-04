const encode = (str, emojis) => {
  return str
    .toLowerCase()
    .split("")
    .map((char) => {
      const emoji = emojis.find((emoji) => emoji.letter === char);
      if (!emoji) {
        return char;
      }

      return emoji.symbol;
    })
    .join("");
};

// Don't touch below!

// Make sure to export the file only if we're running tests in the terminal.
if (typeof module !== "undefined") {
  module.exports = encode;
}
