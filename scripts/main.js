const form = document.querySelector('#search form')
.addEventListener('submit', (event) => {
    event.preventDefault();
    const term = event.target.search.value;
    fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
        .then((response) => response.json())
        .then((emojis) => {
            const result = emojis.map((emoji) => emoji.symbol).join('')

            const resultArea = document.querySelector('#search aside p')
            resultArea.textContent = result;
            document.querySelector('#search aside').classList.add('success')
        })
})

const form2 = document.querySelector('#category-form')
    .addEventListener('submit', (event) => {
        event.preventDefault();
        const word = event.target.category.value;
        fetch(`https://emagi-server-8-0.herokuapp.com/categories/${word}`)
            .then((response) => response.json())
            .then ((emojis) => {
                const post = emojis.map((emoji) => emoji.symbol)
                
                const resultArea = document.querySelector('#category aside p')
                resultArea.textContent = post[Math.floor(Math.random() * emojis.length)];
                document.querySelector('#category aside').classList.add('success')
            })
    })

const form3 = document.querySelector('#replace-form')
    .addEventListener('submit', (event) => {
        event.preventDefault();
        let word = event.target.replace.value.toLowerCase();
        //let words = word.split(" ");
        fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
            .then((response) => response.json())
            .then((emojis) => {
                //const changes = emojis.map(emoji => emoji.name.toLowerCase())
                const replace = (word, emojis) => {
                    let result = [];
                    const match =  emojis.forEach((emoji) => emoji.name.toLowerCase() === word.toLowerCase());
                    console.log(match)
                    if (match){
                        result.push(match.symbol)
                    } else {
                        result.push(word);
                    }
                    
                    
                    return result.join("");
                }
                
                const resultArea = document.querySelector('#replace aside p')
                resultArea.textContent = replace(word, emojis);
                document.querySelector('#replace aside').classList.add('success')
            })

})



// const form4 = document.querySelector('#encode-form')
//     .addEventListener('submit', (event) => {
//         event.preventDefault();
//         const phrase = event.target.encode.value;
//         fetch()
//             .then ((response) => response.json())
//             .then ((emojis) => {

//             })
//     })