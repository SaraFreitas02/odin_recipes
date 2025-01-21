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
