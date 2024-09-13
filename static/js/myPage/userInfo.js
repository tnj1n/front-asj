document.querySelectorAll("ul.depth > li > a").forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 동작 막기

        // 클릭된 메뉴의 ul.depth2 선택
        let submenu = anchor.nextElementSibling;

        if (
            submenu &&
            submenu.tagName === "UL" &&
            submenu.classList.contains("depth2")
        ) {
            if (anchor.classList.contains("active")) {
                // 메뉴를 닫을 때
                submenu.style.maxHeight = submenu.scrollHeight + "px"; // 현재 높이 설정
                requestAnimationFrame(() => {
                    submenu.style.maxHeight = "0"; // 스르륵 닫히는 효과
                });
                // 애니메이션 종료 후 display를 none으로 설정
                submenu.addEventListener("transitionend", function hideMenu() {
                    submenu.style.display = "none";
                    submenu.removeEventListener("transitionend", hideMenu);
                });
                anchor.classList.remove("active");
                // 아이콘을 +로 변경
                anchor.style.backgroundImage = "url(../images/icon/plus.svg)";
            } else {
                // 메뉴를 열 때
                submenu.style.display = "block";
                submenu.style.maxHeight = "0"; // 초기값 설정
                // requestAnimationFrame을 사용하여 애니메이션 트리거
                requestAnimationFrame(() => {
                    submenu.style.maxHeight = submenu.scrollHeight + "px"; // 스르륵 열리는 효과
                });
                anchor.classList.add("active");
                // 아이콘을 -로 변경
                anchor.style.backgroundImage = "url(../images/icon/minus.svg)";
            }
        }
    });
});
