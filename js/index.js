// Your code goes here

// Query Selectors
const bodyQuery = document.querySelector('body');
const navLinks = document.querySelectorAll('nav a');
const imgSelector = document.querySelectorAll('img');
lowerButtons = document.querySelectorAll('.btn');
const navLink = document.querySelector('header nav a');

// Copy Alert [X]
bodyQuery.addEventListener('copy', event => {
    event.preventDefault();
    alert('Plagurism is a crime!')
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

// Blur mouseover on photos [X]
imgSelector.forEach(item => 
    item.addEventListener('mouseover', event => {
        event.preventDefault();
        event.target.style.filter = 'blur(8px)';
    })
);

// Lower buttons disappear upon clicking [X]
lowerButtons.forEach(item => 
    item.addEventListener('click', event => {
        event.preventDefault();
        event.target.style.display = 'none';
    })
);

// Change H2 to button clicked [6]
navLink.addEventListener('click', event => {
    let title = document.querySelector('.container h2');
    title.textContent = navLink.textContent;
});

