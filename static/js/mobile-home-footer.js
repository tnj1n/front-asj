/* 
문제)

<a class="js_toggle btn-company close"></a>
<a class="js_toggle btn-company"></a>

 .footer-info .company-box .btn-company.close .ico-down {
    transform: rotate(0);
} 
 .footer-info .company-box .btn-company .ico-down {
     margin-left: 5px;
     transform: rotate(-180deg);
 }

 기본 값<div id="Detail" class="detail" style="display: none;</div>
 <div id="detail" class="detail" style> */

const toggleDiv = document.querySelector(".js_toggle.btn-company");
const toggleButton = document.querySelector(".ico-down");
const detail = document.querySelector(".detail");

// openButton.addEventListener("click", (e) => {
//     iconUp.classList.toggle("rotated");

//     if (detail.style.display === "none") {
//         detail.style.display = "block";
//     } else {
//         detail.style.display = "none";
//     }
// });

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
