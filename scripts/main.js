

const emojiURL = "https://emagi-server-8-0.herokuapp.com/emojis"
const basicURL = "https://emagi-server-8-0.herokuapp.com/search/"

document.querySelector("#search form").addEventListener("submit", (event) => {

    event.preventDefault();
    const searchUrl = basicURL + event.target.search.value
    fetch(searchUrl).then((response) => response.json())
    .then((emojis) => {

        // const result = search(event.target.search.value, emojis).map((each) => each.symbol).join("")
        const result = emojis.map((each) => each.symbol).join("");
        const resultArea = document.querySelector("#search aside p")
        resultArea.textContent = result;
        document.querySelector("#search aside").classList.remove("error")
        document.querySelector('#search aside').classList.add("success");
    }).catch((error) => {

        if (event.target.search.value  === "") {
            const resultArea = document.querySelector("#search aside p")
            resultArea.textContent = `Text Box is Empty`
            document.querySelector("#search aside").classList.add("error")
            document.querySelector("#search aside").classList.remove("success")
        }
    })
    event.target.reset();
  })




// ********************** category  **********************


document.querySelector("#category form").addEventListener("submit", (event) => {
  event.preventDefault();
  const category = event.target.category.value;
  const categoryUrl = "https://emagi-server-8-0.herokuapp.com/categories/"


  if (category === "all") {
 fetch("https://emagi-server-8-0.herokuapp.com/emojis").then((response) => response.json()).then(displayCategory).catch(console.log)
 if (document.querySelector("#category aside").style.background = "var(--color-red)") {
  document.querySelector("#category aside").style.background = "var(--color-green)"
}
  }
  else if (category === "default") {

    document.querySelector("#category aside p").textContent = "Choose a category"
    document.querySelector("#category aside").classList.add("error");
    if (document.querySelector("#category aside").style.background = "var(--color-green)") {
      document.querySelector("#category aside").style.background = "var(--color-red)"
    }
  }

  else {

  fetch(categoryUrl + category).then((response) => response.json()).then(displayCategory).catch(console.log)
  if (document.querySelector("#category aside").style.background = "var(--color-red)") {
    document.querySelector("#category aside").style.background = "var(--color-green)"
  }
 
  }

  event.target.reset();
})

// for then
const displayCategory = (emojis) => {
  const getSymbol = emojis.map((emoji) => emoji.symbol)
  document.querySelector("#category aside p").textContent = getRandom(getSymbol);
  document.querySelector("#category aside").classList.add("success");
  
  return getSymbol
  
}



// ********************** replace  **********************


document.querySelector("#replace form").addEventListener("submit", (event) => {

  event.preventDefault();
  const input = event.target.replaced.value;
  
  fetch(emojiURL).then((response) => response.json()).then((emojis) => {


  document.querySelector("#replace aside p").textContent = replace2(input, emojis);
  document.querySelector("#replace aside").classList.add("success");
  document.querySelector("#replace aside").classList.remove("error")
  if (document.querySelector("#replace aside").style.background = "var(--color-red)") {
    document.querySelector("#replace aside").style.background = "var(--color-green)"
  }

  }).catch((error) => {
     if (!input) {
     document.querySelector("#replace aside p").textContent = "Please enter something"
      document.querySelector("#replace aside").classList.add("error");
      document.querySelector("#replace aside").classList.remove("success")
      if (document.querySelector("#replace aside").style.background = "var(--color-green)") {
        document.querySelector("#replace aside").style.background = "var(--color-red)"
      }
     }
  })


  event.target.reset();

})
const replace2 = (words, db) => {
// :rainrain"rainrainRaining
if (words.length === 0) {
  throw "No input"
}

const find = db.find((emoji) => words.toLowerCase().includes(emoji.name)) 
const split = words.split(" ") 
const arr = [];
  const punctuation = "`~!@#$%^&*()_-+=|\}{][?/><,.;:\'\"";
  for (const letter of split) {
    if (find) {
      arr.push(letter.toLowerCase().replace(find.name, find.symbol))
    } 
    if (arr.includes(punctuation)) {
        const find2 = db.find((emoji) => emoji.name === letter.toLowerCase()) 
       if (find2) {
        arr.push(find.symbol)
       }
       else {
          arr.push(letter)
      }
      return arr
    }
  } 
return arr
}

// ********************** encode  **********************



document.querySelector("#encode form").addEventListener("submit", (event) => {

  event.preventDefault();
  const input = event.target.encoding.value;

  fetch(emojiURL).then((response) => response.json()).then((emojis) => {

  document.querySelector("#encode aside p").textContent = encode(input, emojis);
  document.querySelector("#encode aside").classList.remove("error")
  document.querySelector("#encode aside").classList.add("success");

  if (document.querySelector("#encode aside").style.background = "var(--color-red)") {
    document.querySelector("#encode aside").style.background = "var(--color-green)"
  }
  }).catch((error) => {

    if (!input) {
      document.querySelector("#encode aside p").textContent = "Please enter something"
      document.querySelector("#encode aside").classList.remove("success");
      document.querySelector("#encode aside").classList.add("error")

      if (document.querySelector("#encode aside").style.background = "var(--color-green)") {
        document.querySelector("#encode aside").style.background = "var(--color-red)"
      }
    }

  })
  event.target.reset();
})




document.querySelector("#random form").addEventListener('submit', (event) => {
  event.preventDefault();
  const randomTerm = event.target.category.value;
  const queryRandom = document.querySelector('#random .result');
      fetch(`https://emagi-server-8-0.herokuapp.com/categories/${randomTerm}`)
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