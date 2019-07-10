// Your code goes here

// Query Selectors
const bodyQuery = document.querySelector('body');
const navLinks = document.querySelectorAll('nav a');
const imgSelector = document.querySelectorAll('img');
const lowerButtons = document.querySelectorAll('.btn');
const navLink = document.querySelector('header nav a');
const navi = document.getElementById('clicker');
const navig = Array.from(document.getElementsByClassName('nav-link'));

// Copy Alert [X]
bodyQuery.addEventListener('copy', event => {
    event.preventDefault();
    alert('Plagiarism is a crime!')
});

// Scroll event [X]
window.addEventListener('scroll', event => {
    event.preventDefault();
    let body = document.body;
    body.classList.toggle('cursorClass');
});

// Nav mouseover [X]
navLinks.forEach(a => {
    a.addEventListener('mouseover', event => {
        event.target.style.textDecoration = 'underline';
    })
});

// Nav mouseout [X]
navLinks.forEach(a => {
    a.addEventListener('mouseout', event => {
        event.target.style.textDecoration = 'none';
    })
});

// Blur mouseover on photos [X]
imgSelector.forEach(item => 
    item.addEventListener('mouseover', event => {
        event.preventDefault();
        event.target.style.filter = 'blur(8px)';
    })
);

// Blur mouseout on photos [X]
imgSelector.forEach(item => 
    item.addEventListener('mouseout', event => {
        event.preventDefault();
        event.target.style.filter = 'none';
    })
);

// Lower buttons disappear upon clicking [X]
lowerButtons.forEach(item => 
    item.addEventListener('click', event => {
        event.preventDefault();
        event.target.style.display = 'none';
    })
);

// Change H2 to button clicked [X]
navLink.addEventListener('click', event => {
    let title = document.querySelector('.container h2');
    title.textContent = navLink.textContent;
});

// Load disclaimer [X]
window.addEventListener('load', event => {
    event.preventDefault();
    alert('You must be 18 years old to ride the fun bus. Click the button to consent.');
});

// Menu animation
navi.addEventListener('click', () => {
    for(i=0; i < navig.length; i++) {
        navig[i].classList.toggle('toggle-item');
    }

    TweenMax.staggerFrom('.nav-link', 2, {opacity: 0}, .5);
});