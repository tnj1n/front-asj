document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("driver-signup3-userpw");
    const togglePasswordIcon = document.querySelector(
        ".driver-signup3-ico-eye"
    );

    togglePasswordIcon.addEventListener("click", () => {
        // 현재 비밀번호 입력 필드의 타입을 체크
        const type =
            passwordInput.getAttribute("type") === "password"
                ? "text"
                : "password";

        // 입력 필드의 타입을 토글 (password <-> text)
        passwordInput.setAttribute("type", type);

        // 아이콘을 변경
        if (type === "text") {
            togglePasswordIcon.classList.add("driver-signup3-ico-eye-on");
        } else {
            togglePasswordIcon.classList.remove("driver-signup3-ico-eye-on");
        }
    });
});

// DOMContentLoaded 이벤트 리스너를 추가하여 문서가 완전히 로드된 후 코드를 실행합니다.
document.addEventListener("DOMContentLoaded", () => {
    // 텍스트 입력 필드와 비밀번호 입력 필드를 모두 선택합니다.
    const inputs = document.querySelectorAll(
        "input[type='text'], input[type='password']"
    );

    // 선택된 모든 입력 필드에 대해 반복합니다.
    inputs.forEach((input) => {
        // 현재 입력 필드의 다음 형제 요소를 선택합니다. 여기서는 레이블(`<label>`)입니다.
        const label = input.nextElementSibling;

        // 레이블의 위치와 스타일을 업데이트하는 함수입니다.
        const updateLabelPosition = () => {
            // 입력 필드에 값이 있거나 입력 필드가 포커스된 상태인 경우
            if (input.value !== "" || document.activeElement === input) {
                // 레이블을 입력 필드의 상단으로 이동시킵니다.
                // 'top: 10px'은 입력 필드의 상단에서 10px 아래를 의미합니다.
                label.style.top = "10px";
                // 레이블을 입력 필드의 왼쪽으로 이동시킵니다.
                // 'left: 20px'은 입력 필드의 왼쪽에서 20px 위치를 의미합니다.
                label.style.left = "20px";
                // 레이블의 폰트 크기를 12px로 줄입니다.
                label.style.fontSize = "12px";
                // 레이블의 색상을 빨간색으로 설정합니다.
                label.style.color = "#f0543a"; // 빨간색
            } else {
                // 입력 필드가 비어 있거나 포커스되지 않은 경우
                // 레이블을 입력 필드의 중앙으로 되돌립니다.
                // 'top: 50%'은 입력 필드의 수직 중앙을 의미합니다.
                label.style.top = "50%";
                // 레이블을 입력 필드의 왼쪽에서 20px 위치에 설정합니다.
                label.style.left = "20px";
                // 'transform: translateY(-50%)'은 레이블을 수직 중앙으로 조정합니다.
                label.style.transform = "translateY(-50%)";
                // 레이블의 폰트 크기를 16px로 설정합니다.
                label.style.fontSize = "16px";
                // 레이블의 색상을 회색으로 설정합니다.
                label.style.color = "#999"; // 회색
            }
        };

        // 페이지가 로드되면 레이블의 초기 상태를 설정합니다.
        updateLabelPosition();

        // 입력 필드에서 입력이 발생할 때마다 레이블의 위치와 스타일을 업데이트합니다.
        input.addEventListener("input", updateLabelPosition);
        // 입력 필드가 포커스될 때마다 레이블의 위치와 스타일을 업데이트합니다.
        input.addEventListener("focus", updateLabelPosition);
        // 입력 필드에서 포커스가 사라질 때마다 레이블의 위치와 스타일을 업데이트합니다.
        input.addEventListener("blur", updateLabelPosition);
    });
});

/************************************************************************/

// document.addEventListener("DOMContentLoaded", () => {
//     const addressInput = document.getElementById("driver-signup3-useraddress");
//     const passwordInput = document.getElementById("driver-signup3-userpw");
//     const emailInput = document.getElementById("driver-signup3-email");
//     const nextButton = document.querySelector(
//         ".driver-signup3-btn-wrap .driver-signup3-btn-type"
//     );

//     function checkInputs() {
//         // 모든 필드가 채워졌는지 확인
//         if (
//             addressInput.value.trim() !== "" &&
//             passwordInput.value.trim() !== "" &&
//             emailInput.value.trim() !== ""
//         ) {
//             // 필드가 채워졌다면 다음 버튼 활성화
//             nextButton.classList.remove("driver-signup3-disabled");
//         } else {
//             // 필드가 비어있다면 다음 버튼 비활성화
//             nextButton.classList.add("driver-signup3-disabled");
//         }
//     }

//     // 각 입력 필드에 입력 이벤트 리스너 추가
//     addressInput.addEventListener("input", checkInputs);
//     passwordInput.addEventListener("input", checkInputs);
//     emailInput.addEventListener("input", checkInputs);
// });

// 은행 선택 자바스크립트
document.addEventListener("DOMContentLoaded", () => {
    const selectBox = document.querySelector(".driver-signup3-nice-select");
    const optionsList = selectBox.querySelector(
        ".driver-signup3-nice-select-list"
    );
    const options = optionsList.querySelectorAll(
        ".driver-signup3-nice-select-list-option"
    );
    const currentSelection = selectBox.querySelector(
        ".driver-signup3-nice-select-current"
    );

    // 드롭다운 열기 및 닫기
    selectBox.addEventListener("click", (e) => {
        e.stopPropagation(); // 클릭 이벤트가 부모 요소로 전파되지 않도록 방지

        // 열려있으면 닫고, 닫혀있으면 열기
        if (selectBox.classList.contains("open")) {
            closeDropdown(); // 닫기 함수 호출
        } else {
            openDropdown(); // 열기 함수 호출
        }
    });

    // 옵션 선택
    options.forEach((option) => {
        option.addEventListener("click", (e) => {
            e.stopPropagation(); // 이벤트가 상위 요소로 전파되는 것을 막음

            // 현재 선택 항목 업데이트
            currentSelection.textContent = option.textContent;

            // 모든 옵션에서 선택된 상태를 제거
            options.forEach((opt) =>
                opt.classList.remove("driver-signup3-nice-select-list-selected")
            );

            // 선택된 옵션에 선택된 클래스 추가
            option.classList.add("driver-signup3-nice-select-list-selected");

            // 드롭다운을 닫음
            closeDropdown();
        });
    });

    // 드롭다운 열기 함수
    function openDropdown() {
        selectBox.classList.add("open");
        optionsList.style.opacity = "1";
        optionsList.style.pointerEvents = "auto";
        optionsList.style.transform = "translateY(0)";
    }

    // 드롭다운 닫기 함수
    function closeDropdown() {
        selectBox.classList.remove("open");
        optionsList.style.opacity = "0";
        optionsList.style.pointerEvents = "none";
        optionsList.style.transform = "translateY(-21px)";
    }

    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener("click", (e) => {
        if (!selectBox.contains(e.target)) {
            closeDropdown();
        }
    });
});

// 기사님들 수거 원하는 지역 선택 자바스크립트 코드
document.addEventListener("DOMContentLoaded", () => {
    const regionSelectBox = document.querySelector(
        ".driver-signup3-select-region .driver-signup3-region-nice-select"
    );
    const districtSelectBox = document.querySelectorAll(
        ".driver-signup3-select-region .driver-signup3-region-nice-select"
    )[1];

    const regionOptionsList = regionSelectBox.querySelector(
        ".driver-signup3-current-list"
    );
    const districtOptionsList = districtSelectBox.querySelector(
        ".driver-signup3-current-list"
    );

    const regionOptions = regionOptionsList.querySelectorAll(".option");
    let districtOptions; // 시/군/구 옵션을 동적으로 변경할 때 사용할 변수

    const regionCurrentSelection = regionSelectBox.querySelector(
        ".driver-signup3-current"
    );
    const districtCurrentSelection = districtSelectBox.querySelector(
        ".driver-signup3-current"
    );

    // 시/군/구는 처음에는 비활성화
    districtSelectBox.classList.add("disabled");

    // 드롭다운 열기 및 닫기 공통 함수
    const toggleDropdown = (selectBox, optionsList) => {
        if (selectBox.classList.contains("open")) {
            closeDropdown(selectBox, optionsList);
        } else {
            openDropdown(selectBox, optionsList);
        }
    };

    const openDropdown = (selectBox, optionsList) => {
        selectBox.classList.add("open");
        optionsList.style.opacity = "1";
        optionsList.style.pointerEvents = "auto";
        optionsList.style.transform = "translateY(0)";
    };

    const closeDropdown = (selectBox, optionsList) => {
        selectBox.classList.remove("open");
        optionsList.style.opacity = "0";
        optionsList.style.pointerEvents = "none";
        optionsList.style.transform = "translateY(-21px)";
    };

    // 지역 드롭다운 열기 및 선택 처리
    regionSelectBox.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleDropdown(regionSelectBox, regionOptionsList);
    });

    regionOptions.forEach((option) => {
        option.addEventListener("click", (e) => {
            e.stopPropagation();
            // 선택된 옵션 업데이트
            regionCurrentSelection.textContent = option.textContent;
            regionOptions.forEach((opt) => opt.classList.remove("selected"));
            option.classList.add("selected");

            // 드롭다운 닫기
            closeDropdown(regionSelectBox, regionOptionsList);

            // 시/군/구 활성화
            districtSelectBox.classList.remove("disabled");

            // 시/군/구 리스트 업데이트
            if (option.textContent === "서울") {
                districtOptionsList.innerHTML = `
                    <li data-value="강남구" class="option">강남구</li>
                    <li data-value="강동구" class="option">강동구</li>
                    <li data-value="강북구" class="option">강북구</li>
                    <li data-value="강서구" class="option">강서구</li>
                    <li data-value="관악구" class="option">관악구</li>
                    <li data-value="광진구" class="option">광진구</li>
                    <li data-value="구로구" class="option">구로구</li>
                    <li data-value="금천구" class="option">금천구</li>
                    <li data-value="노원구" class="option">노원구</li>
                    <li data-value="도봉구" class="option">도봉구</li>
                    <li data-value="동대문구" class="option">동대문구</li>
                    <li data-value="동작구" class="option">동작구</li>
                    <li data-value="마포구" class="option">마포구</li>
                    <li data-value="서대문구" class="option">서대문구</li>
                    <li data-value="서초구" class="option">서초구</li>
                    <li data-value="성동구" class="option">성동구</li>
                    <li data-value="성북구" class="option">성북구</li>
                    <li data-value="송파구" class="option">송파구</li>
                    <li data-value="양천구" class="option">양천구</li>
                    <li data-value="영등포구" class="option">영등포구</li>
                    <li data-value="용산구" class="option">용산구</li>
                    <li data-value="은평구" class="option">은평구</li>
                    <li data-value="종로구" class="option">종로구</li>
                    <li data-value="중구" class="option">중구</li>
                    <li data-value="중랑구" class="option">중랑구</li>
                `;
                districtCurrentSelection.textContent = "시/군/구";
            } else {
                districtOptionsList.innerHTML = `<li class="option selected disabled">시/군/구</li>`;
            }

            // 새롭게 생성된 옵션에 이벤트 리스너 추가
            districtOptions = districtOptionsList.querySelectorAll(".option");
            districtOptions.forEach((opt) => {
                opt.addEventListener("click", (e) => {
                    e.stopPropagation();
                    districtCurrentSelection.textContent = opt.textContent;
                    districtOptions.forEach((dOpt) =>
                        dOpt.classList.remove("selected")
                    );
                    opt.classList.add("selected");

                    // 드롭다운 닫기
                    closeDropdown(districtSelectBox, districtOptionsList);
                });
            });
        });
    });

    // 시/군/구 드롭다운 열기 및 선택 처리
    districtSelectBox.addEventListener("click", (e) => {
        if (!districtSelectBox.classList.contains("disabled")) {
            e.stopPropagation();
            toggleDropdown(districtSelectBox, districtOptionsList);
        }
    });

    // 외부 클릭 시 드롭다운 닫기
    document.addEventListener("click", (e) => {
        if (!regionSelectBox.contains(e.target)) {
            closeDropdown(regionSelectBox, regionOptionsList);
        }
        if (!districtSelectBox.contains(e.target)) {
            closeDropdown(districtSelectBox, districtOptionsList);
        }
    });
});

// 모든 필드 입력시 다음 버튼 활성화 자바스크립트 코드
document.addEventListener("DOMContentLoaded", () => {
    const inputs = {
        address: document.getElementById("driver-signup3-useraddress"),
        password: document.getElementById("driver-signup3-userpw"),
        email: document.getElementById("driver-signup3-email"),
    };

    const nextButton = document.querySelector(".driver-signup3-btn-type");

    // 입력 필드 상태를 확인하는 함수
    function checkIfFilled() {
        const isFilled =
            inputs.address.value.trim() !== "" &&
            inputs.password.value.trim() !== "" &&
            inputs.email.value.trim() !== "";

        // 모든 필드가 채워졌으면 버튼 활성화
        if (isFilled) {
            nextButton.classList.remove("driver-signup3-disabled");
            nextButton.style.opacity = "1"; // 색 진하게
            nextButton.style.pointerEvents = "auto"; // 클릭 가능
        } else {
            nextButton.classList.add("driver-signup3-disabled");
            nextButton.style.opacity = "0.4"; // 색 연하게
            nextButton.style.pointerEvents = "none"; // 클릭 불가능
        }
    }

    // 주소, 비밀번호, 이메일 입력 필드에 이벤트 리스너 추가
    inputs.address.addEventListener("input", checkIfFilled);
    inputs.password.addEventListener("input", checkIfFilled);
    inputs.email.addEventListener("input", checkIfFilled);

    // 페이지 로드 시 필드 상태를 확인
    checkIfFilled();
});
