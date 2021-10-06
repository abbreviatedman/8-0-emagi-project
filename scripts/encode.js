// You encode function should go here.
const encode = (string, emojis) => {
  const letterToEmoji = [] //created a new arr

  string.split("").forEach((character) => {
const match = emojis.find((emoji) => emoji.letter === character.toLowerCase());
    if (!match) { //if letters dont match the emoji
      return letterToEmoji.push(character);
    }

    return letterToEmoji.push(match.symbol);
  }); //if letters match, push emoji
    
  return letterToEmoji.join(""); //removes comma between emojis
};
// DON'T TOUCH BELOW!
// If you haven't made the function yet, this check makes sure other tests can still run.
if (typeof encode === "undefined") {
  encode = undefined;
}

// This check makes sure to export the file only if we're running tests in the terminal.
// If you try to use `module.exports` in the browser, you'll get a logged error.
// It won't break anything, but it's easy to confuse it with a serious error.
if (typeof module !== "undefined") {
  module.exports = encode;
}
