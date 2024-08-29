const niceSelects = document.querySelectorAll(".nice-select");

niceSelects.forEach((niceSelect) => {
    niceSelect.addEventListener("click", (e) => {
        const clickedOption = e.target.closest(".option");

        if (clickedOption) {
            // 현재 선택된 .nice-select 요소의 .current span을 찾습니다
            const currentSpan = niceSelect.querySelector(".current");

            // 모든 .option 요소를 찾습니다
            const options = niceSelect.querySelectorAll(".option");

            options.forEach((option) => {
                option.classList.remove("focus");
            });

            // 선택된 li의 textContent를 .current span에 설정합니다
            currentSpan.textContent = clickedOption.textContent;

            // 선택된 .option에만 색상과 focus 클래스를 적용합니다
            clickedOption.classList.add("focus");
            currentSpan.style.color = "#111";

            // 드롭다운 메뉴를 닫습니다 (open 클래스를 제거합니다)
            e.target.parentElement.classList.remove("open");
            console.log(niceSelect.classList.contains("open"));
        }
    });
});

// 드롭다운 클릭 시 열기/닫기 기능
const selectAll = document.querySelectorAll(".select-type2");

selectAll.forEach((select) => {
    select.addEventListener("click", (e) => {
        const niceSelect = e.target.closest(".nice-select");

        if (niceSelect) {
            selectAll.forEach((el) => {
                el.querySelectorAll(".nice-select").forEach((ns) => {
                    if (ns !== niceSelect) {
                        ns.classList.remove("open");
                    }
                });
            });

            // 현재 클릭한 nice-select 요소의 open 클래스 상태를 확인
            if (niceSelect.classList.contains("open")) {
                niceSelect.classList.remove("open");
            } else {
                niceSelect.classList.add("open");
            }
        }
    });
});

// 클릭 외부 영역 클릭 시 모든 nice-select 닫기
document.addEventListener("click", (e) => {
    if (!e.target.closest(".select-type2")) {
        selectAll.forEach((select) => {
            select.querySelectorAll(".nice-select").forEach((ns) => {
                ns.classList.remove("open");
            });
        });
    }
});

// clear 버튼
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("schKey");
    const clearButton = document.querySelector(".btn-clear");

    // 입력 필드에서 값이 변경될 때마다 호출되는 함수
    searchInput.addEventListener("input", () => {
        if (searchInput.value.trim() !== "") {
            // 입력 필드에 값이 있을 때 clear 버튼을 보이게 합니다
            clearButton.classList.remove("hidden");
        } else {
            // 입력 필드가 비어 있을 때 clear 버튼을 숨깁니다
            clearButton.classList.add("hidden");
        }
    });

    // clear 버튼 클릭 시 입력 필드를 비우고 clear 버튼 숨기기
    clearButton.addEventListener("click", () => {
        searchInput.value = ""; // 입력 필드 비우기
        clearButton.classList.add("hidden"); // clear 버튼 숨기기
        searchInput.focus(); // 입력 필드에 포커스 맞추기
    });
});

// filter 선택할 때
document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".filter-wrap .cateVal");
    const allItem = document.getElementById("cate_all");

    // '전체' 항목 클릭 시 모든 항목 선택/해제
    allItem.addEventListener("click", () => {
        // 모든 항목에서 active 클래스를 제거하고 '전체' 항목만 활성화
        listItems.forEach((li) => li.classList.remove("active"));
        allItem.classList.add("active");

        // 선택된 카테고리들 처리
        const activeCategories = [allItem.id.replace("cate_", "")];
        setCateBySearch(activeCategories);
    });

    // 나머지 항목 클릭 시 active 클래스 토글
    listItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            const clickedItem = e.currentTarget;

            // 클릭된 항목에 active 클래스를 추가하거나 제거
            clickedItem.classList.toggle("active");

            // '전체' 항목의 상태를 업데이트
            if (clickedItem === allItem) {
                return; // '전체' 항목 클릭 시 별도의 처리는 이미 위에서 하고 있으므로
            }

            const isAllActive = allItem.classList.contains("active");
            const allItems = Array.from(listItems);
            const allItemsActive = allItems.every((li) =>
                li.classList.contains("active")
            );

            if (allItemsActive) {
                allItem.classList.add("active");
            } else {
                allItem.classList.remove("active");
            }

            // 선택된 카테고리들 처리
            const activeItems = document.querySelectorAll(
                ".filter-wrap .cateVal.active"
            );
            const activeCategories = Array.from(activeItems).map((li) =>
                li.id.replace("cate_", "")
            );
            setCateBySearch(activeCategories);
        });
    });
});

// 예시: setCateBySearch 함수
function setCateBySearch(categories) {
    // 선택된 카테고리들을 처리합니다
    console.log("Selected categories:", categories);
}
