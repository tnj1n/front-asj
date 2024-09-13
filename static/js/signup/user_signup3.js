document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("user-signup3-userpw");
    const togglePasswordIcon = document.querySelector(".user-signup3-ico-eye");

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
            togglePasswordIcon.classList.add("user-signup3-ico-eye-on");
        } else {
            togglePasswordIcon.classList.remove("user-signup3-ico-eye-on");
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

document.addEventListener("DOMContentLoaded", () => {
    const addressInput = document.getElementById("user-signup3-useraddress");
    const passwordInput = document.getElementById("user-signup3-userpw");
    const emailInput = document.getElementById("user-signup3-email");
    const nextButton = document.querySelector(
        ".user-signup3-btn-wrap .user-signup3-btn-type"
    );

    function checkInputs() {
        // 모든 필드가 채워졌는지 확인
        if (
            addressInput.value.trim() !== "" &&
            passwordInput.value.trim() !== "" &&
            emailInput.value.trim() !== ""
        ) {
            // 필드가 채워졌다면 다음 버튼 활성화
            nextButton.classList.remove("user-signup3-disabled");
        } else {
            // 필드가 비어있다면 다음 버튼 비활성화
            nextButton.classList.add("user-signup3-disabled");
        }
    }

    // 각 입력 필드에 입력 이벤트 리스너 추가
    addressInput.addEventListener("input", checkInputs);
    passwordInput.addEventListener("input", checkInputs);
    emailInput.addEventListener("input", checkInputs);
});
