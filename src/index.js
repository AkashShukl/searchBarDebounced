import "./styles.css";
import { debounce, apiCall } from "./search.js";

const suggestionContiner = document.getElementById("suggestionContainer");
const searchBtn = document.getElementById("searchBtn");
const searchText = document.getElementById("searchText");

searchText.addEventListener(
  "keyup",
  debounce(() => apiCall(searchText.value))
);

suggestionContiner.addEventListener("click", (e) => {
  if (e.target.classList.contains("searchSuggestionItem")) {
    searchText.value = e.target.textContent;
  }
});
