
gsap.ticker.fps(60);

// Site-name Animations

gsap.from(".nav-bar-r", {
    opacity:0
})

gsap.from(".web-name-info img", {
    y:"100%"
})

gsap.from(".web-name-info-bottom h6", {
    y:"100%"
}) 

// photo-Grid Animations
gsap.from(".grid-block-wrapper-02", {
    y:"20%",
    scrollTrigger:".grid-block-wrapper-02"
})

gsap.from(".grid-block-wrapper-03", {
    y:"20%",
    scrollTrigger:".grid-block-wrapper-03",
})

gsap.from(".grid-block-wrapper-04", {
    scale:0,
    scrollTrigger:".grid-block-wrapper-03",

})

gsap.from(".grid-block-wrapper-06", {
    scale:0,
    scrollTrigger:".grid-block-wrapper-06",
})

gsap.from(".grid-block-wrapper-07", {
    y:"20%",
    scrollTrigger:".grid-block-wrapper-07",
})

gsap.from(".grid-block-wrapper-08", {
    scale:0,
    scrollTrigger:".grid-block-wrapper-08",
})

gsap.from(".fst-image", {
    y:"20%",
    scrollTrigger:".fst-image",
})

// WHO section animations

gsap.from(".rainbow-image img", {
    scale:0,
    scrollTrigger:".rainbow-image"
})

gsap.from(".sun-image img", {
    scale:0,
    scrollTrigger:".rainbow-image"
})

gsap.from(".star-image img", {
    scale:0,
    scrollTrigger:".rainbow-image"
})

gsap.from(".img-1", {
    scale:0,
    scrollTrigger:".img-1"
})

gsap.from(".main-photo-page-5", {
    opacity:0,
    scrollTrigger:".main-photo-page-5"
})
gsap.from(".page-5-photo-section .main-photo-page-5 img", {
    opacity:0,
    scrollTrigger:".page-5-photo-section .main-photo-page-5 img"
})