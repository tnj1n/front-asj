document.addEventListener("DOMContentLoaded", () => {
    function showPhoneNumberInput() {
        document.getElementById("user-signup-certify-button").style.display =
            "none";
        document.getElementById("phone-number-section").style.display = "block";
    }

    function showAuthNumberInput() {
        document.getElementById("phone-number-section").style.display = "none";
        document.getElementById("auth-number-section").style.display = "block";
    }

    function showAgreementButton() {
        document.getElementById("auth-number-section").style.display = "none";
        document.getElementById("agreement-section").style.display = "block";
    }

    // 초기화 및 입력 필드와 레이블의 포커스 효과 처리
    const phoneInput = document.getElementById("user-signup-phonenumber");
    const phoneLabel = phoneInput.nextElementSibling;

    const authInput = document.getElementById("user-signup-authnumber");
    const authLabel = authInput.nextElementSibling;

    const updateLabelPosition = (input, label) => {
        if (input.value !== "" || document.activeElement === input) {
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
    };

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
