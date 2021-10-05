//Search
document.querySelector("#search form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.search.value;
  if (!term) {
    document.querySelector("#search aside p").textContent =
      "Error: no text entered";
    document.querySelector("#search aside").classList.add("error");
  }
  fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) =>
      response.json().then((emojis) => {
        // const term = event.target.search.value;
        const result = emojis.map((emoji) => emoji.symbol).join("\n");
        const resultArea = document.querySelector("#search aside p");
        resultArea.textContent = result;
        document.querySelector("#search aside").classList.add("success");
        //allows the box to change back from error
        document.querySelector("#search aside").classList.remove("error");
        document.search_form.reset();
      })
    )
    .catch(console.log);
});
//display category
document.querySelector("#category form").addEventListener("submit", (event) => {
  event.preventDefault();
  const category = event.target.category_select.value;
  fetch(`https://emagi-server-8-0.herokuapp.com/categories/${category}`)
    .then((response) => {
      response.json().then((emojis) => {
        const result = emojis.map((emoji) => emoji.symbol).join(" ");
        document.querySelector("#category aside p").textContent = result;
        document.querySelector("#category aside").classList.add("success");
      });
    })
    .catch(console.log);
});

//random select from category
document
  .querySelector("#random_category form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const category = event.target.rand_cat_sel.value;
    fetch(`https://emagi-server-8-0.herokuapp.com/categories/${category}`)
      .then((response) => {
        response.json().then((emojis) => {
          const result = emojis.map((emoji) => emoji.symbol);
          document.querySelector("#random_category aside p").textContent =
            getRandom(result);
          document
            .querySelector("#random_category aside")
            .classList.add("success");
        });
      })
      .catch(console.log);
  });
