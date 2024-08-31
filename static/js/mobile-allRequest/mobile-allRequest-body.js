const selectDivs = document.querySelectorAll(".nice-select");
const selectList = document.querySelectorAll(".list > li");
console.log(selectDivs);
console.log(selectList);

// 지역 선택 div 선택
selectDivs.forEach((selectDiv) => {
    selectDiv.addEventListener("click", (e) => {
        const target = e.target;
        // 'open' 클래스가 있는지 확인
        if (target.classList.contains("open")) {
            // 클래스가 있으면 제거
            target.classList.remove("open");
        } else {
            // 클래스가 없으면 추가
            target.classList.add("open");
        }
    });
});
