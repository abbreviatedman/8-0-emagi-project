// Your replace function should go here.
const search = (term, emojis) => {
return emojis.filter((emoji) => emoji.name === term.toLowerCase())
}
const replace = (input, emojis) => {
  return input.split(/\s/).map((term) => {
    const emoji = search(term, emojis)
    if(emoji.length === 0) {
      return term
    }
    return emoji[0].symbol
  }).join(" ")
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
