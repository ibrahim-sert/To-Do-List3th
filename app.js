const button = document.querySelector(".btn-add");
const buttonCheck = document.querySelector(".btn-check");
const buttonRemove = document.querySelector(".btn-remove");
const butonCtn = document.querySelector(".btn-ctn");
const input = document.querySelector("#input");
const sec = document.querySelector(".sec1");
const ul = document.querySelector(".ul");
let sum = 0;

sec.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add")) {
    sum++;
    const li = document.createElement("li");
    li.setAttribute("class", "class");
    if (sum > 2) {
      const div = document.querySelector(".iframe");
      div.innerHTML = `<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="480" src="https://giphy.com/embed/r8NV9HQpuhDcLDAP2I/video" width="480"></iframe></div>`;
    }
    const icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-check");
    li.append(icon);
    const p = document.createElement("p");
    p.innerText = input.value;
    li.appendChild(p);
    const removeIcon = document.createElement("i");
    removeIcon.setAttribute("class", "fas fa-trash");
    li.append(removeIcon);
    ul.prepend(li);
  }
});

butonCtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.closest(".class").remove();
  } else if (e.target.classList.contains("fa-check")) {
    e.target.closest(".class").classList.toggle("checked");
  }
});
