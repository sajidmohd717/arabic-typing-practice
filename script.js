let lesson = [
    {
        lesson_no: 1,
        display: "بببب تتتت ببب تتت بب تت"
    }
]

let keyboard = [
    {
        top: " ّ",
        bottom: "ذ"
    }
]



let lesson_variable = 0

let displayDiv = document.querySelector(".display")
displayDiv.innerHTML = lesson[lesson_variable].display

let keyboardDiv = document.querySelector('.keyboard-display')

keyboard.forEach((key) => {
    let div = document.createElement("div")
    let childDiv1 = document.createElement("div")
    let childDiv2 = document.createElement('div')
    childDiv1.innerText = key.top
    childDiv2.innerText = key.bottom
    div.appendChild(childDiv1)
    div.appendChild(childDiv2)
    div.classList.add("key-style")
    keyboardDiv.appendChild(div)
})