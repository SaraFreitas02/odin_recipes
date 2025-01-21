// Dynamically load header
let header = document.getElementById("header");

if (header) {
  fetch("/components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(() => {
      console.error("Header failed to load");
    });
}

// Dynamically load footer
let footer = document.getElementById("footer");

if (footer) {
  fetch("/components/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(() => {
      console.error("Footer failed to load");
    });
}

// Handle general JavaScript errors
window.onerror = function () {
  document.body.innerHTML = `
        <div style="text-align: center; font-family: Arial, sans-serif; margin-top: 50px;">
            <h1>Something Went Wrong</h1>
            <p>We're experiencing an issue with loading the page. Please try refreshing or ensure JavaScript is enabled.</p>
        </div>`;
};

// Handle toggle buttons
const toggleBtns = Array.from(document.getElementsByClassName("toggle-btn"));

const measurements = Array.from(
  document.getElementsByClassName("measurement-span")
);
const ingredients = document.getElementById("ingredients");
const preparation = document.getElementById("preparation");

if (
  !ingredients ||
  !preparation ||
  toggleBtns.length < 1 ||
  measurements.length < 1
) {
  throw new Error("Missing elements for toggling");
}

// Toggle between ingredients and preparation
toggleBtns[0].addEventListener("click", () => {
  if (ingredients.classList.contains("hidden")) {
    ingredients.classList.remove("hidden");
    preparation.classList.add("hidden");
  } else {
    ingredients.classList.add("hidden");
    preparation.classList.remove("hidden");
  }
});

// Toggle between metric and imperial measurements
toggleBtns[1].addEventListener("click", () => {
  measurements.forEach((measurement) => {
   
    //algorithm to be implemented
 
  });
});
