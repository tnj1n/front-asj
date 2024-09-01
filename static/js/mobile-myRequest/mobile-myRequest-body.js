const selectButtons = document.querySelectorAll(".tab-type li");
console.log(selectButtons);

selectButtons.forEach((selectButton) => {
    selectButton.addEventListener("click", (e) => {
        if (e.target.parentElement.classList.contains("active")) {
            e.target.parentElement.classList.remove("active");
        } else {
            e.target.parentElement.classList.add("active");
        }
        console.log(e.target);
    });
});
