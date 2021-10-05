document.querySelector("#search form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.search.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) =>
      response.json().then((emojis) => {
        // const term = event.target.search.value;
        const result = emojis.map((emoji) => emoji.symbol).join("\n");
        const resultArea = document.querySelector("#search aside p");
        resultArea.textContent = result;
        document.querySelector("#search aside").classList.add("success");
      })
    )
    .catch(console.log);
});

document.querySelector("#category form").addEventListener("submit", (event) => {
  event.preventDefault();
  const category = event.target.category_select.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/categories/${category}`)
    .then((response) => {
      response.json().then((emojis) => {
        const result = emojis.map((emoji) => emoji.symbol).join("");
        document.querySelector("#category aside p").textContent = result;
        document.querySelector("#category aside").classList.add("success");
      });
    })
    .catch(console.log);
});
