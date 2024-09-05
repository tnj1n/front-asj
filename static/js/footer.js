const toggleDiv = document.querySelector(".js_toggle.btn-company");
const toggleButton = document.querySelector(".ico-down");
const detail = document.querySelector(".company-box > .detail");

toggleDiv.addEventListener("click", () => {
    // Toggle detail 보이게
    if (detail.style.display === "none" || detail.style.display === "") {
        detail.style.display = "block";
        toggleDiv.classList.remove("close");
    } else {
        detail.style.display = "none";
        toggleDiv.classList.add("close");
    }

    // Toggle icon rotation
    toggleButton.classList.toggle("rotated");
});

// // 목록 토클 버튼
// document.addEventListener("DOMContentLoaded", function () {
//     // 모든 '.js_accordion' 클래스를 가진 링크 선택
//     const accordions = document.querySelectorAll(".company-box");

//     accordions.forEach((accordion) => {
//         accordion.addEventListener("click", function (event) {
//             event.preventDefault(); // 링크의 기본 동작 방지

//             // 가장 가까운 'li' 부모 요소 찾기
//             const boardItem = accordion.closest(".board-item");

//             // 'li' 요소에 'active' 클래스 토글
//             boardItem.classList.toggle("active");

//             // 같은 'dl' 내에서 'dd' 요소 찾기
//             const faqDetail = boardItem.querySelector("#faqDetail");

//             // 'faqDetail'에 'show' 클래스 토글
//             faqDetail.classList.toggle("show");
//         });
//     });
// });
