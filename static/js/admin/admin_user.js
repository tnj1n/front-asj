// 모든 메뉴 아이템과 서브메뉴 컨테이너를 선택합니다.
const menuItems = document.querySelectorAll(
    ".MenuItems_menu__QgJck.MenuItems_hasSubmenu__1EhTS"
);

menuItems.forEach((menuToggle) => {
    // 각각의 메뉴 아이템에 대한 클릭 이벤트 리스너를 추가합니다.
    menuToggle.addEventListener("click", function () {
        // 서브메뉴와 아이콘을 해당 메뉴 아이템 기준으로 선택합니다.
        const submenuContainer = menuToggle.nextElementSibling;
        const downIcon = menuToggle.querySelector(
            ".withIcon_icon__2IQiS.MenuItems_downIcon__2GVY9"
        );

        // toggle 메서드를 사용하여 클래스 추가/제거를 처리합니다.
        submenuContainer.classList.toggle("MenuItems_show__1ldUA");
        downIcon.classList.toggle("MenuItems_open__2VtAS");
    });
});

// 버튼 요소를 선택합니다.
const infoButton = document.querySelector(".ProjectInfo_infoButton__2bg95");

// 버튼에 클릭 이벤트 리스너를 추가합니다.
infoButton.addEventListener("click", function () {
    // 현재 aria-expanded의 값을 가져옵니다.
    const isExpanded = infoButton.getAttribute("aria-expanded") === "true";

    // aria-expanded의 값을 토글합니다.
    infoButton.setAttribute("aria-expanded", !isExpanded);

    // ProjectInfo_container__3jAST 컨테이너를 선택합니다.
    const container = document.querySelector(".ProjectInfo_container__3jAST");

    if (isExpanded) {
        // infoBox가 이미 존재하면 제거합니다.
        const infoBox = document.querySelector(".ProjectInfo_infoBox__2x8RL");
        if (infoBox) {
            container.removeChild(infoBox);
        }
    } else {
        // infoBox 요소를 동적으로 생성합니다.
        const infoBox = document.createElement("div");
        infoBox.className = "ProjectInfo_infoBox__2x8RL";
        infoBox.setAttribute("role", "region");
        infoBox.setAttribute("aria-labelledby", "project-info");

        // infoBox 내부에 넣을 HTML 구조를 추가합니다.
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

        // container에 infoBox를 추가합니다.
        container.appendChild(infoBox);
    }
});

// 버튼 누르면 사이드바 사라짐
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(
        "button.AppLayout_expandNavButton__2AQMd"
    );
    const nav = document.getElementById("AppNavbarLayout_Nav");
    const mainDiv = document.querySelector("div.AppLayout_main__3h4EB");
    let dividerAdded = false; // divider가 추가되었는지 추적하기 위한 변수

    button.addEventListener("click", function () {
        // button과 nav의 클래스 토글
        button.classList.toggle("AppLayout_expand__3TNUI");
        nav.classList.toggle("AppNavbarLayout_expand__12bTj");

        // divider가 추가되지 않은 상태에서 버튼을 클릭하면 nav 위에 추가, 그렇지 않으면 제거
        if (!dividerAdded) {
            const newDivider = document.createElement("div");
            newDivider.className = "AppNavbarLayout_divider__KAkAr";
            // nav 요소 앞에 newDivider 추가
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

document.addEventListener("DOMContentLoaded", function () {
    const allSelectToggle = document.querySelector(
        ".SettingsToggle_toggle:first-child .SettingToggle_switch"
    );
    const toggles = document.querySelectorAll(
        ".SettingsToggle_toggle .SettingToggle_switch"
    );

    // 첫 번째 스위치 (전체 선택 스위치) 클릭 시
    allSelectToggle.addEventListener("click", function () {
        const isActive = allSelectToggle.classList.contains(
            "SettingToggle_active"
        );

        // 모든 하위 스위치 상태 변경
        toggles.forEach(function (toggle) {
            if (isActive) {
                toggle.classList.remove("SettingToggle_active");
            } else {
                toggle.classList.add("SettingToggle_active");
            }
        });
    });

    // 각 스위치 개별 클릭 시
    toggles.forEach(function (toggle, index) {
        if (index === 0) return; // 첫 번째 스위치는 이미 처리했으므로 제외

        toggle.addEventListener("click", function () {
            toggle.classList.toggle("SettingToggle_active");

            // 하위 스위치가 하나라도 비활성화되면 전체 스위치도 비활성화
            const allActive = Array.from(toggles)
                .slice(1)
                .every((t) => t.classList.contains("SettingToggle_active"));
            if (!allActive) {
                allSelectToggle.classList.remove("SettingToggle_active");
            } else {
                allSelectToggle.classList.add("SettingToggle_active"); // 모든 하위 스위치가 활성화된 경우 전체 스위치 활성화
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".UsersFilter_filterButton");

    // 기본적으로 첫 번째 버튼에 선택된 클래스를 추가
    buttons[0].classList.add("UsersFilter_selected");

    // 각 버튼 클릭 시
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            // 모든 버튼의 선택된 클래스와 배경색 초기화
            buttons.forEach((btn) => {
                btn.classList.remove("UsersFilter_selected");
                btn.style.backgroundColor = ""; // 기본 배경색으로 초기화
            });

            // 클릭된 버튼에 선택된 클래스와 배경색 적용
            button.classList.add("UsersFilter_selected");
            button.style.backgroundColor = "#00c4c4"; // 선택된 버튼의 배경색을 #00c4c4로 설정

            // 1초 후에 원래 색으로 돌아오게 설정
            setTimeout(function () {
                button.style.backgroundColor = ""; // 기본 배경색으로 돌아오기
            }, 500); // 1000 밀리초 = 1초
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const userStatusElements = document.querySelectorAll(".User_status");

    userStatusElements.forEach(function (element) {
        if (element.textContent.includes("활동")) {
            element.style.color = "#00c4c4";
        } else {
            element.style.color = "red";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".sort-filter-option");

    options.forEach(function (option) {
        option.addEventListener("click", function () {
            // 모든 옵션의 선택된 클래스 초기화
            options.forEach((opt) => {
                opt.classList.remove("selected");
            });

            // 클릭된 옵션에 선택된 클래스 추가
            option.classList.add("selected");
        });
    });
});

//---------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".sort-filter-option");
    const userListContainer = document.querySelector(".UserList_userList");
    let sortOrder = {}; // 각 옵션의 정렬 순서를 기억하기 위한 객체

    function sortUsers(criteria) {
        const users = Array.from(
            userListContainer.querySelectorAll(".UserItem_container")
        );

        // 모든 사용자 다시 표시
        users.forEach((user) => (user.style.display = "flex"));

        if (criteria === "가입일 순") {
            users.sort((a, b) => {
                const dateA = new Date(
                    a.querySelector(".User_joinDate b").textContent
                );
                const dateB = new Date(
                    b.querySelector(".User_joinDate b").textContent
                );
                return sortOrder[criteria] === "asc"
                    ? dateA - dateB
                    : dateB - dateA;
            });
        } else if (criteria === "이름 순") {
            users.sort((a, b) => {
                const nameA = a
                    .querySelector(".UserItem_name")
                    .textContent.trim();
                const nameB = b
                    .querySelector(".UserItem_name")
                    .textContent.trim();
                return sortOrder[criteria] === "asc"
                    ? nameA.localeCompare(nameB, "ko-KR", { numeric: true })
                    : nameB.localeCompare(nameA, "ko-KR", { numeric: true });
            });
        } else if (criteria === "활동 회원 순") {
            users.forEach((user) => {
                const status = user.querySelector(".User_status").textContent;
                if (!status.includes("활동")) {
                    user.style.display = "none";
                }
            });
        } else if (criteria === "탈퇴 회원 순") {
            users.forEach((user) => {
                const status = user.querySelector(".User_status").textContent;
                if (!status.includes("탈퇴")) {
                    user.style.display = "none";
                }
            });
        }

        // 정렬된 순서대로 다시 DOM에 추가
        userListContainer.innerHTML = "";
        users.forEach((user) => {
            userListContainer.appendChild(user);
        });
    }

    // 페이지 로드 시 기본적으로 '가입일 순'은 내림차순, '이름 순'은 오름차순으로 정렬
    sortOrder["가입일 순"] = "desc";
    sortOrder["이름 순"] = "asc";

    // 기본 정렬
    sortUsers("가입일 순");

    // 각 옵션 클릭 시 정렬 및 필터링 수행
    options.forEach(function (option) {
        option.addEventListener("click", function () {
            const criteria = option.textContent.trim();

            // 클릭 시마다 정렬 순서 변경
            sortOrder[criteria] =
                sortOrder[criteria] === "asc" ? "desc" : "asc";

            // 모든 옵션의 선택된 클래스 초기화
            options.forEach((opt) => opt.classList.remove("selected"));

            // 클릭된 옵션에 선택된 클래스 추가
            option.classList.add("selected");

            // 선택된 옵션에 따라 정렬 또는 필터링 수행
            sortUsers(criteria);
        });
    });
});

// ---------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".UserFilter_searchInput");
    const userListContainer = document.querySelector(".UserList_userList");

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const searchTerm = searchInput.value.trim().toLowerCase();
            const users = userListContainer.querySelectorAll(
                ".UserItem_container"
            );

            users.forEach(function (user) {
                const userName = user
                    .querySelector(".UserItem_name")
                    .textContent.trim()
                    .toLowerCase();

                if (userName.includes(searchTerm)) {
                    user.style.display = "flex"; // 검색어가 포함된 회원은 표시
                } else {
                    user.style.display = "none"; // 검색어가 포함되지 않은 회원은 숨김
                }
            });
        }
    });
});
// -------------------------------------------------------
document.querySelectorAll(".pagination-page-link").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 링크 동작을 막기

        // 모든 페이지에서 active 클래스를 제거
        document.querySelectorAll(".pagination-page").forEach(function (page) {
            page.classList.remove("active");
        });

        // 클릭한 페이지에 active 클래스를 추가
        this.parentElement.classList.add("active");
    });
});

// 모달 창
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("userModal");
    const profileIcons = document.querySelectorAll(".UserItem_avatarWrapper a");
    const closeBtn = modal.querySelector(".modal-close");

    // 프로필 아이콘 클릭 시 모달 창 열기
    profileIcons.forEach((icon) => {
        icon.addEventListener("click", function (e) {
            e.preventDefault();
            modal.style.display = "flex"; // 모달을 보이도록 설정
        });
    });

    // 닫기 버튼 클릭 시 모달 창 닫기
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 모달 바깥을 클릭하면 모달 창 닫기
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
