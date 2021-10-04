const baseUrl = "https://emagi-server-8-0.herokuapp.com";

document.querySelector("#search form").addEventListener("submit", (event) => {
    event.preventDefault();
    const term = event.target.search.value;
    fetch(baseUrl + `/search/${term}`)
        .then((response) => response.json())
        .then((emojis) => {
            const result = emojis.map((emoji) => emoji.symbol).join("");
            const resultArea = document.querySelector("#search aside p")
            resultArea.textContent = result;
            document.querySelector("#search aside").classList.add("success");
        })
})