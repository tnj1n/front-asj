document.addEventListener("DOMContentLoaded", () => {
    // 주요 요소 선택
    const niceSelects = document.querySelectorAll(".nice-select"); // 모든 드롭다운 요소
    const selectAll = document.querySelectorAll(".select-type2"); // 타입2 선택 영역
    const searchInput = document.getElementById("schKey"); // 검색 입력 필드
    const clearButton = document.querySelector(".btn-clear"); // 'clear' 버튼
    const listItems = document.querySelectorAll(".filter-wrap .cateVal"); // 필터 항목들
    const allItem = document.getElementById("cate_all"); // '전체' 항목 필터
    const filterWrap = document.querySelector(".filter-wrap"); // 필터 전체를 감싸는 요소
    const btnOpen = filterWrap.querySelector(".btn-open"); // 필터 열기/닫기 버튼
    const boardItems = document.querySelectorAll(".board-item"); // 게시판의 각 항목
    const moreBtn = document.getElementById("moreBtn"); // '더보기' 버튼
    const searchBtn = document.getElementById("btn-search"); // 검색 버튼

    let visibleCount = 15; // 처음에 보일 항목 수
    let filteredItems = []; // 필터링된 항목을 저장할 배열
    const selectedItems = []; // 선택된 필터 항목의 텍스트를 저장할 배열
    let searchQuery = ""; // 검색어를 저장할 변수

    // 필터링된 항목 중 처음 15개 항목만 표시하는 함수
    function showInitialItems() {
        boardItems.forEach((item) => (item.style.display = "none")); // 모든 항목 숨기기
        filteredItems.forEach((item, index) => {
            if (index < visibleCount) item.style.display = "block"; // 처음 15개만 표시
        });
        // '더보기' 버튼의 표시 여부 조정
        moreBtn.style.display =
            filteredItems.length > visibleCount ? "block" : "none";
    }

    // '더보기' 버튼 클릭 시 추가 항목을 표시하는 함수
    function showMoreItems() {
        const nextCount = visibleCount + 10; // 한 번에 추가로 보여줄 항목 수
        filteredItems.forEach((item, index) => {
            if (index >= visibleCount && index < nextCount)
                item.style.display = "block"; // 다음 10개 항목 표시
        });
        visibleCount = nextCount;
        // 모든 항목이 표시되면 '더보기' 버튼을 숨김
        if (visibleCount >= filteredItems.length)
            moreBtn.style.display = "none";
    }

    // 선택된 드롭다운 항목과 필터 항목 및 검색어에 따라 게시판 항목을 필터링하는 함수
    function filterBoardItems() {
        const filterValue = document
            .querySelector(".nice-select .current")
            .textContent.trim(); // 드롭다운에서 선택된 값

        if (selectedItems.length === 0 && searchQuery === "") {
            // 필터 항목과 검색어가 없으면 드롭다운 항목으로만 필터링
            filteredItems = Array.from(boardItems).filter((item) => {
                const tag = item.querySelector(".tag-type2.v3");
                const tagValue = tag ? tag.textContent.trim() : "";
                return filterValue === "전체" || filterValue === tagValue;
            });
        } else {
            // 필터 항목, 드롭다운, 검색어를 모두 고려하여 필터링
            filteredItems = Array.from(boardItems).filter((boardItem) => {
                const questionElem = boardItem.querySelector("dl");
                const questionText = questionElem.textContent.trim();
                const tag = boardItem.querySelector(".tag-type2.v3");
                const tagValue = tag ? tag.textContent.trim() : "";

                return (
                    (filterValue === "전체" || filterValue === tagValue) &&
                    (selectedItems.length === 0 ||
                        selectedItems.some((text) =>
                            questionText.includes(text)
                        )) &&
                    (searchQuery === "" || questionText.includes(searchQuery))
                );
            });
        }

        showInitialItems(); // 필터링된 항목 표시
    }

    // 드롭다운에서 선택한 항목에 따라 리스트를 필터링하는 함수
    function filterItems() {
        const filterValue = document
            .querySelector(".nice-select .current")
            .textContent.trim(); // 드롭다운에서 선택된 값

        // 드롭다운 선택 값에 따라 필터링된 항목 갱신
        filteredItems = Array.from(boardItems).filter((item) => {
            const tag = item.querySelector(".tag-type2.v3");
            const tagValue = tag ? tag.textContent.trim() : "";
            return filterValue === "전체" || filterValue === tagValue;
        });

        visibleCount = 15; // 표시할 항목 수 초기화
        filterBoardItems(); // 필터 항목에 따른 추가 필터링 적용
    }

    // 검색어 입력 시 처리 (엔터 키 입력 감지)
    searchInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            searchQuery = searchInput.value.trim();
            filterBoardItems(); // 검색어를 기준으로 필터링 수행
        }
    });

    // 검색 버튼 클릭 시 처리
    searchBtn.addEventListener("click", () => {
        searchQuery = searchInput.value.trim();
        filterBoardItems(); // 검색어를 기준으로 필터링 수행
    });

    // 드롭다운 기능 구현
    niceSelects.forEach((niceSelect) => {
        niceSelect.addEventListener("click", (e) => {
            e.stopPropagation(); // 클릭 이벤트 전파 방지
            const clickedOption = e.target.closest(".option");
            if (clickedOption) {
                const currentSpan = niceSelect.querySelector(".current");
                const options = niceSelect.querySelectorAll(".option");
                options.forEach((option) => option.classList.remove("focus"));
                currentSpan.textContent = clickedOption.textContent; // 선택된 항목을 표시
                clickedOption.classList.add("focus");
                currentSpan.style.color = "#111";
                niceSelect.classList.remove("open");
                filterItems(); // 선택 후 필터링 적용
            } else {
                niceSelect.classList.toggle("open"); // 드롭다운 열기/닫기
            }
        });
    });

    // 페이지의 다른 영역 클릭 시 모든 드롭다운 닫기
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

    // '전체' 항목 클릭 시 처리
    // '전체' 항목 클릭 시 처리
    allItem.addEventListener("click", () => {
        listItems.forEach((li) => li.classList.remove("active")); // 모든 필터 항목 비활성화
        allItem.classList.add("active"); // '전체' 항목 활성화
        selectedItems.length = 0; // 선택된 항목 초기화

        const filterValue = document
            .querySelector(".nice-select .current")
            .textContent.trim(); // 드롭다운에서 선택된 값 가져오기

        // 드롭다운 선택 값에 따라 필터링된 항목 갱신
        filteredItems = Array.from(boardItems).filter((boardItem) => {
            const tag = boardItem.querySelector(".tag-type2.v3");
            const tagValue = tag ? tag.textContent.trim() : "";
            return filterValue === "전체" || filterValue === tagValue;
        });

        showInitialItems(); // 필터링된 항목 표시
    });

    // 각 필터 항목 클릭 시 처리
    listItems.forEach((item) => {
        item.addEventListener("click", () => {
            allItem.classList.remove("active"); // '전체' 비활성화

            const text = item.textContent.trim(); // 클릭된 항목의 텍스트

            if (item.classList.contains("active")) {
                // 이미 선택된 경우, 배열에서 제거
                selectedItems.splice(selectedItems.indexOf(text), 1);
                item.classList.remove("active");
            } else {
                // 선택되지 않은 경우, 배열에 추가
                selectedItems.push(text);
                item.classList.add("active");
            }

            filterBoardItems(); // 필터 항목에 따라 게시판 항목 필터링
        });
    });

    // 모바일 필터 열기/닫기 버튼 기능
    btnOpen.addEventListener("click", () => {
        btnOpen.classList.toggle("active");
        filterWrap.classList.toggle("open");
    });

    // 아코디언 기능: 게시판 항목의 상세보기 토글
    document.querySelectorAll(".js_accordion").forEach((accordion) => {
        accordion.addEventListener("click", () => {
            const boardItem = accordion.closest(".board-item");
            boardItem.classList.toggle("active");
            const faqDetail = boardItem.querySelector("#faqDetail");
            faqDetail.classList.toggle("show");
        });
    });

    // 페이지 로드 시 초기 항목 표시 및 더보기 버튼 클릭 이벤트 리스너 등록
    filterItems(); // 드롭다운 선택에 따라 필터링된 항목 초기화
    showInitialItems(); // 초기 15개 항목 표시
    moreBtn.addEventListener("click", showMoreItems); // '더보기' 버튼 클릭 시 추가 항목 표시
});
