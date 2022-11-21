// const $computer = document.querySelector("#computer");
//
// const IMG = './rps.png';
//
// $computer.style.background = `url(${IMG}) 0 0`;
// $computer.style.backgroundSize = 'auto 216px';

let left = 0;

setInterval(function() {
    if (left === 0) {
        left = '-135px'
    } else if (left === '-135px') {
        left = '-284px';
    } else {
        left = 0;
    }
    document.querySelector("#computer").style.background =
        'url(./rps.png) ' + left + ' 0';
}, 100);


document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        console.log(this.textContent, left);
    });
});