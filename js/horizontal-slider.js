let images = [...document.querySelectorAll('.horizontal-slider-img')];
let slider = document.querySelector('.horizontal-slider')
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05;


//linear Interpolation
function lerp(start, end, t) {
    return start * (1-t) + end * t;
}

//transform function
function setTransform(el, transform) {
    el.style.transform = transform;
}

//init function
function init() {
    sliderWidth = 
    slider.getBoundingClientRect().width;
    imageWidth = sliderWidth/ images.length;
    document.body.style.height = `${sliderWidth - 
    (window.innerWidth - window.innerHeight)}px`
}

//animating slider
function animate() {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;
    setTransform(slider, `translateX(${-current}px)`)
    animateImages()
    requestAnimationFrame(animate)
}

//animating images for parrallax effect
function animateImages() {
    let ratio = current / imageWidth;
    let intersectionRatioValue;

    images.forEach((image, index) => {
        intersectionRatioValue = ratio - (index * 0.7)
        setTransform(image, `translateX(${intersectionRatioValue * 70}px)`)
    })
}

init()
animate()