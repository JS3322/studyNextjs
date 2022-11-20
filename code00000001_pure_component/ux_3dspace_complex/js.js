(function () {
    const houseElem = document.querySelector('.house');
    // const maxScrollValue = document.body.offsetHeight - this.window.innerHeight;

    function scrollHandler() {
        // console.log(this.pageYOffset);
        let maxScrollValue = document.body.offsetHeight - this.window.innerHeight;
        //let maxScrollValue;
        const zMove = (this.pageYOffset / maxScrollValue) * 950 - 500;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
    }
   
    window.addEventListener('scroll', scrollHandler);
  })()

// (function () {
//     let maxScrollValue;
 
//     function scrollHandler() {
//         const scrollPer = (this.pageYOffset / maxScrollValue);
//         const zMove = scrollPer * 950 - 500;
//         houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
//     }   
 
//     function resizeHandler() {
//         maxScrollValue = document.body.offsetHeight - this.window.innerHeight;
//     }
 
//     window.addEventListener('scroll', scrollHandler);
//     window.addEventListener('resize', resizeHandler);
//     resizeHandler();
// })()