// Your replace function should go here.
const replace = (inputWord, emojis) => {
const foundEmoji = emojis.find((foundEmoji) => 
foundEmoji.name === inputWord.toLowerCase());
  if(!foundEmoji) {
  return inputWord;
  }
  return foundEmoji.symbol;
  }

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
