const heading = document.createElement('h1');
const body = document.querySelector('body');
body.appendChild(heading);
heading.innerText = 'Hello,World!';

const favSub = document.querySelector('.favSubject');
favSub.remove(); 
