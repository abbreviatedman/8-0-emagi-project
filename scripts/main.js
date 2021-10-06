//Search
document.querySelector("#search form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.search.value;
  if (!term) {
    document.querySelector("#search aside p").textContent =
      "Error: no text entered";
    document.querySelector("#search aside").classList.add("error");
    document.querySelector("#search aside").classList.remove("success");
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
    let url = "";
    if (category === "all") {
      url = `https://emagi-server-8-0.herokuapp.com/emojis`;
    } else {
      url = `https://emagi-server-8-0.herokuapp.com/categories/${category}`;
    }
    fetch(url)
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

//Replace
document.querySelector("#replace form").addEventListener("submit", (event) => {
  event.preventDefault();
  let text = event.target.replace.value;
  console.log(text);
  const startingText = text;
  if (!text) {
    document.querySelector("#replace aside p").textContent =
      "Error: no text entered";
    document.querySelector("#replace aside").classList.add("error");
    document.querySelector("#replace aside").classList.remove("success");
  } else {
    fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
      .then((response) =>
        response.json().then((emojis) => {
          emojis.forEach((emoji) => {
            text = text.toLowerCase().replace(emoji.name, emoji.symbol);
          });
          document.querySelector("#search aside").classList.remove("success");

          const resultArea = document.querySelector("#replace aside p");
          resultArea.textContent = text;
          if (text === startingText) {
            resultArea.textContent += `\n\n**No text was moddified**`;
          }
          document.querySelector("#replace aside").classList.add("success");
          document.querySelector("#replace aside").classList.remove("error");
          document.search_form.reset();
        })
      )
      .catch(console.log);
  }
});

//Encode

// fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
//   .then((response) => {
//     response.json().then((emojis) => {
//   const emojiList = emojis.filter((emoji) =>
// "qwertyuiopasdfghjklzxcvbnm".includes(emoji.letter)
//       );
//       console.log(emojiList);
//     });
//   })
//   .catch(console.log);
//
document.querySelector("#encode form").addEventListener("submit", (event) => {
  event.preventDefault();
  const text = event.target.encode.value;
  if (!text) {
    document.querySelector("#encode aside p").textContent =
      "Error: no text entered";
    document.querySelector("#encode aside").classList.add("error");
    document.querySelector("#encode aside").classList.remove("success");
  } else {
    fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
      .then((response) =>
        response.json().then((emojis) => {
          const emojiList = emojis.filter((emoji) =>
            "qwertyuiopasdfghjklzxcvbnm".includes(emoji.letter)
          );

          const resultArea = document.querySelector("#encode aside p");
          //seems to auto format spaces to be a single space
          resultArea.textContent = encode(text, emojiList);
          document.querySelector("#encode aside").classList.add("success");
          //allows the box to change back from error
          document.querySelector("#encode aside").classList.remove("error");
          document.encode_form.reset();
        })
      )
      .catch(console.log);
  }
});
