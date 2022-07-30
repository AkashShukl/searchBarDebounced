export const suggestions = [
  "apple",
  "apricot",
  "aap",
  "app",
  "ask",
  "aaa",
  "apllwswsw",
  "aaaa",
  "aaas",
  "orange",
  "mango"
];
const suggestionList = document.getElementById("suggestionList");

function resetSearch() {
  suggestionList.innerHTML = "";
}

// function selectSearch()

function populate(res) {
  res.forEach((r) => {
    const item = document.createElement("li");
    item.classList.add("searchSuggestionItem");
    // item.addEventListener('click', selectSearch);
    item.textContent = r;
    suggestionList.append(item);
  });
}

export function apiCall(value) {
  resetSearch();
  if (value) {
    console.log("api call", value);
    const res = suggestions.filter((item) => item.startsWith(value));
    res.length = 5;
    populate(res);
  }
}

export function debounce(func, timeout = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
