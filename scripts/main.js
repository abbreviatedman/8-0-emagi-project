//Query form and Add eventlistener for search after updating html 
document.querySelector("#search-form")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        
        //get all the emojis json
        fetch("https://emagi-server-8-0.herokuapp.com/emojis")
            //it gives us an object or response object and that's got a JSON method on it.
            .then((response) => response.json())
            //now get the actual json from it
            .then((emojis) => {
                // going to call search function which have access to it before main.
                // our event target is our form. And it's dot search is the thing in the form with the name search.
                const term = event.target.search.value
                const result = search(term, emojis)
                //check result
                // console.log(result)
            })
})
