// detail div를 숨겼다가 나타나게 해야됨
// div에 스타일이 style="display:none에서 눌렀을 때 style을 없애주면 됨" 해주면 됨.
// HTMLCollection.prototype.forEach = Array.prototype.forEach;
const openButton = document.querySelector(".btn-company");
const detail = document.getElementsByClassName("detail");

// console.log(openButtons);
// openButtons.forEach((openButton) => {
openButton.addEventListener("click", (e) => {
    detail.style.display = "";
});
// });
