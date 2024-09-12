// 로그인 버튼 클릭 이벤트
document.getElementById("BtnLogin").addEventListener("click", (e) => {
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("password").value;
    const modal = document.getElementById("pop-alert");
    const modalMessage = document.getElementById("pop-alert-msg");

    // 빈 문자열 확인 및 모달 메시지 설정
    if (userid === "" && password === "") {
        modalMessage.textContent = "아이디와 비밀번호가 입력되지 않았습니다.";
        modal.style.display = "block";
    } else if (userid === "" && password !== "") {
        modalMessage.textContent = "아이디가 입력되지 않았습니다.";
        modal.style.display = "block";
    } else if (userid !== "" && password === "") {
        modalMessage.textContent = "비밀번호가 입력되지 않았습니다.";
        modal.style.display = "block";
    } else if (userid !== "" && password !== "") {
        // 아이디와 비밀번호가 모두 입력된 경우 로그인 처리
        console.log("로그인 시도");
        return; // 로그인 시도일 경우 모달을 열지 않음
    }

    // 기본 동작 방지 (링크 클릭 등)
    e.preventDefault();
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
                label.style.color = "#6ADB7B"; // 연두색
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

// 모달 창 확인 버튼 클릭 이벤트
document.getElementById("pop-alert-confirm").addEventListener("click", (e) => {
    const modal = document.getElementById("pop-alert");
    modal.style.display = "none"; // 모달 창을 닫음
    e.preventDefault(); // 기본 동작 방지
});

// 비밀번호 입력창 ico-eye 아이콘 동작 이벤트
document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.querySelector(".ico-eye");

    toggleIcon.addEventListener("click", () => {
        const isPassword = passwordField.type === "password";

        // 비밀번호를 보이게 하거나 숨깁니다.
        passwordField.type = isPassword ? "text" : "password";

        // 아이콘 클래스를 토글하여 상태를 변경합니다.
        toggleIcon.classList.toggle("ico-eye-on");
    });
});
