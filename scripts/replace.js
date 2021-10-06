// Your replace function should go here.
const replace = (input, emojis) => {
  input = input.split(/\s/);
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < emojis.length; j++) {
      if (input[i].toLowerCase() === emojis[j].name) {
        input.splice(i, 1, emojis[j].symbol);
        console.log(emojis[j]);
      }
    }
  }
   //console.log(input);
  return input.join(" ");
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
