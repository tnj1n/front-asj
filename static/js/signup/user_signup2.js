document.addEventListener("DOMContentLoaded", function () {
    // 전체 동의 체크박스
    const allCheck = document.getElementById("user-signup2-check00");
    // 개별 체크박스들
    const checkboxes = document.querySelectorAll(
        "#user-signup2-check01, #user-signup2-check02, #user-signup2-check03, #user-signup2-check04"
    );
    // 필수 체크박스들
    const requiredCheckboxes = document.querySelectorAll(
        "#user-signup2-check01, #user-signup2-check02"
    );
    // 다음 버튼
    const nextButton = document.querySelector(".user-signup2-btn-type");

    // 전체 동의 체크박스를 클릭했을 때
    allCheck.addEventListener("change", function () {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = allCheck.checked;
        });
        toggleNextButton();
    });

    // 개별 체크박스가 클릭되었을 때
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            // 모든 개별 체크박스가 선택되었는지 확인
            const allChecked = Array.from(checkboxes).every(function (cb) {
                return cb.checked;
            });
            // 전체 동의 체크박스를 개별 체크박스의 상태에 따라 설정
            allCheck.checked = allChecked;
            toggleNextButton();
        });
    });

    // 필수 체크박스들이 모두 선택되었는지 확인하여 다음 버튼 활성화
    function toggleNextButton() {
        const requiredChecked = Array.from(requiredCheckboxes).every(function (
            cb
        ) {
            return cb.checked;
        });

        if (requiredChecked) {
            nextButton.classList.remove("user-signup2-disabled");
            nextButton.style.backgroundColor = "#f0543a"; // 활성화 색상
        } else {
            nextButton.classList.add("user-signup2-disabled");
            nextButton.style.backgroundColor = ""; // 비활성화 색상 초기화
        }
    }

    // 초기 상태 체크
    toggleNextButton();
});
