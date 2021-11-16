import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  
  const article = document.createElement('article class="message"');
  const body = document.querySelector("body");
  body.appendChild(article);
  body.appendChild(article);
  body.appendChild(article);
  body.appendChild(article);
  body.appendChild(article);
});
