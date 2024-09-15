// option: 1 --->
// <button onclick="console.log(8)">Click Me</button>

// option: 2 --->
//  <button onclick="makeRed()">Make red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option: 3 --->
const makeBlueButton = document.getElementById('Make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
// option: 3 Another --->
const makePurpleButton = document.getElementById('Make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// option:4 Another --->
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// option:4 Another --->
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})

// option:4 final --->
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})