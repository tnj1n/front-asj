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

document.querySelectorAll("ul.tab-type > li").forEach(function (tab) {
    tab.addEventListener("click", function () {
        // 현재 active 상태의 탭에서 active 클래스 제거
        document
            .querySelector("ul.tab-type > li.active")
            .classList.remove("active");

        // 클릭된 탭에 active 클래스 추가
        tab.classList.add("active");

        // 모든 tab-content 숨기기
        document
            .querySelectorAll(".tab-type2.js_tab")
            .forEach(function (content) {
                content.style.display = "none";
            });

        // 클릭된 탭과 관련된 tab-content 보이기
        let targetId = tab.getAttribute("data-target");
        document.getElementById(targetId).style.display = "block";
    });
});
