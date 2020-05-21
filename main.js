const showAllRollsButton = document.querySelector('#show-all-rolls')
const rollButton = document.querySelector('#roll-the-die')
const textBox = document.querySelector('#user-input')
const sum =document.querySelector('#total')

const dieRolls = []

let totals = 0
rollButton.addEventListener("click", function() {
    let textBoxValue = textBox.value

    let index = 0
    while(index < textBoxValue) {
        let theRoll = Math.floor(Math.random() * 6) + 1
        dieRolls.push(theRoll)
        index += 1
        sum.innerHTML = "The sum of rolls is " + dieRolls.reduce(function(a, b) {
            return a + b;
        }, 0)
    }
    console.log(dieRolls)
    
})

showAllRollsButton.addEventListener('click', function() {
    for (let index = 0; index < dieRolls.length; index += 1) {
        const newDiceString = '<li class="dice">' + dieRolls[index] + "</li>";
        document.getElementById("all-rolls").innerHTML += newDiceString;
 
    }
})

//Add an event listener to the "Show All Rolls" button,
// which loops over the dieRolls array, to get each 
//individual die roll and display it as a List Item
 //within the "All Rolls" element. 