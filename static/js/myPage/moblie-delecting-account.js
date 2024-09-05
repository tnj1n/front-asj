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
