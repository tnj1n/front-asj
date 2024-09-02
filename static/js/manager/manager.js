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

// 회원 정보 관련 JS
// 사용자 목록 데이터를 저장하는 변수
let users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
];

let editingUserId = null; // 수정 중인 사용자 ID를 저장할 변수

// 전체 선택/해제 기능
function updateCheckboxes() {
    const checkboxes = document.querySelectorAll(".userCheckbox");
    const selectAll = document.getElementById("selectAll");

    selectAll.removeEventListener("change", handleSelectAllChange);
    selectAll.addEventListener("change", handleSelectAllChange);

    function handleSelectAllChange(e) {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = e.target.checked;
        });
    }

    checkboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", handleCheckboxChange);
        checkbox.addEventListener("change", handleCheckboxChange);
    });

    function handleCheckboxChange() {
        const checkedCount = Array.from(checkboxes).filter(
            (checkbox) => checkbox.checked
        ).length;
        selectAll.checked = checkedCount === checkboxes.length;
    }
}

// 모달 창 열기
const modal = document.getElementById("userModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];
const modalTitle = document.getElementById("modalTitle");
const userActionBtn = document.querySelector(".userActionBtn");

openModalBtn.addEventListener("click", function () {
    editingUserId = null;
    modalTitle.textContent = "회원 추가";
    userActionBtn.textContent = "회원 추가";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("role").value = "";
    modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// 회원 추가 및 수정 기능 (모달에서)
document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    if (name && email && role) {
        if (editingUserId === null) {
            // 회원 추가
            const id = users.length ? users[users.length - 1].id + 1 : 1;
            const newUser = { id, name, email, role };
            users.push(newUser);

            addRowToTable(newUser);
        } else {
            // 회원 수정
            const user = users.find((user) => user.id === editingUserId);
            if (user) {
                user.name = name;
                user.email = email;
                user.role = role;
                updateRowInTable(user);
            }
        }

        modal.style.display = "none";
        updateCheckboxes(); // 체크박스 업데이트
    } else {
        alert("모든 필드를 입력하세요.");
    }
});

function addRowToTable(user) {
    const newRow = document.createElement("div");
    newRow.className = "UserTable_row__1Qg9b";
    newRow.innerHTML = `
        <div class="UserTable_cell__3kj0K">
            <input type="checkbox" class="userCheckbox" />
        </div>
        <div class="UserTable_cell__3kj0K">${user.id}</div>
        <div class="UserTable_cell__3kj0K">${user.name}</div>
        <div class="UserTable_cell__3kj0K">${user.email}</div>
        <div class="UserTable_cell__3kj0K">${user.role}</div>
        <div class="UserTable_cell__3kj0K">
            <button class="editBtn">수정</button>
        </div>
    `;

    document.querySelector(".UserTable_container__1JHD1").appendChild(newRow);
    attachEditEvent(newRow);
    updateCheckboxes(); // 체크박스 업데이트
}

function updateRowInTable(user) {
    const rows = document.querySelectorAll(".UserTable_row__1Qg9b");
    rows.forEach((row) => {
        const userId = parseInt(
            row.querySelector(".UserTable_cell__3kj0K:nth-child(2)").textContent
        );
        if (userId === user.id) {
            row.querySelector(
                ".UserTable_cell__3kj0K:nth-child(3)"
            ).textContent = user.name;
            row.querySelector(
                ".UserTable_cell__3kj0K:nth-child(4)"
            ).textContent = user.email;
            row.querySelector(
                ".UserTable_cell__3kj0K:nth-child(5)"
            ).textContent = user.role;
        }
    });
}

// 수정 버튼 클릭 시, 모달 창 열기 및 데이터 채우기
function attachEditEvent(row) {
    const editBtn = row.querySelector(".editBtn");
    if (editBtn) {
        editBtn.addEventListener("click", function () {
            const row = this.closest(".UserTable_row__1Qg9b");
            editingUserId = parseInt(
                row.querySelector(".UserTable_cell__3kj0K:nth-child(2)")
                    .textContent
            );
            const name = row.querySelector(
                ".UserTable_cell__3kj0K:nth-child(3)"
            ).textContent;
            const email = row.querySelector(
                ".UserTable_cell__3kj0K:nth-child(4)"
            ).textContent;
            const role = row.querySelector(
                ".UserTable_cell__3kj0K:nth-child(5)"
            ).textContent;

            document.getElementById("name").value = name;
            document.getElementById("email").value = email;
            document.getElementById("role").value = role;

            modalTitle.textContent = "회원 수정";
            userActionBtn.textContent = "수정 완료";
            modal.style.display = "block";
        });
    }
}

// 기존 데이터에 대한 수정 이벤트 추가
document.querySelectorAll(".UserTable_row__1Qg9b").forEach((row) => {
    attachEditEvent(row);
});

// 선택된 항목 삭제
document
    .getElementById("deleteSelectedBtn")
    .addEventListener("click", function () {
        const selectedCheckboxes = document.querySelectorAll(
            ".userCheckbox:checked"
        );
        selectedCheckboxes.forEach((checkbox) => {
            const row = checkbox.closest(".UserTable_row__1Qg9b");
            if (row) {
                const userId = parseInt(
                    row.querySelector(".UserTable_cell__3kj0K:nth-child(2)")
                        .textContent
                );

                // 사용자 목록에서 삭제
                users = users.filter((user) => user.id !== userId);

                // 테이블에서 행 삭제
                row.remove();
            }
        });
        updateCheckboxes(); // 체크박스 업데이트
    });

// 초기 체크박스 설정
updateCheckboxes();
