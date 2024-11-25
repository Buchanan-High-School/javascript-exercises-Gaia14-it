const person = {
    "name": "Mr. Bennett",
    "subject": "Chemistry",
    "experience": 15
}

const teachers = [
    {
        "name": "Mrs. Frost",
        "type": "Environmental Science",
        "experience": 25
    },
    {
        "name": "Mr. Cribley",
        "subject": "Biology",
        "experience": 15
    },
    {
        "name": "Mrs. Lentz",
        "subject": "Physical Science",
        "experience": 22
    },
    {
        "name": "Mr. Bennett",
        "subject": "Chemistry",
        "experience": 15
    },
]

function task1() {
    // Create your own object assigned to a variable.
    // console.log your object when this function is run.
    let person = {
        "name" : "Taylor Alison Swift",
        "nationality" : "American",
        "job" : "singer-songwriter",
        "age" : "34",
        "height" : "5'10",
    }
    console.log(person)
}

function task2() {
    // Write some HTML to create a card display for a person.
    // When you click the button, the data from the `person`
    // object above should be filled in on the page.
    let name = document.querySelector("#name");
    name.innerText = "Mr. Bennett";
    let subject = document.querySelector("#subject");
    subject.innerText = "Chemistry"
}

function task3() {
    // 1. Use the array of teachers to start a loop.
    // 2. In the loop, add a "role" property to each object as they go through the loop
    // 3. Use a template string to add a sentence about each person into the #task3 container.
    teachers.forEach ((person) => {
        let template = `The teacher is ${person.name} and he has ${person.experience} years of experience.`
        console.log(template)
        let newEl = document.createElement("p")
        newEl.innerText = template
        let target = document.querySelector("#task3")
        target.appendChild(newEl)
    })
}