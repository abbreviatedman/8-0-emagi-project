const BASE_URL = "https://emagi-server-8-0.herokuapp.com/emojis"

const queryReplace = document.querySelector("#replace .result");
const querySearch = document.querySelector('#search .result');
const queryRandom = document.querySelector('#random .result');
const queryEncode = document.querySelector("#encode .result");


const userInputResult = (result, resultSection) => {
  resultSection.querySelector('p').textContent = result;
  resultSection.classList.remove('error');
  resultSection.classList.add('success');
}
// This section add classList to our <p>, adds error and success inputs. 
const inputError = (result, resultSection) => {
resultSection.querySelector('p').textContent = result; 
resultSection.classList.remove('success');
resultSection.classList.add('error');           
};

// SEARCH SOLUTION
//This Section should "search" through emojis based in input. (We worked on this section with Colin)
document.querySelector('#search, form').addEventListener('submit', (event) => {
  event.preventDefault();
  const querySearch = document.querySelector('#search .result');
    const searchTerm = event.target.search.value;
    const searchUrl = `https://emagi-server-8-0.herokuapp.com/search/${searchTerm}`
    fetch(searchUrl)
    .then((response) => response.json())
    .then((emojis) => {
        const searchResult = search(searchTerm, emojis)
        .map((emoji) => emoji.symbol)
        .join('')
    if (searchResult){
        userInputResult(searchResult, querySearch);
    }else{
        inputError(`${searchTerm} cannot be found`, querySearch)
    }
    event.target.reset();
    })
    .catch((error) => {
        inputError(error, querySearch);
        event.target.reset();
    })
})

// RANDOMIZE/CATEGORY SOLUTION
document.querySelector("#random form").addEventListener('submit', (event) => {
  event.preventDefault();
  const randomTerm = event.target.category.value;
  const categoryUrl = `https://emagi-server-8-0.herokuapp.com/categories/${randomTerm}`
      fetch(categoryUrl)
      .then((response) => response.json())
      .then((emojis) => {
      const categoryResult = randomTerm !== "all" 
      ? getCategory(randomTerm, emojis)
      : emojis
      const randomResult = getRandom(categoryResult).symbol;
      userInputResult(randomResult, queryRandom)
      })
      .catch((error) => {
          inputError(error, queryRandom)
      })
  })

//REPLACE SOLUTION
//ADDED CLASSLIST ON FUNCTION DUE TO ERROR MESSAGES NOT PRINTING OUT!!
document.querySelector("#replace form").addEventListener("submit", (event) => {
  event.preventDefault();
  const replaceTerm = event.target.replace.value;
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((emojis) => {
      if (!replaceTerm.length) {
        throw new Error(`Not found!`);
      }
      const replaceResult = replace(replaceTerm, emojis);
      const resultArea = document.querySelector("#replace aside p");
      resultArea.textContent = replaceResult;

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

  // ENCODE SOLUTION
document.querySelector("#encode form").addEventListener("submit", (event) => {
  event.preventDefault();
  const encodeTerm = event.target.encode.value;
  fetch(BASE_URL)
  .then((response) => response.json())
  .then((emojis) => {
if (encodeTerm === "") {
  inputError("Please enter a valid entry.", queryEncode)
  event.target.reset()
}
const encodeResult = encode(encodeTerm, emojis)
userInputResult(encodeResult, queryEncode)
event.target.reset()
  })
  .catch((error) => {
      inputError(error, queryEncode)
      event.target.reset()
  })
})