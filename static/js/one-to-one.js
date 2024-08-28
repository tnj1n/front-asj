const actives = document.querySelectorAll(".tab-type li");
actives.forEach((li) => {
    li.addEventListener("click", (e) => {
        if (e.target.classList.contains("choice")) {
            actives.forEach((e) => {
                e.classList.remove("active");
            });
            li.classList.add("active");
        }
    });
});
