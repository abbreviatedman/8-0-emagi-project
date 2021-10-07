// Your replace function should go here.
const replace = (term, emojis) => {
  const termSplit = term.toLowerCase().split(" ");
  const arr = [];
  console.log(termSplit);
  let i = 0;
  let check = 0;

  termSplit.forEach((word) => {
    for (const emoji of emojis) {
      if (word === emoji.name) {
        arr[i] = emoji.symbol;
        check = 1;
      } else if (word !== emoji.name && check === 0) {
        arr[i] = word;
      }
    }
    check = 0;
    i += 1;
  });
  return arr.join(" ");
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
