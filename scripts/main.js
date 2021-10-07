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

document.querySelector("#search form").addEventListener("submit", (event) => {
  event.preventDefault();

  const term = event.target.search.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) => response.json())
    .then((emojis) => {
      if (!emojis.length) {
        throw new Error(`Not found!`);
      }
      const result = search(term, emojis)
        .map((emoji) => emoji.symbol)
        .join("");
      const resultArea = document.querySelector("#search aside p");
      resultArea.textContent = result;
      document.querySelector("#search aside").classList.remove("error");
      document.querySelector("#search aside").classList.add("success");
    })
    .catch((error) => {
      const resultArea = document.querySelector("#search aside p");
      resultArea.textContent = error;
      document.querySelector("#search aside").classList.remove("success");
      document.querySelector("#search aside").classList.add("error");
    });
  event.target.reset();
});

document.querySelector("#random form").addEventListener("submit", (event) => {
  event.preventDefault();
  const category = event.target.category.value.toLowerCase();
  fetch(`https://emagi-server-8-0.herokuapp.com/categories/${category}`)
    .then((response) => response.json())
    .then((emojis) => {
      if (event.target.category.value === "All") {
        throw new Error("Please select a category.");
      }

      const result = emojis.map((emoji) => emoji.symbol);
      const resultArea = document.querySelector("#random aside p");
      resultArea.textContent = getRandom(result);
      document.querySelector("#random aside").classList.remove("error");
      document.querySelector("#random aside").classList.add("success");
      event.target.reset();
    })
    .catch((error) => {
      const resultArea = document.querySelector("#random aside p");
      resultArea.textContent = error;
      document.querySelector("#random aside").classList.add("error");
      document.querySelector("#random aside").classList.remove("success");
    });
});

document.querySelector("#replace form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.replace.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
      if (!term.length) {
        throw new Error(`Not found!`);
      }
      const result = replace(term, emojis);
      const resultArea = document.querySelector("#replace aside p");
      resultArea.textContent = result;

      document.querySelector("#replace aside").classList.remove("error");
      document.querySelector("#replace aside").classList.add("success");
    })
    .catch((error) => {
      const resultArea = document.querySelector("#replace aside p");
      resultArea.textContent = error;
      document.querySelector("#replace aside").classList.remove("success");
      document.querySelector("#replace aside").classList.add("error");
    });
  event.target.reset();
});
