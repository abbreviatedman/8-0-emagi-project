

document.querySelector("#search form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.search.value;
  //BASE_URL = API + term(endpoint)
  //fetch(BASE_URL)
  fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) => response.json())
    //.then(console.log)
    .then((emojis) => {
      //console.log(emojis);
      if (emojis.length === 0) {
        const resultArea = document.querySelector("#search aside p");
        resultArea.textContent = `${term} can not be found`;
        document.querySelector("#search aside").classList.add("error");
      } else {
        const result = emojis.map((emoji) => emoji.symbol).join("");
        const resultArea = document.querySelector("#search aside p");
        resultArea.textContent = result;
        document.querySelector("#search aside").classList.remove("error");
        document.querySelector("#search aside").classList.add("success");
      }
    })
    .catch(() => {
      const resultArea = document.querySelector("#search aside p");
      resultArea.textContent = "Please enter a word";
      document.querySelector("#search aside").classList.add("error");
      //console.log(createErrorMessage(error))
    });
  event.target.reset();
});

document.querySelector("#random form").addEventListener("submit", (event) => {
  event.preventDefault();

  const term = event.target.category.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/categories/${term}`)
    .then((response) => response.json())
    .then((categories) => {
      const result = categories.map((category) => category.symbol).join("");
      const resultArea = document.querySelector("#random aside p");
      resultArea.textContent = result;

      document.querySelector("#random aside").classList.remove("error");
      document.querySelector("#random aside").classList.add("success");
    })
    .catch(() => {
      const resultArea = document.querySelector("#random aside p");
      resultArea.textContent = "Category not found";
      document.querySelector("#random aside").classList.add("error");
      //console.log(createErrorMessage(error))
    });
});
