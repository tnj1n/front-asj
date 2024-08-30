document.addEventListener("DOMContentLoaded", () => {
    const niceSelects = document.querySelectorAll(".nice-select");
    const selectAll = document.querySelectorAll(".select-type2");
    const searchInput = document.getElementById("schKey");
    const clearButton = document.querySelector(".btn-clear");
    const listItems = document.querySelectorAll(".filter-wrap .cateVal");
    const allItem = document.getElementById("cate_all");
    const filterWrap = document.querySelector(".filter-wrap");
    const btnOpen = filterWrap.querySelector(".btn-open");
    const boardItems = document.querySelectorAll(".board-item");
    const moreBtn = document.getElementById("moreBtn");

    let visibleCount = 15; // 처음에 보일 항목 수
    let filteredItems = []; // 필터링된 항목을 저장할 배열

    // 필터링 후 처음 15개 항목만 표시하는 함수
    function showInitialItems() {
        // 모든 항목을 먼저 숨기기
        boardItems.forEach((item) => (item.style.display = "none"));
        filteredItems.forEach((item, index) => {
            if (index < visibleCount) item.style.display = "block";
        });
        // '더보기' 버튼의 표시 여부 조정
        moreBtn.style.display =
            filteredItems.length > visibleCount ? "block" : "none";
    }

    // 더보기 버튼 클릭 시 추가 항목을 표시하는 함수
    function showMoreItems() {
        const nextCount = visibleCount + 10; // 한 번에 추가로 보여줄 항목 수
        filteredItems.forEach((item, index) => {
            if (index >= visibleCount && index < nextCount)
                item.style.display = "block";
        });
        visibleCount = nextCount;
        // 모든 항목이 표시되면 더보기 버튼을 숨김
        if (visibleCount >= filteredItems.length)
            moreBtn.style.display = "none";
    }

    // 드롭다운에서 선택한 항목에 따라 리스트를 필터링하는 함수
    function filterItems() {
        const filterValue = document
            .querySelector(".nice-select .current")
            .textContent.trim();
        filteredItems = Array.from(boardItems).filter((item) => {
            const tag = item.querySelector(".tag-type2.v3");
            const tagValue = tag ? tag.textContent.trim() : "";
            return filterValue === "전체" || filterValue === tagValue;
        });
        // 필터링 후 항목 표시
        visibleCount = 15; // '더보기' 버튼 클릭으로 인한 표시 항목 수 초기화
        showInitialItems();
    }

    // 드롭다운 기능 구현
    niceSelects.forEach((niceSelect) => {
        niceSelect.addEventListener("click", (e) => {
            e.stopPropagation(); // 클릭 이벤트 전파 방지
            const clickedOption = e.target.closest(".option");
            if (clickedOption) {
                const currentSpan = niceSelect.querySelector(".current");
                const options = niceSelect.querySelectorAll(".option");
                options.forEach((option) => option.classList.remove("focus"));
                currentSpan.textContent = clickedOption.textContent;
                clickedOption.classList.add("focus");
                currentSpan.style.color = "#111";
                niceSelect.classList.remove("open");
                filterItems(); // 드롭다운 선택 후 필터링 적용
            } else {
                niceSelect.classList.toggle("open"); // 드롭다운 열기/닫기
            }
        });
    });

    // 드롭다운 클릭 시 열기/닫기 기능 구현
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
                niceSelect.classList.toggle("open");
            }
        });
    });

    // 클릭 외부 영역 클릭 시 모든 드롭다운 닫기
    document.addEventListener("click", (e) => {
        selectAll.forEach((select) => {
            select.querySelectorAll(".nice-select").forEach((ns) => {
                if (!ns.contains(e.target)) {
                    ns.classList.remove("open");
                }
            });
        });
    });

    // 검색 입력 필드의 값 변경 시 'clear' 버튼 표시/숨기기
    searchInput.addEventListener("input", () => {
        clearButton.classList.toggle("hidden", searchInput.value.trim() === "");
    });

    // 'clear' 버튼 클릭 시 입력 필드 비우기 및 포커스 맞추기
    clearButton.addEventListener("click", () => {
        searchInput.value = "";
        clearButton.classList.add("hidden");
        searchInput.focus();
    });

    // 필터 항목 클릭 시 처리
    function handleCategoryClick() {
        listItems.forEach((li) => li.classList.remove("active"));
        allItem.classList.add("active");
        const activeCategories = [allItem.id.replace("cate_", "")];
        setCateBySearch(activeCategories);
        filterItems(); // 필터링 적용
    }

    allItem.addEventListener("click", handleCategoryClick);

    listItems.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
            const isAllActive =
                listItems.length ===
                [...listItems].filter((li) => li.classList.contains("active"))
                    .length;
            allItem.classList.toggle("active", isAllActive);
            const activeCategories = Array.from(
                document.querySelectorAll(".filter-wrap .cateVal.active")
            ).map((li) => li.id.replace("cate_", ""));
            setCateBySearch(activeCategories);
            filterItems(); // 필터링 적용
        });
    });

    // 모바일 필터 열기/닫기 버튼 기능
    btnOpen.addEventListener("click", () => {
        btnOpen.classList.toggle("active");
        filterWrap.classList.toggle("open");
    });

    // 아코디언 기능(목록 상세보기)
    document.querySelectorAll(".js_accordion").forEach((accordion) => {
        accordion.addEventListener("click", () => {
            const boardItem = accordion.closest(".board-item");
            boardItem.classList.toggle("active");
            const faqDetail = boardItem.querySelector("#faqDetail");
            faqDetail.classList.toggle("show");
        });
    });

    // 페이지 로드 시 초기 항목 표시 및 더보기 버튼 클릭 이벤트 리스너 등록
    showInitialItems();
    moreBtn.addEventListener("click", showMoreItems);

    // 새 기능: cateVal active의 값으로 board-item의 스타일을 조정
    function adjustBoardItemVisibility() {
        // 'cateVal active' 클래스를 가진 모든 요소를 선택합니다.
        const activeElements = document.querySelectorAll(".cateVal.active");

        // 모든 'board-item' 요소를 선택합니다.
        const allBoardItems = document.querySelectorAll(".board-item");

        // 'cateVal active' 요소에서 값을 추출하여 배열에 저장합니다.
        const activeValues = Array.from(activeElements).map((element) =>
            element.getAttribute("data-value")
        );

        // 각 'board-item' 요소에 대해 값을 포함하고 있는지 확인하고 스타일을 적용합니다.
        allBoardItems.forEach((item) => {
            if (
                activeValues.some((value) => item.textContent.includes(value))
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        // // 필터링 후 초기 항목 표시
        // showInitialItems();
        // 페이지 로드 시 초기 항목 표시 및 더보기 버튼 클릭 이벤트 리스너 등록
        filterItems(); // 필터링을 통해 `filteredItems`를 초기화
        showInitialItems(); // 필터링 후 초기 항목 표시
        moreBtn.addEventListener("click", showMoreItems);
    }

    // 페이지 로드 시 호출하여 board-item의 스타일 조정

    adjustBoardItemVisibility();
});
