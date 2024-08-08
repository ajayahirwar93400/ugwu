

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y:'-10',
        opacity:0,
        duration:1,
        ease: Expo.easeInout
    })

    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInout,
        duration: 1,
        delay: -1
    })

   .from (".footerpage" , {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -.5,
        ease: Expo.easeInout
   })

}

firstPageAnim();


function ciclefollow (){
    var main = document.querySelector("#main")
    var secondpage = document.querySelector(".second_page")
var circle = document.querySelector("#minicircle")

window.addEventListener("mousemove", function(ajay){
    circle.style.left = ajay.x+ "px"
    circle.style.top = ajay.y+ "px"
});

main.addEventListener("mouseenter",function(){
    circle.style.opacity = 1
});



main.addEventListener("mouseleave",function(){
    circle.style.opacity = 0
});


};


ciclefollow();


document.querySelectorAll ("#page2") 
.forEach( function (elem){

var rotate = 0;
var diffx = 0;
    elem.addEventListener("mousemove", function(dets){
       var diff = dets.clientY - elem.getBoundingClientRect().top;
           diffx = dets.clientX - rotate;
           rotate = dets.clientX
         gsap.to (elem.querySelector("img"),{
            opacity:1, 
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20,diffx)
         });
    });

    elem.addEventListener("mouseleave", function(dets){
        gsap.to (elem.querySelector("img"),{
            opacity:0,
            duration: 0.5,
        })
    })
}) ;