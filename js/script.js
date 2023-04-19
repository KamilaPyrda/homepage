console.log("Hello everybody. Ten kod jest już w repozytorium Git. Ten pliczek już tu jest");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");

 button.addEventListener("click", () => {
    body.classList.toggle("body--darkTheme");

 button.innerText = body.classList.contains("body--darkTheme") ? 
 "Włącz jasny motyw": "Włącz ciemny motyw";
  
});

