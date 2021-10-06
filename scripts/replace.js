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