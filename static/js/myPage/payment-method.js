// 온라인 충전하기 모달창
const openModal = document.querySelector(".btn-type10");
const closeModal = document.querySelector(".pop-close-wrap");
const modal = document.querySelector(".pop-wrap v2");
const modalWrap = document.querySelector("#pop-prepaid");
const telNumInput = document.querySelector("#telNo");
openModal.addEventListener("click", () => {
    telNumInput.value = "";
    document.body.style.overflow = "hidden";
    modalWrap.style.display = "flex";
    modal.style.display = "block";

    // document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    modalWrap.style.display = "none";
});
