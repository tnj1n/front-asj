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

const liItems = document.querySelectorAll("ul.tab-type > li");
const savingPointSection = document.querySelector("#request");
const usePointSection = document.querySelector("#completed-request");
const noDataSaving = document.querySelector("#no-data-request");
const noDataUse = document.querySelector("#no-data-completed");

const tabs = document.querySelectorAll(".tab-type li");
const writeSection = document.getElementById("write");
const reviewSection = document.getElementById("view-my-review");

// 탭 클릭 시 적립 포인트 및 사용 포인트 섹션을 전환하는 기능
liItems.forEach((liItem) => {
    // 탭 내의 링크 요소를 선택하고, ID 값을 가져옴
    const linkElement = liItem.querySelector("a");
    const targetId = linkElement.getAttribute("id");

    linkElement.addEventListener("click", () => {
        // 모든 탭에서 active 클래스를 제거
        liItems.forEach((item) => {
            item.classList.remove("active");
        });

        // 현재 클릭된 탭에 active 클래스 추가
        liItem.classList.add("active");

        // 선택된 탭의 ID에 따라 섹션 및 no-data 박스를 업데이트
        if (targetId === "total-favorite") {
            // 적립 포인트 섹션을 보여주고, 사용 포인트 섹션은 숨김
            savingPointSection.style.display = "block";
            usePointSection.style.display = "none";
            noDataUse.style.display = "none"; // noDataUse는 숨김

            // 적립 포인트가 있는지 확인하고, 없으면 noDataSaving을 보여줌
            const hasSavingPoints = savingPointSection.querySelector("li");
            noDataSaving.style.display = hasSavingPoints ? "none" : "block";
        } else if (targetId === "total-viewed") {
            // 사용 포인트 섹션을 보여주고, 적립 포인트 섹션은 숨김
            savingPointSection.style.display = "none";
            usePointSection.style.display = "block";

            // 사용 포인트가 있는지 확인하고, 없으면 noDataUse를 보여줌
            const hasUsePoints = usePointSection.querySelector("li");
            noDataUse.style.display = hasUsePoints ? "none" : "block";

            // 적립 포인트 관련 no-data-saving은 기본적으로 숨김
            noDataSaving.style.display = "none";
        }
    });
});

// 탭 클릭 시 후기 작성 및 나의 후기내역 섹션을 전환하는 기능
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // 모든 탭에서 active 클래스를 제거
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");

        // 탭의 텍스트 내용을 기반으로 섹션 전환
        const tabText = tab.textContent.trim();
        if (tabText === "후기작성") {
            writeSection.style.display = "block";
            reviewSection.style.display = "none";
        } else if (tabText === "나의 후기내역") {
            writeSection.style.display = "none";
            reviewSection.style.display = "block";
        }
    });
});
