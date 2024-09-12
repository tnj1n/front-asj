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

// 상세 주소와 이메일 input 요소 선택
const address2Input = document.querySelector("#address2");
const emailInput = document.querySelector("#email");
const formItems = document.querySelectorAll(".form-item"); // 모든 form-item 선택

// 체크박스 선택
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// 입력 필드 클릭 시 글씨 작아지기와 is-invalid 클래스 제거
formItems.forEach((item) => {
    const input = item.querySelector("input");

    if (input) {
        // 입력 필드에 포커스가 가면 is-invalid 클래스 추가
        input.addEventListener("focus", () => {
            item.classList.add("is-invalid");
        });

        // 입력 필드에서 포커스가 벗어나면 is-invalid 클래스 제거
        input.addEventListener("blur", () => {
            item.classList.remove("is-invalid");
        });
    }
});

// 체크박스 클릭 시 selected 클래스 추가/제거
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        const parent = checkbox.closest(".chk-box"); // chk-box 요소 찾아서 선택
        if (checkbox.checked) {
            parent.classList.add("selected"); // 체크되면 selected 클래스 추가
        } else {
            parent.classList.remove("selected"); // 체크 해제되면 selected 클래스 제거
        }
    });
});
