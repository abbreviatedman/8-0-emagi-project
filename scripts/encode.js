// You encode function should go here.
const encode = (userInput, emojis) => {
  if (userInput.length === 0) {
    throw "Your input is empty";
  }

  userInput = userInput.split('');

  for (let i = 0; i < userInput.length; i++) {
    for (let j = 0; j < emojis.length; j++ ) {
      if (emojis[j].letter === userInput[i].toLowerCase()) {
        userInput[i] = emojis[j].symbol;
      } 
    }
  }
  return userInput.join('')
}

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


const words = 'watering'
function replaceAll(search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};

console.log(replaceAll('water', 'pater'))