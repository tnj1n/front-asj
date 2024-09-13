// const liItems = document.querySelectorAll(".tap-type >li");
// const wishPlanList = document.querySelector("#lst-plan"); // 나의 찜- 요금제
// const wishProductList = document.querySelector("#lst-product"); //나의 찜 - 상품
// const viewedPlanList = document.querySelector("#lst-viewed-plan"); //최근 본 상품-요금제
// const viewedProductList = document.querySelector("lst-viewed-product"); //최근 본 상품-상품
// const noData = document.querySelector("#no-data");

// const bigTabs = document.querySelectorAll(".tab-type > li"); // 나의 찜-최근 본 상품
// const smallTabs = document.querySelectorAll(".tab-type2 > li"); // 요금제 - 상품
// const totalWishPlanTab = document.querySelectorAll("#total-wish-plan"); //나의 찜 - 요금제 탭
// const totalWishProductTab = document.querySelectorAll("#total-wish-product"); //나의 찜 - 상품 탭
// const totalViewedPlanTab = document.querySelectorAll("#total-viewed-plan"); // 최근 본 상품 - 요금제 탭
// const totlaViewedProductTab = document.querySelectorAll(
//     "#total-viewed-product"
// ); // 최근 본 상품 - 상품 탭

// // 상단 탭 클릭 시 요금제, 상품 섹션 전환 기능
// liItems.forEach((liItem) => {
//     const linkElement = liItem.querySelector("a");
//     const targetId = linkElement.getAttribute("id");

//     linkElement.addEventListener("click", () => {
//         liItems.forEach((item) => {
//             item.classList.remove("active");
//         });

//         liItem.classList.add("active");

//         if (targetId === "total-wish" && totalWishPlanTab) {
//             wishPlanList.style.display = "block";
//             wishProductList.style.display = "none";
//             viewedPlanList.style.display = "none";
//             viewedProductList.style.display = "none";

//             const hasWishPlans = wishPlanList.querySelector("li");
//             noData.style.display = hasWishPlans ? "none" : "block";
//         } else if (targetId === "total-wish" && totalWishProductTab) {
//             wishPlanList.style.display = "none";
//             wishProductList.style.display = "block";
//             viewedPlanList.style.display = "none";
//             viewedProductList.style.display = "none";

//             const hasWishProducts = wishProductList.querySelector("li");
//             noData.style.display = hasWishProducts ? "none" : "block";
//         } else if (targetId === "total-viewed" && totalViewedPlanTab) {
//             wishPlanList.style.display = "none";
//             wishProductList.style.display = "none";
//             viewedPlanList.style.display = "block";
//             viewedProductList.style.display = "none";

//             const hasViewedPlans = viewedPlanList.querySelector("li");
//             noData.style.display = hasViewedPlans ? "none" : "block";
//         } else if (targetId === "total-viewed" && totlaViewedProductTab) {
//             wishPlanList.style.display = "none";
//             wishProductList.style.display = "none";
//             viewedPlanList.style.display = "none";
//             viewedProductList.style.display = "block";

//             const hasViewedProduts = viewedProductList.querySelector("li");
//             noData.style.display = hasViewedProduts ? "none" : "block";
//         }
//     });
// });

// tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         tabs.forEach((t) => t.classList.remove("active"));
//         tab.classList.add("active");

//         const tabText = tab.textContent.trim();
//         if (tabText === "나의 찜") {
//             wishSection.style.display = "block";
//             viewedSection.style.display = "none";
//         } else if (tabText === "최근 본 상품") {
//             wishSection.style.display = "none";
//             viewedSection.style.display = "block";
//         }
//     });
// });

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
