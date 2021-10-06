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
  let BASE_URL = `https://emagi-server-8-0.herokuapp.com/categories/${term}`;
  if (term === "all") {
    BASE_URL = "https://emagi-server-8-0.herokuapp.com/emojis";
  }
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((categories) => {
      const result = categories.map((category) => category.symbol);
      const resultArea = document.querySelector("#random aside p");
      resultArea.textContent = getRandom(result);

      document.querySelector("#random aside").classList.remove("error");
      document.querySelector("#random aside").classList.add("success");
    })
    .catch(() => {
      const resultArea = document.querySelector("#random aside p");
      resultArea.textContent = "Category not found";
      document.querySelector("#random aside").classList.add("error");
    });
  });

  document.querySelector("#replace form").addEventListener("submit", (event) => {
      event.preventDefault();
      
      const term = event.target.replace.value;
      fetch("https://emagi-server-8-0.herokuapp.com/emojis")
        .then((response) => response.json())
        .then((emojis) => {
          if (term.length === 0) {
            const resultArea = document.querySelector("#replace aside p");
            resultArea.textContent = "Enter a phrase";
            document.querySelector("#replace aside").classList.add("error");
            document.querySelector("#replace aside").classList.remove("success");
            
          } else { 
            const resultArea = document.querySelector("#replace aside p");
            resultArea.textContent = replace(term, emojis);
            document.querySelector("#replace aside").classList.remove("error");
            document.querySelector("#replace aside").classList.add("success");
            
          }
        })
        .catch(() => {
          const resultArea = document.querySelector("#replace aside p");
          resultArea.textContent = "Network Error";
          document.querySelector("#replace aside").classList.add("error");
        
        });
        event.target.reset();
    });
          
        

    // - [ ] After submitting, if the text area is empty, include an error message in the `.result` element.

    // - [ ] After submitting, if the text area is empty, add a class of `.error` to the `.result` element.
    
    // - [ ] After submitting, if the replacement caused nothing to be replaced, include an error message in the `.result` element.
    
    // - [ ] After submitting, if the replacement caused nothing to be replaced, add a class of `.error` to the `.result` element.
    
    // - [ ] When replacing, replace words that have punctuation directly next to them. For example, "rain," should be translated to "🌧,".
    
    // - [ ] When replacing, replace partial words with emojis. For example, "raining" should be translated to "🌧ing".
    document.querySelector("#encode form").addEventListener("submit", (event) => {
      event.preventDefault();
      
      const term = event.target.encode.value;
      fetch("https://emagi-server-8-0.herokuapp.com/emojis")
        .then((response) => response.json())
        .then((emojis) => {
          const resultArea = document.querySelector("#encode aside p");

          if(term.length === 0) {

            resultArea.textContent = "Add some text";
            document.querySelector("#encode aside").classList.add("error");
            document.querySelector("#encode aside").classList.remove("success");
          } else {
            resultArea.textContent = encode(term, emojis)
            document.querySelector("#encode aside").classList.remove("error");
            document.querySelector("#encode aside").classList.add("success");
          }

        })
        .catch(() => {
          const resultArea = document.querySelector("#encode aside p");
          resultArea.textContent = "Server error";
          document.querySelector("#replace aside").classList.add("error");
          //console.log("this is working")
        });
        event.target.reset();
      });
