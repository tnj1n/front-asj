const selectDivs = document.querySelectorAll(".nice-select");
const selectLists = document.querySelectorAll(".list > li");
const selectButtons = document.querySelectorAll(".tab-type li");
const pickupYet = document.querySelector(".pickupYet");
const pickedup = document.querySelector(".pickedup");
// 목록이 존재하지 않을 때 나와야 하는 div
const noData = document.querySelector(".nodata-box");
console.log(selectButtons);
console.log(pickupYet);

//탭이 기본적으로 활성화되어 있기 때문에 #no-data-use 숨김
noData.style.display = "none";

// 수거 예정/ 수거 완료 버튼
selectButtons.forEach((selectButton) => {
    // console.log(selectButton);
    selectButton.addEventListener("click", (e) => {
        // console.log(e.target);

        selectButtons.forEach((selectButton) => {
            // console.log(selectButton);
            selectButton.classList.remove("active");
        });
        selectButton.classList.add("active");

        if (selectButtons[0].classList.contains("active")) {
            if (pickupYet) {
                pickupYet.style.display = "block";
                pickedup.style.display = "none";
            } else {
                noData.style.display = "block";
            }
        } else {
            pickupYet.style.display = "none";
            pickedup.style.display = "block";
        }
    });
});
// 정렬 순서 버튼
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

// if (pickupYet) {
//     noData.style.display = "none";
// } else {
//     pickupYet.style.display = "block";
// }
