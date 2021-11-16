import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  
  var article = document.createElement("article");
  article.className = 'message';
  var body = document.querySelector("body");
  body.appendChild(article);
  body.appendChild(article);
  body.appendChild(article);
  body.appendChild(article);
  body.appendChild(article);
});
