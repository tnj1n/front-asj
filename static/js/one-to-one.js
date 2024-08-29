// 탭 활성화
const actives = document.querySelectorAll(".tab-type li");

actives.forEach((li) => {
    li.addEventListener("click", (e) => {
        if (e.target.classList.contains("choice")) {
            actives.forEach((e) => {
                e.classList.remove("active");
            });
            li.classList.add("active");
        }
    });
});

const niceSelects = document.querySelectorAll(".nice-select");

niceSelects.forEach((niceSelect) => {
    niceSelect.addEventListener("click", (e) => {
        const clickedOption = e.target.closest(".option");

        if (clickedOption) {
            // 현재 선택된 .nice-select 요소의 .current span을 찾습니다
            const currentSpan = niceSelect.querySelector(".current");

            // 모든 .option 요소를 찾습니다
            const options = niceSelect.querySelectorAll(".option");

            options.forEach((option) => {
                option.classList.remove("focus");
            });

            // 선택된 li의 textContent를 .current span에 설정합니다
            currentSpan.textContent = clickedOption.textContent;

            // 선택된 .option에만 색상과 focus 클래스를 적용합니다
            clickedOption.classList.add("focus");
            currentSpan.style.color = "#111";

            // 드롭다운 메뉴를 닫습니다 (open 클래스를 제거합니다)
            e.target.parentElement.classList.remove("open");
            console.log(niceSelect.classList.contains("open"));
        }
    });
});

// 드롭다운 클릭 시 열기/닫기 기능
const selectAll = document.querySelectorAll(".select-type2");

selectAll.forEach((select) => {
    select.addEventListener("click", (e) => {
        const niceSelect = e.target.closest(".nice-select");

        if (niceSelect) {
            selectAll.forEach((el) => {
                el.querySelectorAll(".nice-select").forEach((ns) => {
                    if (ns !== niceSelect) {
                        ns.classList.remove("open");
                    }
                });
            });

            // 현재 클릭한 nice-select 요소의 open 클래스 상태를 확인
            if (niceSelect.classList.contains("open")) {
                niceSelect.classList.remove("open");
            } else {
                niceSelect.classList.add("open");
            }
        }
    });
});

// 클릭 외부 영역 클릭 시 모든 nice-select 닫기
document.addEventListener("click", (e) => {
    if (!e.target.closest(".select-type2")) {
        selectAll.forEach((select) => {
            select.querySelectorAll(".nice-select").forEach((ns) => {
                ns.classList.remove("open");
            });
        });
    }
});

// 글자 수 세기
document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("contents");
    const memoCnt = document.getElementById("memoCnt");

    textarea.addEventListener("input", function () {
        // Get the length of the textarea value
        const textLength = textarea.value.length;

        // Update the content of the memoCnt element
        memoCnt.textContent = textLength;
    });
});

// (보안) 이미지&오디오 불러오기
// 페이지가 로드될 때 처음 호출되어 오디오를 로드합니다.
window.onload = function () {
    loadInitialCaptcha();
};

function loadInitialCaptcha() {
    const randomValue = Math.random();
    const captchaImage = document.getElementById("captcha");
    const captchaAudio = document.getElementById("captchaAudio");

    captchaImage.src =
        "https://www.freet.co.kr/customer/captchaImg.do?rand=" + randomValue;
    captchaAudio.src =
        "https://www.freet.co.kr/customer/captchaAudio.do?rand=" + randomValue;

    // 오디오 요소를 미리 로드
    captchaAudio.load(); // <- 초기 로드 추가
}

function getCaptcha() {
    loadInitialCaptcha(); // <- 초기 로드를 재사용
}

function playCaptchaAudio() {
    const captchaAudio = document.getElementById("captchaAudio");
    captchaAudio.play();
}

// 파일 이름 출력
document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file");
    const textInput = document.getElementById("file-input");

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length > 0) {
            textInput.value = fileInput.files[0].name;
        } else {
            textInput.value = "파일선택";
        }
    });
});

// 체크박스 체크 해제
document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("check02");
    const chkBoxContainer = checkbox.closest(".chk-box");

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            chkBoxContainer.classList.add("selected");
        } else {
            chkBoxContainer.classList.remove("selected");
        }
    });
});

// 버튼 자바스크립트
document.addEventListener("DOMContentLoaded", function () {
    const formDls = document.querySelectorAll(".form-dl");
    const procBtn = document.getElementById("procBtn");

    function checkFormValidity() {
        let allValid = true;

        formDls.forEach((dl) => {
            const focusElement = dl.querySelector(".focus");
            const input = dl.querySelector(
                'input[type="text"], textarea, input[type="checkbox"]'
            );

            // 필수 요소 중 텍스트와 textarea의 값이 비어있는지, 체크박스가 체크되었는지 확인합니다.
            if (focusElement && input) {
                if (input.type === "text" && input.value.trim() === "") {
                    allValid = false;
                } else if (
                    input.tagName === "TEXTAREA" &&
                    (input.value.length < 10 || input.value.length > 1500)
                ) {
                    allValid = false;
                } else if (input.type === "checkbox" && !input.checked) {
                    allValid = false;
                }
            }
        });

        // 모든 필드가 유효하면 disabled 클래스를 제거하고, 그렇지 않으면 추가합니다.
        if (allValid) {
            procBtn.classList.remove("disabled");
        } else {
            procBtn.classList.add("disabled");
        }
    }

    // input과 textarea, checkbox에 이벤트 리스너를 추가합니다.
    formDls.forEach((dl) => {
        const inputs = dl.querySelectorAll(
            'input[type="text"], textarea, input[type="checkbox"]'
        );
        inputs.forEach((input) => {
            input.addEventListener("input", checkFormValidity);
            input.addEventListener("change", checkFormValidity);
        });
    });

    // 페이지 로드 시 초기 상태를 확인합니다.
    checkFormValidity();
});

// 위로 올라가는 아이콘
const moveTop = document.querySelector(".btn-top");

moveTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // 부드럽게 스크롤 되도록 설정
    });
});

// modal창

// 자바스크립트 코드
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("pop-alert2");
    const cancelButton = document.querySelector(
        "#pop-alert2 .btn-wrap .btn-type.v3"
    );

    // 모달 열기 함수
    function openModal() {
        modal.style.display = "flex"; // 모달 보이기
        document.body.style.overflow = "hidden"; // 배경 스크롤 비활성화
    }

    // 모달 닫기 함수
    function closeModal() {
        modal.style.display = "none"; // 모달 숨기기
        document.body.style.overflow = ""; // 배경 스크롤 복원
    }

    // 취소 버튼 클릭 시 모달 닫기
    if (cancelButton) {
        cancelButton.addEventListener("click", closeModal);
    }

    // 페이지 로드 시 모달 열기
    openModal();
});
