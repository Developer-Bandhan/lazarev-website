function navBarAnimation() {

    let nav = document.querySelector("nav")
    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to(".nav-bottom", {
            height: "21vh",
            duration: 0.3
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.02
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.6
            }

        })

    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.01
        })
        tl.to(".nav-bottom", {
            height: 0,
            duration: 0.2
        })

    })

}
navBarAnimation()

function page2Animation(){
    let rightElems = document.querySelectorAll(".right-elem");

rightElems.forEach(function(elem){
    elem.addEventListener("mousemove", function(){
        gsap.to(elem.childNodes[3],{
            opacity: 1,
            scale: 1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale: 0
        })
    })
    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-60,
            y:dets.y - elem.getBoundingClientRect().y-145
        })
    })
})
}

page2Animation()

function videoAnimation(){
    let page3Center = document.querySelector(".page3-center");
let video = document.querySelector(".page3 video")

page3Center.addEventListener("click", function(){
    video.play()
    gsap.to(video,{
        transform:"scaleX(1) scaleY(1)",
        borderRadius:"0px"
    })
})

video.addEventListener("click", function(){
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0.7) scaleY(0)",
        borderRadius:"40px"
    })
})
}

videoAnimation()


let secRight = document.querySelector(".sec-right")
let round = document.querySelector(".round")
let video = document.querySelector(".sec-right video");


secRight.addEventListener("mouseenter", function(){
    gsap.to(round, {
        opacity:1,
        scale:1
    })
    // video.style.opacity = 1
    // video.play()
})
secRight.addEventListener("mouseleave", function(){
    gsap.to(round, {
        opacity:0,
        scale:0
    })
    // video.style.opacity = 0
    // video.load()
})
secRight.addEventListener("mousemove", function(dets){
    gsap.to(round,{
         x:dets.x - secRight.getBoundingClientRect().x -50 ,
         y:dets.y - secRight.getBoundingClientRect().y -50
    })
})
