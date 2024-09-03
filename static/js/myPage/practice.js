const liItems = document.querySelectorAll(".tap-type >li");
const wishPlanList = document.querySelector("#lst-plan"); // 나의 찜- 요금제
const wishProductList = document.querySelector("#lst-product"); //나의 찜 - 상품
const viewedPlanList = document.querySelector("#lst-viewed-plan"); //최근 본 상품-요금제
const viewedProductList = document.querySelector("lst-viewed-product"); //최근 본 상품-상품
const noData = document.querySelector("#no-data");

const bigTabs = document.querySelectorAll(".tab-type > li"); // 나의 찜-최근 본 상품
const smallTabs = document.querySelectorAll(".tab-type2 > li"); // 요금제 - 상품
const totalWishPlanTab = document.querySelectorAll("#total-wish-plan"); //나의 찜 - 요금제 탭
const totalWishProductTab = document.querySelectorAll("#total-wish-product"); //나의 찜 - 상품 탭
const totalViewedPlanTab = document.querySelectorAll("#total-viewed-plan"); // 최근 본 상품 - 요금제 탭
const totlaViewedProductTab = document.querySelectorAll(
    "#total-viewed-product"
); // 최근 본 상품 - 상품 탭

// 상단 탭 클릭 시 요금제, 상품 섹션 전환 기능
liItems.forEach((liItem) => {
    const linkElement = liItem.querySelector("a");
    const targetId = linkElement.getAttribute("id");

    linkElement.addEventListener("click", () => {
        liItems.forEach((item) => {
            item.classList.remove("active");
        });

        liItem.classList.add("active");

        if (targetId === "total-wish" && totalWishPlanTab) {
            wishPlanList.style.display = "block";
            wishProductList.style.display = "none";
            viewedPlanList.style.display = "none";
            viewedProductList.style.display = "none";

            const hasWishPlans = wishPlanList.querySelector("li");
            noData.style.display = hasWishPlans ? "none" : "block";
        } else if (targetId === "total-wish" && totalWishProductTab) {
            wishPlanList.style.display = "none";
            wishProductList.style.display = "block";
            viewedPlanList.style.display = "none";
            viewedProductList.style.display = "none";

            const hasWishProducts = wishProductList.querySelector("li");
            noData.style.display = hasWishProducts ? "none" : "block";
        } else if (targetId === "total-viewed" && totalViewedPlanTab) {
            wishPlanList.style.display = "none";
            wishProductList.style.display = "none";
            viewedPlanList.style.display = "block";
            viewedProductList.style.display = "none";

            const hasViewedPlans = viewedPlanList.querySelector("li");
            noData.style.display = hasViewedPlans ? "none" : "block";
        } else if (targetId === "total-viewed" && totlaViewedProductTab) {
            wishPlanList.style.display = "none";
            wishProductList.style.display = "none";
            viewedPlanList.style.display = "none";
            viewedProductList.style.display = "block";

            const hasViewedProduts = viewedProductList.querySelector("li");
            noData.style.display = hasViewedProduts ? "none" : "block";
        }
    });
});

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        const tabText = tab.textContent.trim();
        if (tabText === "나의 찜") {
            wishSection.style.display = "block";
            viewedSection.style.display = "none";
        } else if (tabText === "최근 본 상품") {
            wishSection.style.display = "none";
            viewedSection.style.display = "block";
        }
    });
});
