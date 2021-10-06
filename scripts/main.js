document.querySelector("#search form").addEventListener("submit", (event) => {
    event.preventDefault();
    const term = event.target.search.value;
    const AllEmojis = `https://emagi-server-8-0.herokuapp.com/search/${term}`;
fetch(AllEmojis)
.then((response) => response.json())
.then((emojis) => {
    if (emojis.length === 0) {
        const resultArea = document.querySelector("#search aside p")
        resultArea.textContent = `${term} is not found...`
        document.querySelector("#search aside").classList.add("error")
    }
    else {
        const result = emojis.map((emoji) => emoji.symbol).join("");
        const resultArea = document.querySelector("#search aside p")
        resultArea.textContent = result;
        document.querySelector("#search aside").classList.remove("error")
        document.querySelector("#search aside").classList.add("success")
    }})
    .catch(() => {
        document.querySelector("#search aside").classList.add("error")
        const resultArea = document.querySelector("#search aside p")
        resultArea.textContent = "Enter valid input..."
    })
    event.target.reset();
})


    // <-----------------------------------------------------------------------> //


document.querySelector("#random form").addEventListener("submit", (event) => {
    event.preventDefault();
    const selection = event.target.category.value;
    let selectCategories = `https://emagi-server-8-0.herokuapp.com/categories/${selection}`;
if (selection === 'all') {
    selectCategories = "https://emagi-server-8-0.herokuapp.com/emojis/"
    }
fetch(selectCategories)
.then((response) => response.json())
.then((categories) => {
    const result = categories.map((category) => category.symbol);
    const resultArea = document.querySelector("#random aside p")
    resultArea.textContent = getRandom(result);
    document.querySelector("#random aside").classList.remove("error")
    document.querySelector("#random aside").classList.add("success")
    })
.catch(() => {
    document.querySelector("#random aside").classList.add("error")
    const resultArea = document.querySelector("#random aside p")
    resultArea.textContent = "Category not found..."
    })
    event.target.reset();
})


    // <-----------------------------------------------------------------------> //


document.querySelector("#replace form").addEventListener("submit", (event) => {
    event.preventDefault();
    const sentence = event.target.replace.value;
    const foundEmojis = `https://emagi-server-8-0.herokuapp.com/emojis/`;
fetch(foundEmojis)
.then((response) => response.json())
.then((emojis) => {
    const resultArea = document.querySelector("#replace aside p")
    resultArea.textContent = replace(sentence, emojis)
    document.querySelector("#replace aside").classList.add("success")
    document.querySelector("#replace aside").classList.remove("error")
if (resultArea.textContent.includes(sentence)) {
    document.querySelector("#replace aside").classList.remove("success")
    document.querySelector("#replace aside").classList.add("error")
    resultArea.textContent = "Emoji not found..."
    }
if (sentence.length === 0) {
    document.querySelector("#replace aside").classList.remove("success")
    document.querySelector("#replace aside").classList.add("error")
    resultArea.textContent = "No input found..."
    }
})
    event.target.reset();
}) 


    // <-----------------------------------------------------------------------> //


document.querySelector("#encode form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.target.encode.value;
    const encoder = "https://emagi-server-8-0.herokuapp.com/emojis/"
fetch(encoder)
.then((response) => response.json())
.then((emojis) => {
    const resultArea = document.querySelector("#encode aside p")
    if (input.length === 0 || input === " ") {
        document.querySelector("#encode aside").classList.remove("success")
        document.querySelector("#encode aside").classList.add("error")
        resultArea.textContent = "No input found..."
    } else {
        resultArea.textContent = encode(input, emojis)
        document.querySelector("#encode aside").classList.remove("error")
        document.querySelector("#encode aside").classList.add("success")
    }
})
    event.target.reset();
})