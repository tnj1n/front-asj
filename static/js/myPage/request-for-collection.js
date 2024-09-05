document.querySelectorAll("ul.depth > li > a").forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 동작 막기

        // 클릭된 메뉴의 active 클래스 토글
        anchor.classList.toggle("active");

        // 해당 메뉴의 ul.depth2 선택
        let submenu = anchor.nextElementSibling;
        if (
            submenu &&
            submenu.tagName === "UL" &&
            submenu.classList.contains("depth2")
        ) {
            if (anchor.classList.contains("active")) {
                // 메뉴를 열 때
                submenu.style.display = "block";
                submenu.style.overflow = "hidden"; // 오버플로우를 숨김
                submenu.style.maxHeight = "0"; // 초기값 설정
                // 애니메이션을 트리거하기 위해 requestAnimationFrame을 사용
                requestAnimationFrame(() => {
                    submenu.style.maxHeight = submenu.scrollHeight + "px"; // 스르륵 열리는 효과
                });
            } else {
                // 메뉴를 닫을 때
                submenu.style.maxHeight = submenu.scrollHeight + "px"; // 초기값 설정
                // 애니메이션을 트리거하기 위해 requestAnimationFrame을 사용
                requestAnimationFrame(() => {
                    submenu.style.maxHeight = "0"; // 스르륵 닫히는 효과
                });
                // 애니메이션이 끝난 후 메뉴 숨김 처리
                submenu.addEventListener("transitionend", function hideMenu() {
                    submenu.style.display = "none";
                    submenu.removeEventListener("transitionend", hideMenu);
                });
            }
        }
    });
});

// =======================================================================================================================================

// const liItems = document.querySelectorAll("ul.tab-type > li");
// const savingPointSection = document.querySelector("#request");
// const usePointSection = document.querySelector("#completed-request");
// const noDataSaving = document.querySelector("#no-data-request");
// const noDataUse = document.querySelector("#no-data-completed");

// const tabs = document.querySelectorAll(".tab-type li");
// const writeSection = document.getElementById("write");
// const reviewSection = document.getElementById("view-my-review");

// // 탭 클릭 시 적립 포인트 및 사용 포인트 섹션을 전환하는 기능
// liItems.forEach((liItem) => {
//     // 탭 내의 링크 요소를 선택하고, ID 값을 가져옴
//     const linkElement = liItem.querySelector("a");
//     const targetId = linkElement.getAttribute("id");

//     linkElement.addEventListener("click", () => {
//         // 모든 탭에서 active 클래스를 제거
//         liItems.forEach((item) => {
//             item.classList.remove("active");
//         });

//         // 현재 클릭된 탭에 active 클래스 추가
//         liItem.classList.add("active");

//         // 선택된 탭의 ID에 따라 섹션 및 no-data 박스를 업데이트
//         if (targetId === "total-favorite") {
//             // 적립 포인트 섹션을 보여주고, 사용 포인트 섹션은 숨김
//             savingPointSection.style.display = "block";
//             usePointSection.style.display = "none";
//             noDataUse.style.display = "none"; // noDataUse는 숨김

//             // 적립 포인트가 있는지 확인하고, 없으면 noDataSaving을 보여줌
//             const hasSavingPoints = savingPointSection.querySelector("li");
//             noDataSaving.style.display = hasSavingPoints ? "none" : "block";
//         } else if (targetId === "total-viewed") {
//             // 사용 포인트 섹션을 보여주고, 적립 포인트 섹션은 숨김
//             savingPointSection.style.display = "none";
//             usePointSection.style.display = "block";

//             // 사용 포인트가 있는지 확인하고, 없으면 noDataUse를 보여줌
//             const hasUsePoints = usePointSection.querySelector("li");
//             noDataUse.style.display = hasUsePoints ? "none" : "block";

//             // 적립 포인트 관련 no-data-saving은 기본적으로 숨김
//             noDataSaving.style.display = "none";
//         }
//     });
// });

// // 탭 클릭 시 후기 작성 및 나의 후기내역 섹션을 전환하는 기능
// tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         // 모든 탭에서 active 클래스를 제거
//         tabs.forEach((t) => t.classList.remove("active"));
//         tab.classList.add("active");

//         // 탭의 텍스트 내용을 기반으로 섹션 전환
//         const tabText = tab.textContent.trim();
//         if (tabText === "후기작성") {
//             writeSection.style.display = "block";
//             reviewSection.style.display = "none";
//         } else if (tabText === "나의 후기내역") {
//             writeSection.style.display = "none";
//             reviewSection.style.display = "block";
//         }
//     });
// });

// 상단 탭 (수거 요청 목록, 완료된 요청 목록) 선택
const bigTabs = document.querySelectorAll("#parentWrap > li");
const smallTabsRequest = document.querySelectorAll("#tab-request > li");

// 각 리스트 선택
const requestTab = document.querySelector("#request");
const noDataRequest = document.querySelector("#no-data-request");
const noDataCompleted = document.querySelector("#no-data-completed");

const requestAllList = document.querySelector("#requestAllList");
const requestAllListPlanned = document.querySelector("#requestAllList-planned");
const requestAllListCompleted = document.querySelector(
    "#requestAllList-completed"
);

// 페이지 로드 시 기본 설정
window.addEventListener("DOMContentLoaded", () => {
    // 기본적으로 수거 요청 목록 탭과 수거 요청만 활성화
    requestAllList.style.display = "block";
    requestAllListPlanned.style.display = "none";
    requestAllListCompleted.style.display = "none";
    noDataRequest.style.display = "none";
    noDataCompleted.style.display = "none";

    // 첫 페이지 로드시 하위 탭도 수거 요청으로 기본 설정
    smallTabsRequest[0].classList.add("active");
});

// 상단 탭 클릭 이벤트 처리
bigTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        bigTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        if (tab.querySelector("a").id === "total-request-lst") {
            // 수거 요청 목록 탭 클릭
            requestTab.style.display = "block"; // 요청 목록 보이기
            requestAllList.style.display = "block"; // 수거 요청 표시
            requestAllListPlanned.style.display = "none"; // 수거 예정 숨기기
            requestAllListCompleted.style.display = "none"; // 완료된 요청 숨기기
            noDataCompleted.style.display = "none"; // 완료된 요청 목록 no-data 숨기기

            // 수거 요청 탭이 보일 때, 첫 번째 하위 탭 활성화 (수거 요청)
            smallTabsRequest.forEach((t) => t.classList.remove("active"));
            smallTabsRequest[0].classList.add("active");

            // 하위 탭도 다시 보여주기
            document.querySelector("#tab-request").style.display = "flex";
        } else {
            // 완료된 요청 목록 탭 클릭
            requestTab.style.display = "block"; // 요청 목록 보이기
            requestAllListCompleted.style.display = "block"; // 완료된 요청 표시
            requestAllList.style.display = "none"; // 수거 요청 숨기기
            requestAllListPlanned.style.display = "none"; // 수거 예정 숨기기

            // 수거 요청 탭 숨기기
            document.querySelector("#tab-request").style.display = "none";

            // no-data 메시지 처리
            noDataCompleted.style.display =
                requestAllListCompleted.children.length > 0 ? "none" : "block";
            noDataRequest.style.display = "none";
        }
    });
});

// 하위 탭 클릭 이벤트 처리 (수거 요청, 수거 예정)
smallTabsRequest.forEach((tab) => {
    tab.addEventListener("click", () => {
        smallTabsRequest.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        if (tab.querySelector("a").id === "total-request") {
            // 수거 요청 탭 클릭
            requestAllList.style.display = "block";
            requestAllListPlanned.style.display = "none";
            requestAllListCompleted.style.display = "none";
            noDataRequest.style.display =
                requestAllList.children.length > 0 ? "none" : "block";
        } else {
            // 수거 예정 탭 클릭
            requestAllList.style.display = "none";
            requestAllListPlanned.style.display = "block";
            requestAllListCompleted.style.display = "none";
            noDataRequest.style.display =
                requestAllListPlanned.children.length > 0 ? "none" : "block";
        }
    });
});
