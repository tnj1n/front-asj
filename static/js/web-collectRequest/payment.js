const nextButtons = document.querySelectorAll(".btn-wrap");
const contents = document.querySelectorAll(".content-wrap");
const content1 = document.getElementById("section-step1");
const content2 = document.getElementById("section-step2");
const content3 = document.getElementById("section-step3");
const content4 = document.getElementById("section-step4");
const content5 = document.getElementById("section-step5");
const contentdetail = document.getElementById("usim-area");
const subscribeButtons = document.querySelectorAll(".select-telco");
const contentdetailBox = document.querySelector("#usim-list-container li");
const cartList = document.querySelector(".cart-list");
// const checkBox = document.querySelectorAll(".checkbox");
// const all = document.querySelectorAll(".chk-box");
// const labelAll = document.querySelectorAll('label[for="terms-check-all"]');
// const terms = document.querySelectorAll(".terms-check");
// const termsCheck1 = document.getElementById("terms-check-1");
// const termsCheck2 = document.getElementById("terms-check-2");
const order = document.getElementById("order-cart-btn");
const timeLists = document.querySelectorAll(".timeList");

NodeList.prototype.filter = Array.prototype.filter;

// console.log(labelAll);
// console.log(content1);
// console.log(contents);
// console.log(nextButtons);
console.log(subscribeButtons);
// console.log(contentdetailBox);
console.log(timeLists);

// 페이지 넘어가는 버튼
nextButtons.forEach((nextButton, i, nextButtons) => {
    nextButton.addEventListener("click", (e) => {
        if (nextButton == nextButtons[0]) {
            contents.forEach((content) => {
                content.style.display = "none";
            });
            content2.style.display = "flex";
        }
        if (nextButton == nextButtons[1]) {
            contents.forEach((content) => {
                content.style.display = "none";
            });
            content4.style.display = "flex";
        }
        if (nextButton == nextButtons[2]) {
            contents.forEach((content) => {
                content.style.display = "none";
            });
            // contents[6].style.display = "flex";
            content5.style.display = "flex";
        }
        // if (nextButton == nextButtons[3]) {
        //     contents.forEach((content) => {
        //         content.style.display = "none";
        //     });
        //     contents[6].style.display = "flex";
        //     content5.style.display = "flex";
        // }
    });
});
// 구독 상품 클릭
subscribeButtons.forEach((subscribeButton) => {
    subscribeButton.addEventListener("click", (e) => {
        console.log("들어옴");
        console.log(subscribeButton);
        subscribeButtons.forEach((subscribeButton) => {
            subscribeButton.classList.remove("active");
        });
        subscribeButton.classList.add("active");

        contentdetail.style.display = "block";
    });
});

contentdetailBox.addEventListener("click", () => {
    order.classList.remove("disabled");
    cartList.style.display = "block";
});
// // *************************************************************************
const allCheckBox = document.getElementById("terms-check-all");
const individualCheckBoxes = document.querySelectorAll(".terms-check");

// 전체 동의 체크박스 상태 변경 시
allCheckBox.addEventListener("change", () => {
    individualCheckBoxes.forEach((checkBox) => {
        checkBox.checked = allCheckBox.checked;
        updateCheckboxStyle(checkBox);
    });
    updateCheckboxStyle(allCheckBox);
    nextButtons[1].firstElementChild.classList.remove("disabled");
});

// 개별 체크박스 상태 변경 시
individualCheckBoxes.forEach((checkBox) => {
    checkBox.addEventListener("change", () => {
        // const allChecked = Array.from(individualCheckBoxes).every(
        //     (cb) => cb.checked
        // );
        // allCheckBox.checked = allChecked;
        // // updateCheckboxStyle(allCheckBox);
        // updateCheckboxStyle(checkBox);
        // updateCheckboxStyle(allCheckBox);
        const allChecked =
            individualCheckBoxes.filter((checkBox) => checkBox.checked)
                .length === 2;
        allCheckBox.checked = allChecked;
        // updateCheckboxStyle(allCheckBox);
        updateCheckboxStyle(checkBox);
        updateCheckboxStyle(allCheckBox);
        if (allChecked) {
            nextButtons[1].firstElementChild.classList.remove("disabled");
        }
    });
});
// 체크박스 스타일 업데이트 함수
function updateCheckboxStyle(checkbox) {
    const checkboxLabel = checkbox.nextElementSibling;
    if (checkbox.checked) {
        checkboxLabel.classList.add("checked");
    } else {
        checkboxLabel.classList.remove("checked");
    }
}

// 초기 스타일 적용
individualCheckBoxes.forEach(updateCheckboxStyle);
updateCheckboxStyle(allCheckBox);

// 날짜 선택
timeLists.forEach((timeList) => {
    timeList.addEventListener("click", (e) => {
        timeLists.forEach((timeList) => {
            timeList.classList.remove("active");
        });
        timeList.classList.add("active");
    });
});
