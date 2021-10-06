//const emojis = require("../tests/emojis");

// You encode function should go here.
const encode = (term, emojis) => {
  const termArr = term.toLowerCase().split("");
  //console.log(termArr);
  let arr = [];
  for (let letter of termArr) {
    if (letter.toUpperCase() === letter) {
      arr.push(letter);
    }
    for (let emoji of emojis) {
      if (letter === emoji.letter) {
        arr.push(emoji.symbol);
      }
    }
  }
  return arr.join("");
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
