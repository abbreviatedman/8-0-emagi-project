let baseUrl = `https://emagi-server-8-0.herokuapp.com`;

//search//
document.querySelector("#search form").addEventListener("submit", (event) => {
event.preventDefault(); //prevents reload
const term = event.target.search.value;
fetch(baseUrl + `/search/${term}`)
.then((response) => response.json()) //
.then((emojis) => {
const result = emojis.map((emoji) => emoji.symbol).join("");
const resultArea = document.querySelector("#search aside p")
resultArea.textContent = result;
document.querySelector("#search aside").classList.add("success");
event.target.reset();
})
.catch((error) => {
    const resultArea = document.querySelector("#search aside p");
    resultArea.textContent = error;
    resultArea.classList.remove("success");
    document.querySelector("#search aside").classList.add("error");
})
})    
//encode//
document.querySelector("#encode form").addEventListener("submit", (event) => {
    event.preventDefault(); //prevents reload
    fetch(baseUrl + `/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
        const term = event.target.search.value;
        const result = encode(term, emojis);
        const resultArea = document.querySelector("#encode aside p")
        resultArea.textContent = result;
        document.querySelector("#encode aside").classList.add("success");
        if (term === "") {
            resultArea.textContent = "The text field is empty.";
            document.querySelector("encode aside").classList.remove("success");
            document.querySelector("encode aside").classList.add("error");
        }
    event.target.reset();
    }) 
    .catch((error) => {
        const resultArea = document.querySelector("#encode aside p");
        resultArea.textContent = error;
        resultArea.classList.remove("success");
        document.querySelector("#encode aside").classList.add("error");
    })
})

//replace
document.querySelector("#replace form").addEventListener("submit", (event) => {
    event.preventDefault(); //prevents reload
    fetch(baseUrl + `/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
const term = event.target.replace.value;
const result = replace(term, emojis);
const resultArea = document.querySelector("#replace aside p")
resultArea.textContent = result;
document.querySelector("#replace aside").classList.add("success");
if (term === result) {
    document.querySelector("#replace aside").classList.remove("success");
    document.querySelector("#replace aside").classList.add("error");
    resultArea.textContent = "No emojis were found to replace any of those words.";
}
event.target.reset();
})
.catch((error) => {
    const resultArea = document.querySelector("#replace aside p");
    resultArea.textContent = error;
    resultArea.classList.remove("success");
    document.querySelector("#replace aside").classList.add("error");
})
})

//random
document.querySelector("#random form").addEventListener("submit", (event) => {
    event.preventDefault(); //prevents reload
    const selected = event.target.category.value;
    let endpoint =`/categories/${selected}`
    if(selected === 'ALL'){
    endpoint = `/emojis`;
    }
    fetch(baseUrl + endpoint)
    .then((response) => response.json())
    .then((emojis) => {
    let symbols = emojis.map((emoji)=> emoji.symbol);
    const result = getRandom(symbols);
    const resultArea = document.querySelector("#random aside p")
    resultArea.textContent = result;
    document.querySelector("#random aside").classList.add("success");
    event.target.reset();
    }) 
    .catch((error) => {
        const resultArea = document.querySelector("#random aside p");
        resultArea.textContent = error;
        resultArea.classList.remove("success");
        document.querySelector("#random aside").classList.add("error");
    })
})