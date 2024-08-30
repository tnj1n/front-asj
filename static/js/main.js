document.addEventListener("DOMContentLoaded", function () {
    // 수거요청의 ul 태그 요소 선택
    const requestList = document.querySelectorAll(
        "#promotion-tags-container .swiper-slide"
    );

    // 요금제의 ul 태그 요소 선택
    const planList = document.querySelectorAll(
        "#swiper-wrapper-12770ed6d1dde369 .swiper-slide"
    );

    // 공통 함수: 클릭 시 active 클래스 처리
    function handleSlideClick(slides) {
        slides.forEach((slide) => {
            slide.addEventListener("click", function () {
                // 모든 요소에서 active 클래스를 제거
                slides.forEach((s) => s.classList.remove("active"));

                // 클릭한 요소에 active 클래스 추가
                this.classList.add("active");

                // swiper-slide-active 클래스 처리
                slides.forEach((s) =>
                    s.classList.remove(
                        "swiper-slide-active",
                        "swiper-slide-next"
                    )
                );
                this.classList.add("swiper-slide-active");

                // 현재 클릭된 요소의 다음 요소에 swiper-slide-next 클래스 추가
                const nextSlide = this.nextElementSibling;
                if (nextSlide && nextSlide.classList.contains("swiper-slide")) {
                    nextSlide.classList.add("swiper-slide-next");
                }
            });
        });
    }

    // 각각의 ul 태그에 대해 함수 호출
    handleSlideClick(requestList);
    handleSlideClick(planList);
});

// ******** 요금제 슬라이드 *******
const slides = document.querySelector(".slick-initialized slick-slider");
const slideContent = document.querySelectorAll(
    ".slick-initialized slick-slider li"
);

let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideContent.length; //슬라이드 개수
const prev = document.querySelector(".slick-prev slick-arrow"); //이전 버튼
const next = document.querySelector(".slick-next slick-arrow"); //다음 버튼
const slideWidth = 350; //슬라이드 하나의 가로 너비
const slideMargin = 18; //슬라이드 간 사이의 margin

slides.style.width = (slideWidth + slideMargin) * slideCount + "px";

function moveSlide(num) {
    slides.style.left = -num * 368 + "px";
    currentIdx = num;
}

prev.addEventListener("click", function () {
    if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener("click", function () {
    if (currentIdx !== slideCount - 1) {
        moveSlide(currentIdx + 1);
    }
});

// ********* 배너 **********
const arrows = document.querySelectorAll("div.arrows");
const firstBanner = document.createElement("div.banner-inner");
const lastBanner = document.createElement("div.banner-inner");
const banner = document.querySelector("div.banner");
const buttons = document.querySelectorAll("div.buttons button");

let tempButton = buttons[0];
let autoSlideInterval = null;
let count = 1;
let arrowCheck = true;
let buttonCheck = true;

tempButton.style.backgroundColor = "black";

firstBanner.innerHTML = document.querySelector(".inner1");
banner.appendChild(firstBanner);

lastBanner.innerHTML = document.querySelector(".inner6");
banner.prepend(lastBanner);

banner.style.transform = `translate(-520px)`;

const autoSlide = () => {
    count++;
    banner.style.transition = `transform 0.5s`;
    banner.style.transform = `translate(-${520 * count}px)`;
    if (count == 7) {
        setTimeout(() => {
            banner.style.transition = `transform 0s`;
            banner.style.transform = `translate(-520px)`;
        }, 500);
        count = 1;
    }

    tempButton.style.backgroundColor = "white";
    buttons[count - 1].style.backgroundColor = "black";
    tempButton = buttons[count - 1];
};

autoSlideInterval = setInterval(autoSlide, 1000);

arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
        if (!arrowCheck) {
            return;
        }
        arrowCheck = false;
        clearInterval(autoSlideInterval);

        let arrowType = e.target.classList[1];

        if (arrowType === "left") {
            count--;
            banner.style.transition = `transform 0.5s`;
            banner.style.transform = `translate(-${520 * count}px)`;

            if (count == 0) {
                setTimeout(() => {
                    banner.style.transition = `transform 0s`;
                    banner.style.transform = `translate(-3120px)`;
                }, 500);

                count = 6;
            }
        } else {
            count++;

            banner.style.transition = `transform 0.5s`;
            banner.style.transform = `translate(-${520 * count}px)`;

            if (count == 7) {
                setTimeout(() => {
                    banner.style.transition = `transform 0s`;
                    banner.style.transform = `translate(-520px)`;
                }, 500);

                count = 1;
            }
        }

        tempButton.style.backgroundColor = "white";
        buttons[count - 1].style.backgroundColor = "black";
        tempButton = buttons[count - 1];

        autoSlideInterval = setInterval(autoSlide, 1000);

        setTimeout(() => {
            arrowCheck = true;
        }, 500);
    });
});

buttons.forEach((button, i) => {
    button.addEventListener("click", (e) => {
        if (!buttonCheck) {
            return;
        }
        clearInterval(autoSlideInterval);

        tempButton.style.backgroundColor = "white";
        count = i + 1;

        banner.style.transition = `transform 0.5s`;
        banner.style.transform = `translate(-${520 * count}px)`;

        buttons[i].style.backgroundColor = "black";
        tempButton = buttons[i];

        autoSlideInterval = setInterval(autoSlide, 1000);
        setTimeout(() => {
            buttonCheck = true;
        }, 500);
    });
});
