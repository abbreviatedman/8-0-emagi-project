document.querySelector("#encode form").addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
        const term = event.target.search.value;
        const result = encode(term, emojis);
        const resultArea = document.querySelector("#encode aside p");
        resultArea.textContent = result;
        document.querySelector("#encode aside").classList.remove("error")
        document.querySelector("#encode aside").classList.add("success");
        if (term === "") {
            resultArea.textContent = "Please enter a value to encode.";
            document.querySelector("#search aside").classList.remove("success");
            document.querySelector("#encode aside").classList.add("error");
        }
        event.target.reset();
    })
    .catch((error) => {
        const resultArea = document.querySelector("#encode aside p");
        resultArea.textContent = error;
        document.querySelector("#search aside").classList.remove("success");
        document.querySelector("#encode aside").classList.add("error");
    })
})

document.querySelector("#search form").addEventListener("submit", (event) => {
    event.preventDefault();
    const term = event.target.search.value;
    fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
        .then((response) => response.json())
        .then((emojis) => {
            const result = emojis.map((emoji) => emoji.symbol).join("");
            const resultArea = document.querySelector("#search aside p")
            resultArea.textContent = result;
            document.querySelector("#search aside").classList.remove("error");
            document.querySelector("#search aside").classList.add("success");

            if (term === "") {
                resultArea.textContent = "Please enter a value to search for.";
                document.querySelector("#search aside").classList.remove("success");
                document.querySelector("#search aside").classList.add("error");
                event.target.reset();
            }
            event.target.reset();
        })
        .catch((error) => {
            const resultArea = document.querySelector("#search aside p")
            resultArea.textContent = error;
            document.querySelector("#search aside").classList.remove("success");
            document.querySelector("#search aside").classList.add("error");
        })
})

document.querySelector("#random form").addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = event.target.category.value;
    let url = `https://emagi-server-8-0.herokuapp.com/categories/${selected}`
    if (selected === "All") {
        url = "https://emagi-server-8-0.herokuapp.com/emojis"
    } 
    fetch(url)
    .then((response) => response.json())
    .then((emojis) => {
        const emoji = emojis.map((emoji) => emoji.symbol);
        const result = getRandom(emoji)
        const resultArea = document.querySelector("#random aside p");
        resultArea.textContent = result;
        document.querySelector("#random aside").classList.remove("error");
        document.querySelector("#random aside").classList.add("success");
        event.target.reset();
    })
    .catch((error) => {
        const resultArea = document.querySelector("#random aside p");
        resultArea.textContent = error;
        document.querySelector("#search aside").classList.remove("success");
        document.querySelector("#random aside").classList.add("error");
    })
})

document.querySelector("#replace form").addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
    .then((response) => response.json())
    .then((emojis) => {
        const term = event.target.replace.value;
        const result = replace(term, emojis);
        const resultArea = document.querySelector("#replace aside p");
        resultArea.textContent = result;
        document.querySelector("#replace aside").classList.remove("error");
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
        document.querySelector("#replace aside").classList.remove("success");
        document.querySelector("#replace aside").classList.add("error");
        event.target.reset();
    })
})