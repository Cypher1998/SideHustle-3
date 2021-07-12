const btnLC = document.querySelector('.decrement');
const btnAC = document.querySelector('.increment');
const count = document.querySelector('h1');
const msg = document.querySelector('.msg')
const mssg = document.querySelector('.mssg');

let counterValue = 7;

btnAC.addEventListener('click', function(e) {
    if (counterValue < 50) {
        counterValue ++ ;
        count.innerHTML = counterValue;}
});

btnLC.addEventListener('click', function(e) {
    if (counterValue > 0) {
        counterValue -- ;
        count.innerHTML = counterValue;}
});

