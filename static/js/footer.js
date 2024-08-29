const toggleDiv = document.querySelector(".js_toggle.btn-company");
const toggleButton = document.querySelector(".ico-down");
const detail = document.querySelector(".company-box > .detail");

toggleDiv.addEventListener("click", () => {
    // Toggle detail 보이게
    if (detail.style.display === "none" || detail.style.display === "") {
        detail.style.display = "block";
        toggleDiv.classList.remove("close");
    } else {
        detail.style.display = "none";
        toggleDiv.classList.add("close");
    }

    // Toggle icon rotation
    toggleButton.classList.toggle("rotated");
});
