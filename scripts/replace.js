// Your replace function should go here.
const replace = (phrase, emojis) => {
  const message = []

  phrase
  .split(" ")
  .forEach((word) => {
    const match = emojis.find((emoji) => emoji.name === word.toLowerCase());
    if (!match) {
      return message.push(word);
    }
    
    return message.push(match.symbol);
  })

  return message.join(" ");
};
// DON'T TOUCH BELOW!
// If you haven't made the function yet, this check makes sure other tests can still run.
if (typeof replace === "undefined") {
  replace = undefined;
}

// This check makes sure to export the file only if we're running tests in the terminal.
// If you try to use `module.exports` in the browser, you'll get a logged error.
// It won't break anything, but it's easy to confuse it with a serious error.
if (typeof module !== "undefined") {
  module.exports = replace;
}
