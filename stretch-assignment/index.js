let redRocket = document.querySelector('.block--red');
console.log(redRocket);

let blueRocket = document.querySelector('.block--blue');
console.log(blueRocket);

let greenRocket = document.querySelector('.block--green');
console.log(greenRocket);

let pinkRocket = document.querySelector('.block--pink');
console.log(pinkRocket);

let grayRocket = document.querySelector('.block--gray');
console.log(grayRocket);

redRocket.addEventListener('mousedown', event => {
    console.log(event)
});