const BASE_URL = "https://emagi-server-8-0.herokuapp.com/emojis";

document.querySelector("#search form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.search.value;
  const resultArea = document.querySelector("#search aside p");
  const resultColor = document.querySelector("#search aside");

  if (!term) {
    resultArea.textContent = "Error: Please provide a search inquiry.";
    if (!resultColor.className.includes("error")) {
      document.querySelector("#search aside").classList.remove("success");
      document.querySelector("#search aside").classList.add("error");
    }
    return;
  }
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((emojis) => {
      const result = search(term, emojis)
        .map((emoji) => emoji.symbol)
        .join("");
      resultArea.textContent = result || "No matches found...";
      if (result) {
        if (!resultColor.className.includes("success")) {
          document.querySelector("#search aside").classList.remove("error");
          document.querySelector("#search aside").classList.add("success");
        }
        event.target.reset();
      }
    });
});

document.querySelector("#encode form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.encode.value;
  const resultArea = document.querySelector("#encode aside p");
  document.querySelector("#encode aside").classList.remove("success", "error");
  if (!term) {
    resultArea.textContent = "Error: Please provide text to encode.";
    document.querySelector("#encode aside").classList.add("error");
    return;
  }
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((emojis) => {
      const result = encode(term, emojis);
      resultArea.textContent =
        result === term ? term + " (Nothing encoded)" : result;
      if (result !== term) {
        document.querySelector("#encode aside").classList.add("success");
        event.target.reset();
      }
    });
});

document.querySelector("#category form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.category.value;
  const resultArea = document.querySelector("#category aside p");
  const resultColor = document.querySelector("#category aside");
  if (!term) {
    resultArea.textContent = "Error: Please select a category.";
    if (!resultColor.className.includes("error")) {
      document.querySelector("#category aside").classList.remove("success");
      document.querySelector("#category aside").classList.add("error");
    }
    return;
  }
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((emojis) => {
      let result;
      result =
        term === "all"
          ? getRandom(emojis)
          : getRandom(getCategory(term, emojis));
      resultArea.textContent = result.symbol || "No emojis found.";
      if (result) {
        if (!resultColor.className.includes("success")) {
          document.querySelector("#category aside").classList.remove("error");
          document.querySelector("#category aside").classList.add("success");
        }
      }
    });
});

document.querySelector("#replace form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.replace.value;
  const resultArea = document.querySelector("#replace aside p");
  const resultColor = document.querySelector("#replace aside");
  if (!term) {
    resultArea.textContent = "Error: Please provide text to replace.";
    if (!resultColor.className.includes("error")) {
      document.querySelector("#replace aside").classList.remove("success");
      document.querySelector("#replace aside").classList.add("error");
    }
    return;
  }
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((emojis) => {
      const result = replace(term, emojis);
      resultArea.textContent =
        result === term ? term + " (Error: Nothing replaced)" : result;
      if (result !== term) {
        if (!resultColor.className.includes("success")) {
          document.querySelector("#replace aside").classList.remove("error");
          document.querySelector("#replace aside").classList.add("success");
        }
        event.target.reset();
      } else {
        if (!resultColor.className.includes("error")) {
          document.querySelector("#replace aside").classList.remove("success");
          document.querySelector("#replace aside").classList.add("error");
        }
      }
    });
});

document.querySelector("#org form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = event.target.org.value;
  const resultArea = document.querySelector("#org aside p");
  const resultColor = document.querySelector("#org aside");

  if (!term) {
    resultArea.textContent = "Error: Please provide a name to convert.";
    if (!resultColor.className.includes("error")) {
      document.querySelector("#org aside").classList.remove("success");
      document.querySelector("#org aside").classList.add("error");
    }
    return;
  }
  const result = org(term);
  resultArea.textContent = result;
  if (result) {
    if (!resultColor.className.includes("success")) {
      document.querySelector("#org aside").classList.remove("error");
      document.querySelector("#org aside").classList.add("success");
    }
  }
});
