let count = 0;
let start_x, end_x;
const contents = document.querySelectorAll(".review-item");
const slickTrack = document.querySelector("div.slick-track");
const contentsWidth = 430.39;

contents.forEach((content) => {
    content.addEventListener("touchstart", (e) => {
        start_x = e.touches[0].pageX;
    });
    content.addEventListener("touchend", (e) => {
        end_x = e.changedTouches[0].pageX;
        console.log(contentsWidth);
        if (start_x > end_x) {
            count++;
        } else {
            count--;
        }
        slickTrack.style.transform = `translateX(-${contentsWidth * count}px)`;
    });
});
