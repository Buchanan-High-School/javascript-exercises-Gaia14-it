// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  // Don't change the variable name
  let listItems = document.querySelectorAll("li")
  // let child = document.querySelectorAll("#list")

  // This is called a conditional. If it finds matches
  // for your variable, it will tell each of them to 
  // respond to a hover ("mouseover") event.
  if (listItems.length > 1) {
    listItems.forEach((item) =>
      item.addEventListener("mouseover", handleHover),
    );
  }
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  let element = document.querySelector("#circle")
  element.remove()
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
  let parent = document.querySelector(".box.flex")
  let child = document.createElement("div")
  child.innerText = "I'm sorry mr. Bennet, but I don't know what to write."
  child.classList.add("new")
  parent.appendChild(child)
  child.classList.add("item")
  let firstEl = document.querySelector("#item1")
  let newNode = document.createElement("div")
  newNode.textContent = "I don't know what to add here too"
  parent.insertBefore(newNode, firstEl)
  newNode.classList.add("new")
  newNode.classList.add("item")
  newNode.style.backgroundColor ="#7c4dff"
  child.style.backgroundColor = "#7c4dff"
  newNode.addEventListener("mouseover", changeText)
}

// Don't change this function
function handleHover(event) {
  // Change the text of the target
  event.target.textContent = "OFF";
}

function changeText(event) {
  event.target.textContent = "Surprise"
}