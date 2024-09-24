document.addEventListener("DOMContentLoaded", () => {
    // 휴대폰 인증 버튼을 클릭하면 호출되는 함수
    function showPhoneNumberInput() {
        // 휴대폰 인증 버튼 숨기기
        document.getElementById("driver-signup1-certify-button").style.display =
            "none";
        // 휴대폰 번호 입력 섹션 보이기
        document.getElementById(
            "driver-signup1-phone-number-section"
        ).style.display = "block";
    }

    // 휴대폰 번호 확인 버튼을 클릭하면 호출되는 함수
    function showAuthNumberInput() {
        // 휴대폰 번호 입력 섹션 숨기기
        document.getElementById(
            "driver-signup1-phone-number-section"
        ).style.display = "none";
        // 인증번호 입력 섹션 보이기
        document.getElementById(
            "driver-signup1-auth-number-section"
        ).style.display = "block";
    }

    // 인증번호 확인 버튼을 클릭하면 호출되는 함수
    function showAgreementButton() {
        // 인증번호 입력 섹션 숨기기
        document.getElementById(
            "driver-signup1-auth-number-section"
        ).style.display = "none";
        // 약관 동의 섹션 보이기
        document.getElementById(
            "driver-signup1-agreement-section"
        ).style.display = "block";
    }

    // 입력 필드와 레이블을 초기화하는 함수
    function updateLabelPosition(input, label) {
        if (input.value.trim() !== "" || document.activeElement === input) {
            label.style.top = "9px";
            label.style.left = "20px";
            label.style.fontSize = "11px";
            label.style.color = "#f0543a";
            input.style.borderColor = "#f0543a";
        } else {
            label.style.top = "19px";
            label.style.left = "20px";
            label.style.fontSize = "15px";
            label.style.color = "#94949a";
            input.style.borderColor = "#efefef";
        }
    }

    // 초기화 및 입력 필드와 레이블의 포커스 효과 처리
    const phoneInput = document.getElementById("driver-signup1-phonenumber");
    const phoneLabel = phoneInput.nextElementSibling;

    const authInput = document.getElementById("driver-signup1-authnumber");
    const authLabel = authInput.nextElementSibling;

    // 초기 상태 설정
    updateLabelPosition(phoneInput, phoneLabel);
    updateLabelPosition(authInput, authLabel);

    // 이벤트 리스너 설정
    phoneInput.addEventListener("input", () =>
        updateLabelPosition(phoneInput, phoneLabel)
    );
    phoneInput.addEventListener("focus", () =>
        updateLabelPosition(phoneInput, phoneLabel)
    );
    phoneInput.addEventListener("blur", () =>
        updateLabelPosition(phoneInput, phoneLabel)
    );

    authInput.addEventListener("input", () =>
        updateLabelPosition(authInput, authLabel)
    );
    authInput.addEventListener("focus", () =>
        updateLabelPosition(authInput, authLabel)
    );
    authInput.addEventListener("blur", () =>
        updateLabelPosition(authInput, authLabel)
    );

    // 함수들을 전역 범위에 등록
    window.showPhoneNumberInput = showPhoneNumberInput;
    window.showAuthNumberInput = showAuthNumberInput;
    window.showAgreementButton = showAgreementButton;
});
