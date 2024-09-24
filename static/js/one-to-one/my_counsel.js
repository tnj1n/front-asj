// 자바스크립트 코드
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("pop-alert2");
    const cancelButton = document.querySelector(
        "#pop-alert2 .btn-wrap .btn-type.v3"
    );

    // 모달 열기 함수
    function openModal() {
        modal.style.display = "flex"; // 모달 보이기
        document.body.style.overflow = "hidden"; // 배경 스크롤 비활성화
        document.querySelector(".pop-wrap").style.animation = "popUp 0.5s";
        setTimeout(() => {
            modalCheck = true;
        }, 500);
    }

    // 모달 닫기 함수
    function closeModal() {
        document.body.style.overflow = ""; // 배경 스크롤 복원
        document.querySelector(".pop-wrap").style.animation = "popDown 0.5s";
        setTimeout(() => {
            modal.style.display = "none";
        }, 450);
    }

    // 취소 버튼 클릭 시 모달 닫기
    if (cancelButton) {
        cancelButton.addEventListener("click", closeModal);
    }

    // 페이지 로드 시 모달 열기
    openModal();
});

// 탭 활성화
const actives = document.querySelectorAll(".tab-type li");

actives.forEach((li) => {
    li.addEventListener("click", (e) => {
        if (e.target.classList.contains("choice")) {
            actives.forEach((e) => {
                e.classList.remove("active");
            });
            li.classList.add("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // 주요 요소 선택
    const boardItems = document.querySelectorAll(".board-item"); // 게시판의 각 항목
    const moreBtn = document.getElementById("moreBtn"); // '더보기' 버튼
    const noData = document.querySelector(".nodata-box"); // 데이터가 없을 때 표시할 요소
    let visibleCount = 10; // 처음에 보여줄 항목 수

    let filteredItems = Array.from(boardItems); // 항목 배열로 변환

    // 데이터가 있는지 확인하고 없으면 noData를 보여줌
    function checkData() {
        if (filteredItems.length === 0) {
            noData.style.display = "block"; // 데이터가 없을 때 noData 표시
            moreBtn.style.display = "none"; // '더보기' 버튼 숨김
        } else {
            noData.style.display = "none"; // 데이터가 있을 때 noData 숨김
        }
    }

    // 초기 10개 항목을 표시하는 함수
    function showInitialItems() {
        checkData(); // 데이터가 있는지 확인
        filteredItems.forEach((item, index) => {
            if (index < visibleCount) {
                item.style.display = "block"; // 처음 10개 항목만 표시
            } else {
                item.style.display = "none"; // 나머지는 숨김
            }
        });
        // 모든 항목이 표시되면 '더보기' 버튼 숨김
        if (visibleCount >= filteredItems.length) {
            moreBtn.style.display = "none";
        }
    }

    // '더보기' 버튼 클릭 시 추가 항목을 표시하는 함수
    function showMoreItems() {
        const nextCount = visibleCount + 10; // 한 번에 추가로 보여줄 항목 수
        filteredItems.forEach((item, index) => {
            if (index >= visibleCount && index < nextCount) {
                item.style.display = "block"; // 다음 10개 항목 표시
            }
        });
        visibleCount = nextCount;
        // 모든 항목이 표시되면 '더보기' 버튼을 숨김
        if (visibleCount >= filteredItems.length) {
            moreBtn.style.display = "none";
        }
    }

    // 아코디언 기능: 게시판 항목의 상세보기 토글
    document.querySelectorAll(".js_accordion").forEach((accordion) => {
        accordion.addEventListener("click", () => {
            const boardItem = accordion.closest(".board-item");
            boardItem.classList.toggle("active");
            const faqDetail = boardItem.querySelector("#faqDetail");
            faqDetail.classList.toggle("show");
        });
    });

    // 페이지 로드 시 초기 항목 표시 및 더보기 버튼 클릭 이벤트 리스너 등록
    showInitialItems(); // 초기 10개 항목 표시
    moreBtn.addEventListener("click", showMoreItems); // '더보기' 버튼 클릭 시 추가 항목 표시
});
