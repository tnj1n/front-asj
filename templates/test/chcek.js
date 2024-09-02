document.addEventListener("DOMContentLoaded", () => {
    const correctCode = "123456"; // 올바른 인증번호
    const modal = document.getElementById("authModal"); // 모달 창 요소
    const closeModalButton = document.querySelector(".close"); // 모달 닫기 버튼
    const verifyButton = document.getElementById("verifyBtn"); // 인증번호 확인 버튼
    const inputs = document.querySelectorAll(".auth-input"); // 인증번호 입력 필드들
    const pageContent = document.getElementById("pageContent"); // 인증 후 표시할 페이지 콘텐츠

    // 모달을 여는 함수
    const openModal = () => {
        modal.style.display = "flex"; // 모달을 화면에 보이도록 설정
        document.body.style.overflow = "hidden"; // 배경 스크롤 비활성화
        modal.querySelector(".modal-content").style.animation = "popUp 0.5s"; // 애니메이션을 적용하여 모달을 열기
        inputs[0].focus(); // 첫 번째 입력 필드에 포커스를 맞춤
    };

    // 모달을 닫는 함수
    const closeModal = () => {
        document.body.style.overflow = ""; // 배경 스크롤 복원
        modal.querySelector(".modal-content").style.animation = "popDown 0.5s"; // 애니메이션을 적용하여 모달을 닫기
        setTimeout(() => {
            modal.style.display = "none"; // 애니메이션이 끝난 후 모달을 화면에서 숨김
        }, 450); // 애니메이션의 지속 시간과 맞추기
    };

    // 페이지 로드 시 모달을 자동으로 열기
    openModal();

    // 모달 닫기 버튼 클릭 시 모달 닫기
    closeModalButton.onclick = () => {
        closeModal();
    };

    // 모달 외부 클릭 시 모달 닫기
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    // 입력 필드 처리
    inputs.forEach((input, index) => {
        // 입력이 발생할 때
        input.addEventListener("input", () => {
            // 입력 필드에 한 글자가 입력되면 다음 입력 필드로 포커스를 이동
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // 백스페이스 키 입력 처리
        input.addEventListener("keydown", (e) => {
            if (
                e.key === "Backspace" && // 백스페이스 키가 눌렸을 때
                input.value.length === 0 && // 현재 입력 필드에 값이 없고
                index > 0 // 첫 번째 입력 필드가 아닐 때
            ) {
                inputs[index - 1].focus(); // 이전 입력 필드로 포커스를 이동
            }
        });
    });

    // 확인 버튼 클릭 시 인증번호 확인
    verifyButton.addEventListener("click", () => {
        // 모든 입력 필드의 값을 합쳐서 인증번호 생성
        const enteredCode = Array.from(inputs)
            .map((input) => input.value)
            .join("");

        // 입력된 인증번호의 길이가 올바른 인증번호의 길이와 같을 때
        if (enteredCode.length === correctCode.length) {
            if (enteredCode === correctCode) {
                // 인증번호가 올바를 때
                closeModal(); // 모달 닫기
                pageContent.style.display = "block"; // 페이지 콘텐츠 표시
            } else {
                // 인증번호가 틀릴 때
                alert("Code incorrect. Please try again."); // 오류 메시지 표시
                inputs.forEach((input) => (input.value = "")); // 모든 입력 필드 초기화
                inputs[0].focus(); // 첫 번째 입력 필드에 포커스 맞춤
            }
        }
    });
});
