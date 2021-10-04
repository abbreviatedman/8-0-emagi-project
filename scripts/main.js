//Query form and Add eventlistener for search after updating html 
document.querySelector("#search-form")
    .addEventListener("submit", (event) => {
        event.preventDefault();
        
        //get all the emojis json
        //We also want the url for search here to be dynamic so make it string interpolation
        
        // our event target is our form. And it's dot search is the thing in the form with the name search.
        let term = event.target.search.value;
        const resultArea = document.querySelector("#search-result")
        
        fetch(`https://emagi-server-8-0.herokuapp.com/search/${term}`)
        //it gives us an object or response object and that's got a JSON method on it.
        .then((response) => response.json())
        //now get the actual json from it
        .then((emojis) => {
                // going to call search function which have access to it before main.
                //select what property you want using .map and then separate with space using .join
                // const result = search(term, emojis).map((emojis) => emojis.symbol).join(" ");
                //OR grab from json and then remove the script in html file since won't use it. 
                const result = emojis.map((emojis) => emojis.symbol).join(" ");

                //check result
                // console.log(result)
                if (!result.length) {
                    resultArea.textContent = `${term} cannot be found.`
                    document.querySelector(".result").classList.add('error')
                } else {
                    resultArea.textContent = result;
                    //add the class for the aside section based on the css class for when it's a success result
                    document.querySelector(".result").classList.add('success')
                }
            })
            .catch(() => {
                resultArea.textContent = `${term} cannot be found.`
                document.querySelector(".result").classList.add('error')
            })

            event.target.reset();
})

function createError () {
    return resultArea.textContent =  `${term} cannot be found.`
}