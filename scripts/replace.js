// Your replace function should go here.
const replace = (userInput, emojis) => {
  if (userInput.length === 0) {
    throw "Input cannot be empty";
  }

  userInput = userInput.split(' ');
  let result = '';
  let hasEmoji = false;

  for (let i = 0; i < userInput.length; i++) {
    for (let j = 0; j < emojis.length; j++) {
      if (userInput[i].toLowerCase().includes(emojis[j].name)) {
        const word = emojis[j].name;
        const symbol = emojis[j].symbol;
        result += symbol + userInput[i].slice(word.length)
        hasEmoji = true;
        break;
      } 
    }
    if (!result.includes(userInput[i]) && !hasEmoji) {
      if (userInput.length - 1 === i) {
        result += userInput[i]
      } else {
        result += userInput[i] + " ";
      }
    }
  }
  console.log(result.split(''));
  return result
}

console.log(replace('help',
  [{
    "symbol": "🌧",
    "letter": "r",
    "name": "rain",
    "category": "weather"
  },
  {
    "symbol": "👶",
    "letter": "b",
    "name": "baby",
    "category": "faces"
  },
  {
    "symbol": "🌵",
    "letter": "c",
    "name": "cactus",
    "category": ""
  }]
))

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
