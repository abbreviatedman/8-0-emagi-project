// const replace = require("./replace");

// select 'form'
document
  .querySelector("#search form")
  // lister for 'submit' event
  .addEventListener("submit", (event) => {
    // when the event has occurred, prevent the page from reloading
    event.preventDefault();
    // 'form's' search's value... search is server side method? value is user input
    const term = event.target.search.value;
    // fetch the API url
    fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
      // then convert JSON into JS
      .then((response) => response.json())
      // then pass a callback that...
      .then((emojis) => {
        if (emojis.length === 0) {
          console.log('emoji is not found');
          document.querySelector('#search aside p').textContent = 'emoji is not found';
          const textAreaError = document.querySelector("#search aside");
          textAreaError.classList.add("error");
        } else {
          // returns the emoji's symbol as a string (without commas for multiple emojis)
          const result = emojis.map((emoji) => emoji.symbol).join("");
          // 'p' tag inside 'aside' inside '#search' is selected and stored in a constant 'resultArea'
          const resultArea = document.querySelector("#search aside p");
          // 'resultAreas's' content is 'result' / the relevant emoji(s)
          resultArea.textContent = result;
          // 'aside' is selected and added a class 'success'
          document.querySelector("#search aside").classList.add("success");
          // removes persistent error background color
          document.querySelector("#search aside").classList.remove("error");
        } 
      })
      // when and if there's an error, select 'aside' tag, and a class 'error'
      .catch(() => {
        const resultArea2 = document.querySelector("#search aside p");
        resultArea2.textContent = `${term} is not found`;
        document.querySelector("#search aside").classList.add("error");
      });
      // After submitting, if the search was successful, clear out the text field
      event.target.reset();
  });

  
//calling event listener on the randomize button
document.querySelector("#random form").addEventListener("submit", (event) => {

  //stops the default behaviour of form 
event.preventDefault();
//storing user input
  const userCategory = event.target.category.value;
//API url for individual category
  let url = `https://emagi-server-8-0.herokuapp.com/categories/${userCategory}`;
   //selection for all categories  API
  if (userCategory === "all") {
    url = `https://emagi-server-8-0.herokuapp.com/emojis`;
  }

  fetch(url) // request data from API url
    .then((response) => response.json()) // if data received, it converted to json data
    .then((emojis) => {
      const emojiSymbols = emojis.map((emoji) => emoji.symbol);
      const result = getRandom(emojiSymbols);

      const resultArea = document.querySelector("#random aside p");
      resultArea.textContent = result;
      document.querySelector("#random aside").classList.add("success");
      
    })
    .catch(console.log);
});

//replace feature
document.querySelector("#replace form").addEventListener("submit", (event) => {
  event.preventDefault();
  const userText = event.target.replace.value;

  fetch("https://emagi-server-8-0.herokuapp.com/emojis")
    .then((response) => response.json())
    .then((emojis) => {
      const toReplace = replace(
        userText,
        emojis);
      // console.log(toReplace, userText);
      document.querySelector("#replace aside p").textContent = toReplace;
        const textArea = document.querySelector("#replace aside");
        textArea.classList.add("success");
        textArea.classList.remove("error");

        event.target.reset();
      })
    .catch((error) => {
    document.querySelector("#replace aside p").textContent = error;
    const textArea = document.querySelector("#replace aside");
    textArea.classList.add("error");
  });
});

//Encode feature
document.querySelector('#encode form').addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = event.target.encode.value;
  
    fetch("https://emagi-server-8-0.herokuapp.com/emojis")
      .then((response) => response.json())
      .then((emojis) => {
        document.querySelector('#encode aside p').textContent = encode(userInput, emojis);
        const textArea = document.querySelector("#encode aside");
        textArea.classList.add("success");
        textArea.classList.remove("error");
  
        event.target.reset();
      })
      .catch((error) => {
        document.querySelector("#encode aside p").textContent = error;
        const textArea = document.querySelector("#encode aside");
        textArea.classList.add("error");
      })
  })