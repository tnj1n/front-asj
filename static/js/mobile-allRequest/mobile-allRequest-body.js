const selectDivs = document.querySelectorAll(".nice-select");
const selectLists = document.querySelectorAll(".list > li");
console.log(selectDivs);
console.log(selectLists);

// 지역 선택 큰 div
selectDivs.forEach((selectDiv) => {
    selectDiv.addEventListener("click", (e) => {
        const target = e.target;
        // 'open' 클래스가 있는지 확인
        if (target.classList.contains("open")) {
            // 클래스가 있으면 제거
            target.classList.toggle("open");
        } else {
            // 클래스가 없으면 추가
            target.classList.add("open");
        }
    });
});
// 지역 선택 세부 div
// .option.focus : 주황색으로 폰트 바뀜
// .nice-select .option.disabled : 회색으로 바뀜
// .select-type2.disabled select : 검은색으로 선택됨
selectLists.forEach((selectList) => {
    selectList.addEventListener("click", (e) => {
        const target = e.target;

        if (target.classList.contains("disabled")) {
            return; // 비활성화된 항목 클릭 시 아무 동작도 하지 않음
        }

        // `focus` 클래스 처리
        selectLists.forEach((item) => {
            item.classList.remove("focus");
        });
        target.classList.add("focus");

        // `selected` 클래스 처리
        selectLists.forEach((item) => {
            item.classList.remove("selected");
        });
        target.classList.add("selected");

        // `nice-select`의 선택된 옵션 업데이트
        const parentDiv = target.closest(".nice-select");
        const selectedOption = parentDiv.querySelector(".selected-option");
        selectedOption.textContent = target.textContent;
    });
});
