// =================================================오른쪽 메뉴====================================================================
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
// ====================================================================================================================================================

// 상단 탭 (나의 찜, 최근 본 상품) 선택
const bigTabs = document.querySelectorAll("#parentWrap > li");

// 하위 탭 (요금제, 상품) 선택
const smallTabsWish = document.querySelectorAll("#tab-wish > li");
const smallTabsViewed = document.querySelectorAll("#tab-viewed > li");

// 각 리스트와 no-data 선택
const wishPlanList = document.querySelector("#lst-plan");
const wishProductList = document.querySelector("#lst-product");
const viewedPlanList = document.querySelector("#lst-viewed-plan");
const viewedProductList = document.querySelector("#lst-viewed-product");
const noData = document.querySelector("#no-data");

// 페이지가 처음 로드될 때 초기 상태 설정
window.onload = () => {
    document.querySelector("#tab-wish").style.display = "flex";
    document.querySelector("#tab-viewed").style.display = "none";
    wishPlanList.style.display = "block";
    wishProductList.style.display = "none";
    viewedPlanList.style.display = "none";
    viewedProductList.style.display = "none";
    noData.style.display =
        wishPlanList.querySelectorAll("div.medal-list-item").length > 0
            ? "none"
            : "block";

    bigTabs.forEach((t) => t.classList.remove("active"));
    bigTabs[0].classList.add("active");

    smallTabsWish.forEach((t) => t.classList.remove("active"));
    smallTabsWish[0].classList.add("active");
};

// '나의 찜'과 '최근 본 상품' 탭 클릭 이벤트 처리
bigTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        bigTabs.forEach((t) => t.classList.remove("active")); // 모든 탭의 active 클래스 제거
        tab.classList.add("active"); // 클릭된 탭에 active 클래스 추가

        if (tab.querySelector("a").id === "total-wish") {
            document.querySelector("#tab-wish").style.display = "flex";
            document.querySelector("#tab-viewed").style.display = "none";
            wishPlanList.style.display = "block";
            wishProductList.style.display = "none";
            viewedPlanList.style.display = "none";
            viewedProductList.style.display = "none";

            // 하위 탭 초기화 및 no-data 표시 업데이트
            smallTabsWish.forEach((t) => t.classList.remove("active"));
            smallTabsWish[0].classList.add("active");
            noData.style.display =
                wishPlanList.querySelectorAll("div.medal-list-item").length > 0
                    ? "none"
                    : "block";
        } else {
            document.querySelector("#tab-wish").style.display = "none";
            document.querySelector("#tab-viewed").style.display = "flex";
            viewedPlanList.style.display = "block";
            viewedProductList.style.display = "none";
            wishPlanList.style.display = "none";
            wishProductList.style.display = "none";

            // 하위 탭 초기화 및 no-data 표시 업데이트
            smallTabsViewed.forEach((t) => t.classList.remove("active"));
            smallTabsViewed[0].classList.add("active");
            noData.style.display =
                viewedPlanList.querySelectorAll("div").length > 0
                    ? "none"
                    : "block";
        }
    });
});

// 하위 탭 클릭 이벤트 처리
[...smallTabsWish, ...smallTabsViewed].forEach((tab) => {
    tab.addEventListener("click", () => {
        const parentUl = tab.closest("ul");

        parentUl
            .querySelectorAll("li")
            .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        if (tab.querySelector("a").id === "total-wish-plan") {
            wishPlanList.style.display = "block";
            wishProductList.style.display = "none";
            noData.style.display =
                wishPlanList.querySelectorAll("div.medal-list-item").length > 0
                    ? "none"
                    : "block";
        } else if (tab.querySelector("a").id === "total-wish-product") {
            wishPlanList.style.display = "none";
            wishProductList.style.display = "block";
            noData.style.display =
                wishProductList.querySelectorAll("div").length > 0
                    ? "none"
                    : "block";
        } else if (tab.querySelector("a").id === "total-viewed-plan") {
            viewedPlanList.style.display = "block";
            viewedProductList.style.display = "none";
            noData.style.display =
                viewedPlanList.querySelectorAll("div").length > 0
                    ? "none"
                    : "block";
        } else if (tab.querySelector("a").id === "total-viewed-product") {
            viewedPlanList.style.display = "none";
            viewedProductList.style.display = "block";
            noData.style.display =
                viewedProductList.querySelectorAll("div").length > 0
                    ? "none"
                    : "block";
        }
    });
});
