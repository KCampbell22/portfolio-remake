// add all of the .project-card into an array
// they are organized by data-tech="react", data-tech="javascript",
// data-tech="html-css", data-tech="bootstrap"
// if all is selected, show all of them
// if react is selected, show all of the data-tech="react"
// if javascript is selected, show all of the data-tech="javascript"
// if html-css is selected, show all of the data-tech="html-css"
// if bootstrap is selected, show all of the data-tech="bootstrap"
// filter happens on the filter button click or form submit

var projectCards = document.getElementsByClassName("project-card");
var filterBtn = document.querySelector(".filter_form button");
var selectedFilter = document.getElementById("filter_options");

// var reactProjects = document.querySelectorAll("[data-react]");

function filterType() {
  console.log(selectedFilter.value);
  display(selectedFilter.value);
}

function display(filter) {
  Array.from(projectCards).forEach((card) => card.classList.remove("hidden"));
  // filter out all of the cards that are not htmlCss and add class hidden
  // if htmlCss show all of the cards that are htmlCss
  // if bootstrap show all of the cards that are bootstrap
  // if javascript show all of the cards that are javascript
  // if react show all of the cards that are react
  // if all show all of the cards
  // have to be able to change the filter everytime the value changes

  if (filter === "htmlCss") {
    Array.from(projectCards).forEach((card) => {
      if (!card.classList.contains("htmlCss")) {
        card.classList.add("hidden");
      }
    });
  }
  if (filter === "react") {
    Array.from(projectCards).forEach((card) => {
      if (!card.classList.contains("react")) {
        card.classList.add("hidden");
      }
    });
  }
  if (filter === "javascript") {
    Array.from(projectCards).forEach((card) => {
      if (!card.classList.contains("javascript")) {
        card.classList.add("hidden");
      }
    });
  }
  if (filter === "bootstrap") {
    Array.from(projectCards).forEach((card) => {
      if (!card.classList.contains("bootstrap")) {
        card.classList.add("hidden");
      }
    });
  }
  if (filter === "all") {
    Array.from(projectCards).forEach((card) => card.classList.remove("hidden"));
  }
}

// onchange event listener for the filter button
filterBtn.addEventListener("onchange", filterType);
