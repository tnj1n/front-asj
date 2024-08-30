// document.addEventListener("DOMContentLoaded", () => {
//     const swiperWrapper = document.querySelectorAll(
//         ".plan-tag > .swiper-wrapper"
//     );

//     swiperWrapper.forEach((liItem) => {
//         const link = liItem.querySelector(".swiper-slide");

//         link.addEventListener("click", () => {
//             swiperWrapper.forEach((item) => {
//                 item.classList.add("active");
//             });

//             // liItem.classList.add("active");
//         });
//     });
// });

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
