
//-----------
//Query form and Add eventlistener for search after updating html 
document.querySelector("#search-form")
    .addEventListener("submit", (event) => {
        event.preventDefault();

        //reset css styles - use event.target to select specific result related to section
        event.target.parentNode.querySelector(".result").classList.remove("error");
        event.target.parentNode.querySelector(".result").classList.remove("success");
        
        // our event target is our form. And it's dot search is the thing in the form with the name search.
        let term = event.target.search.value;
        const resultArea = document.querySelector("#search-result");
        
        //get all the emojis json
        //We also want the url for search here to be dynamic so make it string interpolation
        // fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)

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

                //check errors 
                if (!result.length) {
                    resultArea.textContent = `${term} cannot be found.`;
                    event.target.parentNode.querySelector(".result").classList.add('error');
                } else {
                    resultArea.textContent = result;
                    //add the class for the aside section based on the css class for when it's a success result
                    event.target.parentNode.querySelector(".result").classList.add('success');
                };
            })
            .catch(() => {
                resultArea.textContent = `${term} cannot be found.`;
                event.target.parentNode.querySelector(".result").classList.add('error');
            });

            event.target.reset();
});

//----------Random by Category----------
//Query form and Add eventlistener 
document.querySelector("#random-form")
    .addEventListener("submit", (event) => {
        event.preventDefault();

        //reset css styles
        event.target.parentNode.querySelector(".result").classList.remove("success");
        event.target.parentNode.querySelector(".result").classList.remove("error");
        
        // target the category selection
        let category = event.target.category.value;
        const resultArea = document.querySelector("#random-result");

        if (category === "all") {
            resultArea.textContent = "Please select a specific category"
            event.target.parentNode.querySelector(".result").classList.add('error');
        } else {
        //get all the emojis json
        //Specific url to be dynamic
        fetch(`https://emagi-server-8-0.herokuapp.com/emojis`)
        .then((response) => response.json())
        .then((emojis) => { 
                // const result = getRandom(emojis.map((emojis) => emojis.symbol));
                const result = getRandom(getCategory(category, emojis).map((emoji) => emoji.symbol));


                //check result
                // console.log(result)
            
                resultArea.textContent = result;
                event.target.parentNode.querySelector(".result").classList.add('success');
            })
            .catch();
        }

            event.target.reset();
});

