console.log("I'm here")

let names = document.querySelectorAll("li")
let target = document.querySelector("#receiver")

console.log(names)

names.forEach(item => {
    let newEl = document.createElement("li");
    newEl.innerText = "Hi " + item.innerText;
    newEl.style.fontWeight = 800;
    target.appendChild(newEl)
})