const baseUrl = "https://emagi-server-8-0.herokuapp.com";

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
    }) 
})

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
    }) 
})
