document.querySelector("#encode form").addEventListener("submit", (event) => {
    event.preventDefault();
    const term = event.target.encode.value;
    fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
      .then((response) => response.json())
      .then((emojis) => {
        if (!term.length) {
          throw new Error(`Not found!`);
        }
        const result = encode(term, emojis);
        const resultArea = document.querySelector("#encode aside p");
        resultArea.textContent = result;
        console.log(result);
  
        document.querySelector("#encode aside").classList.remove("error");
        document.querySelector("#encode aside").classList.add("success");
      })
      .catch((error) => {
        const resultArea = document.querySelector("#encode aside p");
        resultArea.textContent = error;
        document.querySelector("#encode aside").classList.remove("success");
        document.querySelector("#encode aside").classList.add("error");
      });
    event.target.reset();
  });


document.querySelector("#search form")
.addEventListener('submit', (event) => {
    event.preventDefault();

    const term = event.target.search.value;
    fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) => response.json())
    .then((emojis) => {
        if (!emojis.length){
            throw new Error(`Not found!`);
            //throw new Error(`${term} not found!`)
        }

        const result = search(term, emojis)
            .map((emoji) => emoji.symbol)
            .join('')
        const resultArea = document.querySelector('#search aside p');
        resultArea.textContent = result;
        document.querySelector('#search aside').classList.add('success');
        document.querySelector('#search aside').classList.remove('error');
    })
    .catch((error) => {
        const resultArea = document.querySelector('#search aside p');
        resultArea.textContent = error;
        document.querySelector('#search aside').classList.add('error');
        document.querySelector('#search aside').classList.remove('success');
    });
    event.target.reset();
});


document.querySelector("#random form").addEventListener('submit', (event) => {
    event.preventDefault();

    const category = event.target.category.value.toLowerCase();
    fetch(`https://emagi-server-8-0.herokuapp.com/categories/${category}`)
    .then((response) => response.json())
    .then((emojis) => {
        if (event.target.category.value === "All") {
            throw new Error('Please select a category.'); 
        }

        const result = emojis.map((emoji) => emoji.symbol);
            const resultArea = document.querySelector('#random aside p');
            resultArea.textContent = getRandom(result);
            document.querySelector('#random aside').classList.add('success');
            document.querySelector('#random aside').classList.remove('error');
            event.target.reset();
        })
        .catch((error) => {
            const resultArea = document.querySelector('#random aside p');
            resultArea.textContent = error;
            document.querySelector('#random aside').classList.add('error');
            document.querySelector('#random aside').classList.remove('success');
        });
});


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


