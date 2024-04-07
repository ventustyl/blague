let para = document.querySelector(".head");
let para2 = document.querySelector(".body");
let btn = document.querySelector("button");
let body1 = document.getElementById("app");

window.onload = blague();

// Function fetch blague from the API

function blague() {
  fetch("https://api.blablagues.net/?rub=blagues").then((res) =>
    res.json().then((data) => {
      const blague = data.data.content;
      para.innerText = blague.text_head;
      blague.text_hidden === ""
        ? (para2.innerText = blague.text)
        : (para2.innerText = blague.text_hidden);
    })
  );
  setTimeout(() => {
    if (body1.clientHeight > window.innerHeight) {
      blague();
    }
  }, 500);
}

btn.addEventListener("click", blague);
