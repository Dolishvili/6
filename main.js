const root = document.body

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

const img = document.createElement('img')
img.src = "Bradpit.jpg"
img.classList.add('img')

const h1 = document.createElement('h1')
h1.innerText = 'Fight Club'
h1.classList.add('h1')

const ul = document.createElement('ul')
ul.classList.add('ul')

const rules = ["You do not talk about Fight Club", "YOU DO NOT TALK ABOUT FIGHT CLUB!"," someone yells stop, goes limp, taps out, the fight is over"]
rules.forEach((el) => {
    const li = document.createElement('li')
    li.innerText = el

    ul.appendChild(li)
})

wrapper.append(img,h1,ul)

const div = document.createElement('div')
div.classList.add('forButton')

const button = document.createElement('button')
button.innerText = 'Click me!'
div.appendChild(button)
root.appendChild(div)

button.addEventListener("click", function() {
    root.appendChild(wrapper)
})

root.classList.add('background')
const colorArr = ["red","blue","green","black","white"]

const checker = document.getElementById('colorChanger')
const label = document.getElementById('inputColor')
checker.addEventListener("click", function() {
    const inputValue = label.value
    if(inputValue.trim() == "red") {
        alert('finally')
    }
    else alert('keep trying')
})

const numberInput = document.getElementById("numberInput");
const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");

calculateButton.addEventListener("click", function() {
    const inputText = numberInput.value;
    const numbers = inputText.split(":");
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const number = parseFloat(numbers[i]);
        if (!isNaN(number)) {
            sum += number;
        }
    }

    if (numbers.length > 0) {
        const average = sum / numbers.length;
        result.textContent = `Average: ${average}`;
    } else {
        result.textContent = "Please enter numbers separated by ':'";
    }
});