document.querySelector("#search form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.search.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) => response.json())
    .then((emojis) => {
      if (!emojis.length) {
        const resultArea = document.querySelector("#search aside p");
        resultArea.textContent = `${term} is not found`;
        document.querySelector("#search aside").classList.add("error");
        event.target.reset();
      } else {
        const result = emojis.map((emoji) => emoji.symbol).join("");
        const resultArea = document.querySelector("#search aside p");
        resultArea.textContent = result;
        document.querySelector("#search aside").classList.remove("error");
        document.querySelector("#search aside").classList.add("success");
        event.target.reset();
      }
    });
});

document.querySelector("#encode form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.encode.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
      if (!term.length) {
        const resultArea = document.querySelector("#encode aside p");
        resultArea.textContent = "Please enter a value to replace.";
        document.querySelector("#encode aside").classList.add("error");
      } else {
        const result = encode(term, emojis);
        const resultArea = document.querySelector("#encode aside p");
        resultArea.textContent = result;
        document.querySelector("#encode aside").classList.remove("error");
        document.querySelector("#encode aside").classList.add("success");
        event.target.reset();
      }
    });
});

document.querySelector("#category form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.categories.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/categories/${term}`)
    .then((response) => response.json())
    .then((emojis) => {
      if (!emojis.length) {
        fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
          .then((response) => response.json())
          .then((emojis) => {
            const result = emojis.map((emoji) => emoji.symbol);
            const resultArea = document.querySelector("#category aside p");
            resultArea.textContent = getRandom(result);
            document.querySelector("#category aside").classList.add("success");
          });
      } else {
        const result = emojis.map((emoji) => emoji.symbol);
        const resultArea = document.querySelector("#category aside p");
        resultArea.textContent = getRandom(result);
        document.querySelector("#category aside").classList.add("success");
      }
    });
});

document.querySelector("#replace form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.replace.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
      const result = replace(term, emojis);
      if (!term.length) {
        const resultArea = document.querySelector("#replace aside p");
        resultArea.textContent = "Please enter a value to replace.";
        document.querySelector("#replace aside").classList.add("error");
      } else {
        const resultArea = document.querySelector("#replace aside p");
        resultArea.textContent = result;
        document.querySelector("#replace aside").classList.remove("error");
        document.querySelector("#replace aside").classList.add("success");
      }
    });
  event.target.reset();
});
