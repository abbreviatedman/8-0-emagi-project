document.querySelector('#encode form').addEventListener('submit', (event) => {
  event.preventDefault();
  const phrase = event.target.encode.value;
  const resultArea = document.querySelector('#encode-result p');
  fetch('https://emagi-server-8-0.herokuapp.com/emojis')
    .then((response) => {
      //used to immediately catch the error of empty text field
      if (phrase.length === 0) {
        throw new Error('Text to encode box must not be empty');
      }
      return response.json();
    })
    .then((emojis) => {
      //we are filtering here because we only want emojis with letters in our map later
      emojis = emojis.filter(({ letter }) => letter);
      //reduce method to get encode key/value pairs
      const emojiMap = emojis.reduce((emojiMap, { letter, symbol }) => {
        emojiMap[letter] = symbol;
        return emojiMap;
      }, {});

      const regex = /[a-z]/gi;
      const result = phrase.replace(regex, (match) => {
        return emojiMap[match];
      });
      resultArea.textContent = result;

      resultArea.parentNode.setAttribute('class', 'success');
      event.target.reset();
    })
    .catch((error) => {
      resultArea.parentNode.setAttribute('class', 'error');
      resultArea.lastChild.textContent = error;
    });
});

document.querySelector('#search form').addEventListener('submit', (event) => {
  event.preventDefault();
  const term = event.target.search.value || '';
  const resultArea = document.querySelector('#search-result p');
  fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) => {
      if (response.status === 404)
        throw new Error('Text to search box must not be empty');
      return response.json();
    })
    .then((emojis) => {
      const result = emojis.map(({ symbol }) => symbol).join('\n');
      resultArea.textContent = result;
      //change background of the search-result aside
      resultArea.parentNode.setAttribute('class', 'success');
      event.target.reset();
    })
    .catch((error) => {
      resultArea.parentNode.setAttribute('class', 'error');
      resultArea.lastChild.textContent = error;
    });
});

document.querySelector('#random form').addEventListener('submit', (event) => {
  event.preventDefault();
  const term = event.target.random.value.toLowerCase(); //get drop downs current value
  const resultArea = document.querySelector('#random-result p');
  const url =
    term === 'all'
      ? `https://emagi-server-8-0.herokuapp.com/emojis`
      : `https://emagi-server-8-0.herokuapp.com/emojis?category=${term}`;
  fetch(url)
    .then((response) => {
      if (term === 'default') throw new Error('Must Select a category.');
      return response.json();
    })
    .then((emojis) => {
      const emojisMapped = emojis.map(({ symbol }) => symbol);
      const randomEmoji = getRandom(emojisMapped);
      resultArea.textContent = randomEmoji;

      //change background of the search-result aside
      resultArea.parentNode.setAttribute('class', 'success');
      event.target.reset();
    })
    .catch((error) => {
      resultArea.parentNode.setAttribute('class', 'error');
      resultArea.lastChild.textContent = error;
    });
});

document.querySelector('#replace form').addEventListener('submit', (event) => {
  event.preventDefault();
  let phrase = event.target.replace.value;
  const resultArea = document.querySelector('#replace-result p');
  fetch('https://emagi-server-8-0.herokuapp.com/emojis')
    .then((response) => {
      if (phrase.length === 0) {
        throw new Error('Must type in a phrase or sentence');
      }
      return response.json();
    })
    .then((emojis) => {
      return emojis.reduce((emojiMap, { name, symbol }) => {
        emojiMap[name] = symbol;
        return emojiMap;
      }, {});
    })
    .then((emojiMap) => {
      //iterate through object
      for (const prop in emojiMap) {
        //if string includes objects name
        if (phrase.includes(prop)) {
          const regex = new RegExp(prop, 'ig');
          phrase = phrase.replace(regex, emojiMap[prop]);
        }
      }
      resultArea.textContent = phrase;

      resultArea.parentNode.setAttribute('class', 'success');
      event.target.reset();
    })
    .catch((error) => {
      resultArea.parentNode.setAttribute('class', 'error');
      resultArea.lastChild.textContent = error;
    });
});
