import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  
  body.addEventListener("click", () => {
  var article = document.createElement("article");
  article.classList.add("message");
  article.innerText = "Text";
  document.body.appendChild(article);
  document.body.appendChild(article);
  document.body.appendChild(article);
  document.body.appendChild(article);
  document.body.appendChild(article);
  });
});
