document.querySelector("#search form")
.addEventListener('submit', (event) => {
    event.preventDefault();

    const term = event.target.search.value;
    fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
    .then((response) => response.json())
    .then((emojis) => {
        if (!emojis.length){
            throw new Error(`Not found!`);
            //throw new Error(`${term} not found!`)
        }

        const result = search(term, emojis)
            .map((emoji) => emoji.symbol)
            .join('')
        const resultArea = document.querySelector('#search aside p');
        resultArea.textContent = result;
        document.querySelector('#search aside').classList.add('success');
        document.querySelector('#search aside').classList.remove('error');
    })
    .catch((error) => {
        const resultArea = document.querySelector('#search aside p');
        resultArea.textContent = error;
        document.querySelector('#search aside').classList.add('error');
        document.querySelector('#search aside').classList.remove('success');
    });
    event.target.reset();
});

document.querySelector("#random form").addEventListener('submit', (event) => {
    event.preventDefault();

    const category = event.target.category.value.toLowerCase();
    fetch(`https://emagi-server-8-0.herokuapp.com/categories/${category}`)
    .then((response) => response.json())
    .then((emojis) => {
        if (event.target.category.value === "All") {
            throw new Error('Please select a category.'); 
        }

        const result = emojis.map((emoji) => emoji.symbol);
            const resultArea = document.querySelector('#random aside p');
            resultArea.textContent = getRandom(result);
            document.querySelector('#random aside').classList.add('success');
            document.querySelector('#random aside').classList.remove('error');
            event.target.reset();
        })
        .catch((error) => {
            const resultArea = document.querySelector('#random aside p');
            resultArea.textContent = error;
            document.querySelector('#random aside').classList.add('error');
            document.querySelector('#random aside').classList.remove('success');
        });
});

