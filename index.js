// Creating a dom objects
var randomNum1 = document.querySelector('.img1');
var randomNum2 = document.querySelector('.img2');
var win = document.querySelector('h1');

// Looking for the attributes
console.log(randomNum1.attributes);
console.log(randomNum2.attributes);

// Creating randomizer
function random() {
        var randomGenerator = Math.floor(Math.random() * 6 + 1)
        return randomGenerator;
    }
    
// Creating separate randomizers for two dices
var result1 = random();
var result2 = random();
console.log(result2);
console.log(result1);

// First dice result 
 function player1Result(){
    if (result1 === 1) {
        return randomNum1.setAttribute('src', 'images/dice1.png')
    }
    if (result1 === 2) {
        return randomNum1.setAttribute('src', 'images/dice2.png')
    }
    if (result1 === 3) {
        return randomNum1.setAttribute('src', 'images/dice3.png')
    }
    if (result1 === 4) {
        return randomNum1.setAttribute('src', 'images/dice4.png')
    }
    if (result1 === 5) {
        return randomNum1.setAttribute('src', 'images/dice5.png')
    } else {
        return randomNum1.setAttribute('src', 'images/dice6.png')
    }
}
player1Result();
console.log(randomNum1);


// Second dice result
function player2Result(){
    if (result2 === 1) {
        return randomNum2.setAttribute('src', 'images/dice1.png')
    }
    if (result2 === 2) {
        return randomNum2.setAttribute('src', 'images/dice2.png')
    }
    if (result2 === 3) {
        return randomNum2.setAttribute('src', 'images/dice3.png')
    }
    if (result2 === 4) {
        return randomNum2.setAttribute('src', 'images/dice4.png')
    }
    if (result2 === 5) {
        return randomNum2.setAttribute('src', 'images/dice5.png')
    } else {
        return randomNum2.setAttribute('src', 'images/dice6.png')
    }
}
player2Result();
console.log(randomNum2);

// Comparing a dices results and show them on the screen
function winner(result1, result2) {
    if(result1 > result2) {
        win.innerHTML = "Player 1 wins";
    }
    else if (result1 < result2) {
        win.innerHTML = "Player 2 wins";
    }
    else if(result1 === result2) {
        win.innerHTML = "Draw!"
    }    
}
winner(result1, result2);