const cusrsor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cusrsor.style.left = e.pageX + 'px';
    cusrsor.style.top = e.pageY + 'px';
})