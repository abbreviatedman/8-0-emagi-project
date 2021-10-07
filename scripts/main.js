//Selects article by its class to get to first <form>, adds an eventListener which prevents page from being reloaded when form submitted
document.querySelector("#search form").addEventListener("submit", (event) => {
  event.preventDefault();
  //Term represents the target of this forms event.search is a server side method.value is the user input
  const term = event.target.search.value;
  //BASE_URL = API + term(endpoint)
  //fetch(BASE_URL)
  fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
  //Then if response is fulfilled, parse response into json file
    .then((response) => response.json())
    //Then look into another array/object
    .then((emojis) => {
      //If the length of array is zero...
      if (emojis.length === 0) {
        //Used a class but I could've used (#aside p) to select this part of the <article> 
        const resultArea = document.querySelector("#search aside p");
        //Text to be displayed in this <p>, adds a class (#error) to this <aside>
        resultArea.textContent = `${term} can not be found`;
        document.querySelector("#search aside").classList.add("error");
      
      } else {
        
        //If array is not empty... loop thru array and return a symbol back as a string, w'out comma's if more than one symbol fills array
        const result = emojis.map((emoji) => emoji.symbol).join("");
        //Selects article by class, <aside> <p>, the displays result inside <p>
        const resultArea = document.querySelector("#search aside p");
        resultArea.textContent = result;
        //Selects <article> by class, remove class id of error and adds #success
        document.querySelector("#search aside").classList.remove("error");
        document.querySelector("#search aside").classList.add("success");
      }
    })
    //...if length is equal to zero, catch clause 
    .catch(() => {
      const resultArea = document.querySelector("#search aside p");
      resultArea.textContent = "Please enter a word";
      document.querySelector("#search aside").classList.add("error");
    });
    //Resets form after submitting user input
  event.target.reset();
});
      
//Selects article by its class to get to next <form>, adds an eventListener which prevents page from being reloaded when form submitted
document.querySelector("#random form").addEventListener("submit", (event) => {
  event.preventDefault();
  //Term represents the target of this forms event...category.value is this API's endpoint
  const term = event.target.category.value;
  //API use for specific category
  let BASE_URL = `https://emagi-server-8-0.herokuapp.com/categories/${term}`;
  if (term === "all") {
    //API use for all categories
    BASE_URL = "https://emagi-server-8-0.herokuapp.com/emojis";
  }
  //Get API 
  fetch(BASE_URL)
  //Then if response is fulfilled, parse into json file
    .then((response) => response.json())
    //Then loop thru categories object and return/display symbol for that category
    .then((categories) => {
      const result = categories.map((category) => category.symbol);
      const resultArea = document.querySelector("#random aside p");
      
      resultArea.textContent = getRandom(result);
      document.querySelector("#random aside").classList.remove("error");
      document.querySelector("#random aside").classList.add("success");
    })
    //If error occurs, catch 
    .catch(() => {
      const resultArea = document.querySelector("#random aside p");
      resultArea.textContent = "System error";
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
        });
        event.target.reset();
      });


