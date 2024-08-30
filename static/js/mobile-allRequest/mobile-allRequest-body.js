const selectDivs = document.querySelectorAll(".select-type2");
const selectArrow1 = document.querySelector(".nice-select:after");
console.log(selectButtons);
console.log(selectArrow1);
// class="nice-select selected open"

selectDivs.forEach((selectDiv) => {
    selectDiv.addEventListener("click", (e) => {
        if (e.target.lastElementChild.value === "div.nice-select.open") {
            e.target.lastElementChild.remove("open");
        }
    });
});
