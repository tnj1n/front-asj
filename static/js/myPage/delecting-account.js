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

// ******** 탈퇴사유 *********
document.addEventListener("DOMContentLoaded", () => {
    const selectBox = document.querySelector(".nice-select");
    const selectOptions = selectBox.querySelectorAll(".option");
    const currentSelection = selectBox.querySelector(".current");

    // selectBox 클릭 시 옵션 리스트 열기/닫기
    selectBox.addEventListener("click", () => {
        if (selectBox.classList.contains("open")) {
            selectBox.classList.remove("open");
        } else {
            selectBox.classList.add("open");
        }
    });

    // 옵션 항목 클릭 시 해당 항목 선택 및 클래스 추가
    selectOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
            // 선택된 옵션으로 current 업데이트
            currentSelection.textContent = e.target.textContent;

            // 모든 옵션에서 selected 및 focus 클래스 제거
            selectOptions.forEach((opt) => {
                opt.classList.remove("selected", "focus");
            });

            // 선택된 옵션에 selected 및 focus 클래스 추가
            option.classList.add("selected", "focus");

            // 옵션 리스트를 닫지 않음
        });

        // 키보드로 포커스 이동 시 focus 클래스 처리
        option.addEventListener("focus", () => {
            option.classList.add("focus");
        });

        option.addEventListener("blur", () => {
            option.classList.remove("focus");
        });
    });

    // 클릭 외부 클릭 시 옵션 리스트 닫기
    document.addEventListener("click", (e) => {
        if (!selectBox.contains(e.target)) {
            selectBox.classList.remove("open");
        }
    });
});
