// detail div를 숨겼다가 나타나게 해야됨
// div에 스타일이 style="display:none에서 눌렀을 때 style을 없애주면 됨" 해주면 됨.
// HTMLCollection.prototype.forEach = Array.prototype.forEach;
const openButton = document.querySelector(".btn-company.close");
const iconUp = document.querySelector(".ico-down");
const iconTest = document.querySelector(".icon-test");
const detail = document.querySelector(".detail");

iconUp.addEventListener("click", (e) => {
    if (e.target.classList.cotains(".btn-company.close")) {
        iconUp.classList.toggle(".btn-company");
        iconUp.style.transform = "rotate(-180deg)";
    }
    // iconUp.style.transform = "rotate(-180deg)";
    // iconUp.style.transition = "transform 0.5s ease";
    // detail.style.display = "";
});

// const mains = document.querySelectorAll("div.main");
// mains.forEach((main, i) => {
//     main.addEventListener("click", (e) => {
//         if (e.target.classList.contains("block")) {
//             main.classList.toggle("on");
//         }
