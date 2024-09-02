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
const savingPointSection = document.querySelector("#saving-point");
const usePointSection = document.querySelector("#use-point");
const noDataSaving = document.querySelector("#no-data-saving");
const noDataUse = document.querySelector("#no-data-use");

// 페이지 로드 시 초기 상태 설정
const initialHasUsePoints = usePointSection.querySelector("li");
const initialHasSavingPoints = savingPointSection.querySelector("li");

// 적립 포인트 탭이 기본적으로 활성화되어 있기 때문에 #no-data-use 숨김
noDataUse.style.display = "none";

if (initialHasSavingPoints) {
    noDataSaving.style.display = "none";
} else {
    noDataSaving.style.display = "block";
}

liItems.forEach((liItem) => {
    const addPoint = liItem.querySelector("a");
    const targetId = addPoint.getAttribute("id");

    addPoint.addEventListener("click", () => {
        // 모든 li에서 active 클래스 제거
        liItems.forEach((item) => {
            item.classList.remove("active");
        });

        // 현재 클릭된 li에 active 클래스 추가
        liItem.classList.add("active");

        // 포인트 섹션 및 nodata-box 상태 업데이트
        if (targetId === "total-favorite") {
            savingPointSection.style.display = "block";
            usePointSection.style.display = "none";
            noDataUse.style.display = "none"; // noDataUse 숨기기

            // 적립 포인트 확인
            const hasSavingPoints = savingPointSection.querySelector("li");
            if (hasSavingPoints) {
                noDataSaving.style.display = "none";
            } else {
                noDataSaving.style.display = "block";
            }
        } else if (targetId === "total-viewd") {
            savingPointSection.style.display = "none";
            usePointSection.style.display = "block";

            // 사용 포인트 확인
            const hasUsePoints = usePointSection.querySelector("li");
            if (hasUsePoints) {
                noDataUse.style.display = "none";
            } else {
                noDataUse.style.display = "block";
            }

            // 적립 포인트 관련 no-data-saving를 기본적으로 숨김
            noDataSaving.style.display = "none";
        }
    });
});
