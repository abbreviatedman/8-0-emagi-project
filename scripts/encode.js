// You encode function should go here.

const encode = (term, emojis) => {
  const termSplit = term.toLowerCase().split("");
  const arr = [];

  let i = 0;
  let check = 0;

  termSplit.forEach((ltr) => {
    for (const emoji of emojis) {
      if (ltr === emoji.letter) {
        arr[i] = emoji.symbol;
        check = 1;
      } else if (ltr !== emoji.letter && check === 0) {
        arr[i] = ltr;
      }
    }
    check = 0;
    i += 1;
  });
  return arr.join("");
};
// return emojis.filter((emoji) => emoji.letter.includes(term.toLowerCase()));

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
