const displayMessage = document.getElementById('message');
const button = document.getElementById('button');
const input = document.getElementById('input');

function removeAfterSetTime(){
    location.reload();
}

button.addEventListener('click', () =>{

let input = document.getElementById('input').value.toLowerCase().replace(/\s+/g, '');
let vowels = /[aeiou]/gi;

if(document.getElementById('input').value.length == 0 ){
    displayMessage.innerHTML = `Enter the string`;
} else {
    let result = input.match(vowels);
    let count = result.length;
    displayMessage.innerHTML = `${input} has ${count} vowels`;
}

// else if (!isNaN(document.getElementById('input').value.length)){
    // displayMessage.innerHTML = `You write a number. Please, write string`
// }

let timeout = setTimeout(removeAfterSetTime, 2500)

})