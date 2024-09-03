// 모든 메뉴 아이템과 서브메뉴 컨테이너를 선택합니다.
const menuItems = document.querySelectorAll(
    ".MenuItems_menu__QgJck.MenuItems_hasSubmenu__1EhTS"
);

menuItems.forEach((menuToggle) => {
    menuToggle.addEventListener("click", function () {
        const submenuContainer = menuToggle.nextElementSibling;
        const downIcon = menuToggle.querySelector(
            ".withIcon_icon__2IQiS.MenuItems_downIcon__2GVY9"
        );

        // 서브메뉴의 표시/숨김을 토글합니다.
        submenuContainer.classList.toggle("MenuItems_show__1ldUA");
        downIcon.classList.toggle("MenuItems_open__2VtAS");
    });
});

// 정보 버튼 클릭 시 정보 박스 표시/숨김
const infoButton = document.querySelector(".ProjectInfo_infoButton__2bg95");

infoButton.addEventListener("click", function () {
    const isExpanded = infoButton.getAttribute("aria-expanded") === "true";
    infoButton.setAttribute("aria-expanded", !isExpanded);

    const container = document.querySelector(".ProjectInfo_container__3jAST");
    const existingInfoBox = document.querySelector(
        ".ProjectInfo_infoBox__2x8RL"
    );

    if (isExpanded && existingInfoBox) {
        container.removeChild(existingInfoBox);
    } else if (!isExpanded) {
        const infoBox = document.createElement("div");
        infoBox.className = "ProjectInfo_infoBox__2x8RL";
        infoBox.setAttribute("role", "region");
        infoBox.setAttribute("aria-labelledby", "project-info");

        infoBox.innerHTML = `
            <dl>
                <dt class="BlindText_textHidden__1W0aB">메이커 명</dt>
                <dd class="ProjectInfo_content__1VmXE">
                    <span class="Avatar_avatar__1mOG5 Avatar_sm__V_6km ProjectInfo_profileImage__1PLV0">
                        <span class="Avatar_inner__hN779">
                            <img src="https://static.wadiz.kr/studio/funding/static/media/default-zingugi.de76a099.svg" />
                        </span>
                    </span>
                    <span class="ProjectInfo_makerName__KIDrd">석상훈</span>
                </dd>
                <dt class="BlindText_textHidden__1W0aB">상태</dt>
                <dd class="ProjectInfo_content__1VmXE ProjectInfo_stateBox__705_4">
                    <span class="ProjectInfo_state__1Aqkt">작성 중</span>
                </dd>
            </dl>
            <button class="Button_button__35X6_ Button_primary__1vdas Button_contained__1XlJQ Button_sm__3vobZ Button_startIcon__7ZEht Button_block__3y0pW" type="button">
                <span>
                    <svg viewBox="0 0 40 40" focusable="false" role="presentation" class="withIcon_icon__2IQiS Button_icon__2I54k" aria-hidden="true">
                        <path d="M33.6 5.2a9 9 0 0 1 0 12.7L29 22.5l-.6.5a11 11 0 0 0-.4-2.4l4.1-4.1a7 7 0 0 0-9.9-9.9l-4.6 4.6a7 7 0 0 0 4.7 11.9 5 5 0 0 1-.2 2 8.9 8.9 0 0 1-7.8-5.4 9.1 9.1 0 0 1-.3-6.5 8.9 8.9 0 0 1 2.1-3.4l4.6-4.6a9 9 0 0 1 12.9 0zm-15.7 9.5a5 5 0 0 0-.2 2 6.9 6.9 0 0 1 6.3 4.2 7 7 0 0 1-1.5 7.7l-5.7 5.7a7 7 0 0 1-9.9-9.9l5.2-5.2a11 11 0 0 1-.4-2.4l-.6.5-5.6 5.6a9 9 0 1 0 12.7 12.8l5.7-5.7a8.9 8.9 0 0 0 2.1-3.4 9.1 9.1 0 0 0-.3-6.5 8.9 8.9 0 0 0-7.8-5.4z"></path>
                    </svg>
                    <span class="Button_children__1TD4r">URL 복사</span>
                </span>
            </button>
        `;
        container.appendChild(infoBox);
    }
});

// 사이드바 사라짐
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(
        "button.AppLayout_expandNavButton__2AQMd"
    );
    const nav = document.getElementById("AppNavbarLayout_Nav");
    const mainDiv = document.querySelector("div.AppLayout_main__3h4EB");
    let dividerAdded = false;

    button.addEventListener("click", function () {
        button.classList.toggle("AppLayout_expand__3TNUI");
        nav.classList.toggle("AppNavbarLayout_expand__12bTj");

        if (!dividerAdded) {
            const newDivider = document.createElement("div");
            newDivider.className = "AppNavbarLayout_divider__KAkAr";
            mainDiv.insertBefore(newDivider, nav);
            dividerAdded = true;
        } else {
            const existingDivider = mainDiv.querySelector(
                ".AppNavbarLayout_divider__KAkAr"
            );
            if (existingDivider) {
                mainDiv.removeChild(existingDivider);
                dividerAdded = false;
            }
        }
    });
});

// 체크박스 전체 선택/해제 기능
function updateCheckboxes() {
    const checkboxes = document.querySelectorAll(".userCheckbox");
    const selectAll = document.getElementById("selectAll");

    selectAll.addEventListener("change", function (e) {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = e.target.checked;
        });
    });

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const checkedCount = Array.from(checkboxes).filter(
                (checkbox) => checkbox.checked
            ).length;
            selectAll.checked = checkedCount === checkboxes.length;
        });
    });
}

// 페이지 로드 시 초기화 및 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", () => {
    updateCheckboxes();

    const editButtons = document.querySelectorAll(".editBtn");
    const authModal = document.getElementById("authModal");
    const modalWrap = document.querySelector(".modal-wrap");
    const verifyBtn = document.getElementById("verifyBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");
    const searchInput = document.getElementById("schKey");
    const clearButton = document.querySelector(".btn-clear");
    const searchBtn = document.getElementById("btn-search");
    const niceSelects = document.querySelectorAll(".nice-select");

    const userRows = document.querySelectorAll(".UserTable_row__1Qg9b");
    const tableHeader = document.querySelector(
        ".UserTable_row__1Qg9b.UserTable_header__2WvXj"
    );

    let selectedRow = null;
    let searchQuery = "";
    let selectedFilter = "전체";
    let filteredItems = [];

    // 모달을 여는 함수
    const openModal = () => {
        authModal.style.display = "flex";
        modalWrap.style.animation = "popUp 0.5s";
    };

    // 모달을 닫는 함수
    const closeModal = () => {
        modalWrap.style.animation = "popDown 0.5s";
        setTimeout(() => {
            authModal.style.display = "none";
        }, 450);
    };

    // 편집 버튼 클릭 시 모달창 열기 및 상태 변경
    editButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const row = event.target.closest(".UserTable_row__1Qg9b");
            const statusCell = row.querySelector(
                ".UserTable_cell__3kj0K:nth-child(8)"
            );

            if (
                statusCell.textContent.trim() === "승인 대기" ||
                statusCell.textContent.trim() === "승인 완료"
            ) {
                selectedRow = row;

                // 상태에 따라 모달 메시지 설정
                if (statusCell.textContent.trim() === "승인 대기") {
                    modalMessage.textContent = "승인 하시겠습니까?";
                    actionToPerform = () => {
                        const statusCell = selectedRow.querySelector(
                            ".UserTable_cell__3kj0K:nth-child(8)"
                        );
                        statusCell.textContent = "승인 완료";
                    };
                } else if (statusCell.textContent.trim() === "승인 완료") {
                    modalMessage.textContent = "승인 대기로 변경합니다.";
                    actionToPerform = () => {
                        const statusCell = selectedRow.querySelector(
                            ".UserTable_cell__3kj0K:nth-child(8)"
                        );
                        statusCell.textContent = "승인 대기";
                    };
                }

                openModal();
            }
        });
    });

    // 삭제 버튼 클릭 시 모달창 열기
    deleteSelectedBtn.addEventListener("click", () => {
        modalMessage.textContent = "삭제하시겠습니까?";
        actionToPerform = () => {
            const selectedCheckboxes = document.querySelectorAll(
                ".userCheckbox:checked"
            );
            selectedCheckboxes.forEach((checkbox) => {
                const row = checkbox.closest(".UserTable_row__1Qg9b");
                row.parentNode.removeChild(row);
            });
        };

        openModal();
    });

    // 확인 버튼 클릭 시 작업 수행
    verifyBtn.addEventListener("click", () => {
        if (actionToPerform) {
            actionToPerform();
            actionToPerform = null; // 작업 수행 후 초기화
        }
        closeModal();
    });

    // 닫기 버튼 클릭 시 모달 닫기
    cancelBtn.addEventListener("click", () => {
        closeModal();
    });

    // 필터링된 항목 표시 함수
    function showFilteredItems() {
        userRows.forEach((row) => {
            row.classList.add("hidden");
        });

        if (filteredItems.length > 0) {
            tableHeader.classList.remove("hidden");
            tableHeader.classList.add("visible");
            filteredItems.forEach((row) => {
                row.classList.remove("hidden");
                row.classList.add("visible");
            });
        } else {
            tableHeader.classList.add("hidden");
            alert("검색 결과가 없습니다.");
        }
    }

    // 검색 및 필터링 함수
    function filterBoardItems() {
        filteredItems = Array.from(userRows).filter((row) => {
            let cellToSearch;

            switch (selectedFilter) {
                case "이름":
                    cellToSearch = row.querySelector(
                        ".UserTable_cell__3kj0K:nth-child(3)"
                    );
                    break;
                case "이메일":
                    cellToSearch = row.querySelector(
                        ".UserTable_cell__3kj0K:nth-child(4)"
                    );
                    break;
                case "결제 방법":
                    cellToSearch = row.querySelector(
                        ".UserTable_cell__3kj0K:nth-child(5)"
                    );
                    break;
                case "구독 날짜":
                    cellToSearch = row.querySelector(
                        ".UserTable_cell__3kj0K:nth-child(6)"
                    );
                    break;
                case "결제 날짜":
                    cellToSearch = row.querySelector(
                        ".UserTable_cell__3kj0K:nth-child(7)"
                    );
                    break;
                case "결제 승인":
                    cellToSearch = row.querySelector(
                        ".UserTable_cell__3kj0K:nth-child(8)"
                    );
                    break;
                default:
                    cellToSearch = row.querySelectorAll(
                        ".UserTable_cell__3kj0K"
                    );
            }

            if (selectedFilter === "전체") {
                const rowText = Array.from(cellToSearch)
                    .map((cell) => cell.textContent.trim())
                    .join(" ");
                return searchQuery === "" || rowText.includes(searchQuery);
            } else {
                return (
                    searchQuery === "" ||
                    cellToSearch.textContent.trim().includes(searchQuery)
                );
            }
        });

        if (searchQuery === "") {
            filteredItems = Array.from(userRows);
        }

        showFilteredItems();
    }

    // 드롭다운에서 선택한 항목에 따라 필터링하는 함수
    function filterItems() {
        const filterValue = document
            .querySelector(".nice-select .current")
            .textContent.trim();
        selectedFilter = filterValue;
        filterBoardItems();
    }

    // 검색어 입력 시 처리
    searchInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            searchQuery = searchInput.value.trim();
            filterBoardItems();
        }
    });

    // 검색 버튼 클릭 시 처리
    searchBtn.addEventListener("click", () => {
        searchQuery = searchInput.value.trim();
        filterBoardItems();
    });

    // 드롭다운 기능 구현
    niceSelects.forEach((niceSelect) => {
        niceSelect.addEventListener("click", (e) => {
            e.stopPropagation();
            const clickedOption = e.target.closest(".option");
            if (clickedOption) {
                const currentSpan = niceSelect.querySelector(".current");
                const options = niceSelect.querySelectorAll(".option");
                options.forEach((option) => option.classList.remove("focus"));
                currentSpan.textContent = clickedOption.textContent;
                clickedOption.classList.add("focus");
                currentSpan.style.color = "#111";
                niceSelect.classList.remove("open");
                filterItems();
            } else {
                niceSelect.classList.toggle("open");
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

    // 페이지 로드 시 초기 항목 표시 및 필터링 적용
    filterItems(); // 드롭다운 선택에 따라 필터링된 항목 초기화
});
