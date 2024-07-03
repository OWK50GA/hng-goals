let navToggle = document.getElementsByClassName('menu')[0];
let navMenu = document.querySelector('.nav-list');
const currentDay = document.querySelector(`[data-testid="currentDay"]`)
const currentTimeUTC = document.querySelector(`[data-testid="currentTimeUTC"]`)
console.log(navToggle)

navToggle.addEventListener('click', () => {
    if (navMenu.className === 'nav-list') {
        navMenu.className += ' responsive'
    }
    else {
        navMenu.className = 'nav-list'
    }
})

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

setInterval(() => {
    const present = new Date();
    const utcString = `${present.getUTCHours()}:${present.getUTCMinutes()}:${present.getUTCSeconds()}`;
    console.log(utcString)
    let dayInteger = present.getDay();
    currentDay.innerHTML = daysOfWeek[dayInteger];
    currentTimeUTC.innerHTML = utcString
}, 1000)