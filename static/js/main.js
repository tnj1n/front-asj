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

document.addEventListener("DOMContentLoaded", () => {
    const planFilterButtons = document.querySelectorAll(
        "#swiper-wrapper-subscribe .swiper-slide"
    );
    const planItems = document.querySelectorAll(".plan-item");

    planFilterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.textContent.trim(); // 버튼 텍스트를 기준으로 필터 결정

            planItems.forEach((item) => {
                const carrier = item
                    .querySelector(".flag-type")
                    .textContent.trim(); // plan-item 내의 통신사 정보
                if (filter === "전체" || carrier === filter) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            // 모든 버튼에서 active 클래스 제거하고, 클릭된 버튼에 추가
            planFilterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const requestFilterButtons = document.querySelectorAll(
        "#promotion-tags-container .swiper-slide"
    );
    const requestItems = document.querySelectorAll(
        ".allRequest .requestList1, .allRequest .requestList2, .allRequest .requestList3, .allRequest .requestList4, .allRequest .requestList5"
    );

    requestFilterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.textContent.trim(); // 버튼 텍스트를 기준으로 필터 결정

            requestItems.forEach((item) => {
                const tags = item.querySelectorAll(".tag-box .tag-type2");
                let matched = false;

                tags.forEach((tag) => {
                    if (
                        filter === "전체" ||
                        tag.textContent.trim() === filter
                    ) {
                        matched = true;
                    }
                });

                if (matched) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            // 모든 버튼에서 active 클래스 제거하고, 클릭된 버튼에 추가
            requestFilterButtons.forEach((btn) =>
                btn.classList.remove("active")
            );
            button.classList.add("active");
        });
    });
});

// ******** 요금제 슬라이드 *******

document.addEventListener("DOMContentLoaded", () => {
    const planList = document.querySelector(".slick-track");
    const leftArrow = document.querySelector(".slick-prev.slick-arrow");
    const rightArrow = document.querySelector(".slick-next.slick-arrow");
    const planItems = document.querySelectorAll(".plan-item");

    let currentIndex = 0;
    const planItemWidth = 350; // 각 plan-item의 너비
    const planItemMargin = 15; // 각 plan-item의 margin
    const totalItemWidth = planItemWidth + planItemMargin; // 슬라이드 요소의 전체 너비 (너비 + 마진)
    const maxIndex = planItems.length - 1;

    // 슬라이드 위치 업데이트
    function updateSlidePosition() {
        planList.style.transition = "transform 0.5s ease"; // 부드럽게 이동
        planList.style.transform = `translateX(${
            -currentIndex * totalItemWidth
        }px)`;

        // 왼쪽 버튼 숨김 처리
        if (currentIndex === 0) {
            leftArrow.style.display = "none";
        } else {
            leftArrow.style.display = "inline-block";
        }

        // 오른쪽 버튼 숨김 처리
        if (currentIndex === maxIndex) {
            rightArrow.style.display = "none";
        } else {
            rightArrow.style.display = "inline-block";
        }
    }

    // 초기 버튼 상태 설정
    updateSlidePosition();

    // 오른쪽 화살표 클릭 이벤트
    rightArrow.addEventListener("click", () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlidePosition();
        }
    });

    // 왼쪽 화살표 클릭 이벤트
    leftArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlidePosition();
        }
    });
});
