// You encode function should go here.
// const encode = (term, emojis) => {
//   return emojis.filter((emoji) => emoji.name.includes(term.toLowerCase()));
// };

const encode = (input, emojis) => {
  console.log(input);
  sentence = input.split("")
  return sentence.map(char => {

    if(/[\W\d]/.test(char)) {
      return char
    }
    return emojis.find(emoji => emoji.letter === char.toLowerCase()).symbol
  }).join("")
}
   


   
  // if (emoji.category === category) {
  //   return emoji.symbol

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
