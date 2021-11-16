import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  
  var body = document.querySelector("body");
  body.addEventListener("click", () => {
	var action = ["article1", "article2", "article3", "article4", "article5"];
	action.forEach(function() {
	var article = document.createElement("article");
	article.className = "message";
	article.innerText = "Text";
	document.body.appendChild(article);
	}
  });
});
