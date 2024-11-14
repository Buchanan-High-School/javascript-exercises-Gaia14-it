// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  // 1, Target the div
  let target = document.querySelector("#text-content")
  console.log(target)
  // 2. Set innertext to something new
  target.innerText = "Something new"
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  let target = document.querySelector("#task2")
  target.style.backgroundColor = "#000B58"
  target.style.color = "#ECDFCC"
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
  let target = document.querySelector("#list")
  let child = document.createElement("li")
  child.textContent = "Sleep the rest of the day"
  target.appendChild(child)
}
