document.querySelector("#search form")
.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('https://emagi-server-8-0.herokuapp.com/emojis')
    .then((response) => response.json())
    .then((emojis) => {
        const term = event.target.search.value;
        const result = search(term, emojis)
            .map((emoji) => emoji.symbol)
            .join('')

        const resultArea = document.querySelector('#search aside p')
        resultArea.textContent = result;
        document.querySelector('#search aside').classList.add('success')
    })
})

