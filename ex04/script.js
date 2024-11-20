function task1() {
  let myArray = ["boh", "bah", "beh"];
  let target = document.querySelector("#task-1-target")
  // This will run when you click the button.
  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  let array = document.querySelectorAll("#color-list li")
  console.log(array)
}

function task2B() {
  let target = document.querySelector("#name-list")
  let names = document.querySelectorAll("#name-list > li")
  console.log(names)
  names.forEach(item => {
    let newEl = document.createElement("li");
    newEl.innerText = "Hi " +item.innerText;
  target.appendChild(newEl)
})}

function task3() {
  // Write your code in here
  let colors = document.querySelectorAll(".item p")
  console.log(colors)

  colors.forEach(item =>{
    item.style.backgroundColor = "#" + item.innerText
  })
}
