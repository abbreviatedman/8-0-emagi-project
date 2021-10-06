document.querySelector("#search form").addEventListener("submit", (event) => {
    event.preventDefault();
    const term = event.target.search.value;
    fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
        .then((response) => response.json())
        .then((emojis) => {
            const result = emojis.map((emoji) => emoji.symbol).join("");
            const resultArea = document.querySelector("#search aside p")
            resultArea.textContent = result;
            document.querySelector("#search aside").classList.add("success");
        })
})

document.querySelector("#encode form").addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
            const term = event.target.search.value;
            const result = encode(term, emojis);
            const resultArea = document.querySelector("#encode aside p");
            resultArea.textContent = result;
            document.querySelector("#encode aside").classList.add("success");
        })
})