const districts = document.querySelectorAll(".btn-type6");
console.log(districts);
// 고객님의 소중한 후기
let count = 0;
let start_x, end_x;
const contents = document.querySelectorAll(".review-item");
const slickTrack = document.querySelector("div.slick-track");
const contentsWidth = 430.39;
const slickDots1 = document.querySelectorAll(".slick-dots li.slick-active");
const slickDots2 = document.querySelectorAll(".slick-dots li");

districts.forEach((district) => {
    district.addEventListener("click", (e) => {
        // console.log(e.target);

        districts.forEach((d) => {
            d.parentElement.classList.remove("active");
            // console.log(d);
        });
        e.target.parentElement.classList.add("active");
    });
});

// 고객님의 소중한 후기
contents.forEach((content) => {
    content.addEventListener("touchstart", (e) => {
        start_x = e.touches[0].pageX;
    });
    content.addEventListener("touchend", (e) => {
        end_x = e.changedTouches[0].pageX;
        // console.log(contentsWidth);

        if (start_x > end_x) {
            count++;
            // console.log(slickDots2);
            slickDots2[0].classList.remove("slick-active");
            slickDots2[1].classList.add("slick-active");
            // console.log(count);
            if (count > 1) {
                count = 1;
            }
        } else {
            count--;
            slickDots2[0].classList.add("slick-active");
            slickDots2[1].classList.remove("slick-active");
        }
        slickTrack.style.transform = `translateX(-${contentsWidth * count}px)`;
    });
});
