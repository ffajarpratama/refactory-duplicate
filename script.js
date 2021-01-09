const width = 184;
const animationSpeed = 1000;
const pause = 3000;
let currentSlide = 1;

const $slider = $('.carousel-container');
const $slideContainer = $slider.find('.track');
const $slides = $slideContainer.find('.card');

let interval;

function startSlider() {
    interval = setInterval(function () {
        $($slideContainer).animate({
            "margin-left": "-=" + width
        }, animationSpeed, firstSlide);
    }, pause);

    function firstSlide() {
        currentSlide++;
        if (currentSlide === $slides.length) {
            currentSlide = 1;
            $slideContainer.css("margin-left", 0);
        }
    }
}

function stopSlider() {
    clearInterval(interval);
}

$slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);

startSlider();
