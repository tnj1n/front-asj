const selectDivs = document.querySelectorAll(".nice-select");
// 전체 드롭다운
const overallSelectDiv = document.querySelector(
    ".select-type2:nth-of-type(1) .nice-select"
);

// 시/군/구 드롭다운
const districtSelectDiv = document.querySelector(
    ".select-type2:nth-of-type(2) .nice-select"
);

// 시/군/구 드롭다운의 옵션 리스트
const districtOptions = districtSelectDiv.querySelectorAll(".list > li");
const overallSelectLists = overallSelectDiv.querySelectorAll(".list > li");

// const selectLists = document.querySelectorAll(".list > li");
// const selectedLists = document.querySelectorAll("#listTagHtml > li");
// const parentList = document.querySelectorAll("#listTagHtml");
console.log(overallSelectDiv);
console.log(districtSelectDiv);
console.log(districtOptions);

// 지역 선택 div 클릭 시 드롭다운 열고 닫기
selectDivs.forEach((selectDiv) => {
    selectDiv.addEventListener("click", (e) => {
        e.stopPropagation();
        // 모든 selectDiv에서 'open' 클래스 제거
        selectDivs.forEach((div) => {
            if (div !== selectDiv) {
                div.classList.remove("open");
            }
        });
        // 현재 선택한 div의 'open' 클래스 토글
        selectDiv.classList.toggle("open");
    });
});

// 전체 드롭다운에서 옵션 클릭 시
overallSelectLists.forEach((option) => {
    option.addEventListener("click", (e) => {
        const target = e.target;

        // 클릭된 요소가 .option인지 확인
        if (
            target.classList.contains("option") &&
            !target.classList.contains("disabled")
        ) {
            // 'focus' 및 'selected' 클래스 처리
            overallSelectDiv.querySelectorAll(".list > li").forEach((item) => {
                item.classList.remove("focus", "selected");
            });
            target.classList.add("focus", "selected");

            // 선택된 옵션을 overallSelectDiv에 업데이트
            const selectedOption =
                overallSelectDiv.querySelector(".option.selected");
            overallSelectDiv.querySelector(".current").innerText =
                selectedOption.innerText;

            // '서울'이 선택되었을 때만 시/군/구 드롭다운 활성화
            if (selectedOption.dataset.value === "서울") {
                districtSelectDiv
                    .querySelectorAll(".list > li.disabled")
                    .forEach((item) => {
                        item.classList.remove("disabled");
                    });
            } else {
                districtSelectDiv
                    .querySelectorAll(".list > li:not(.disabled)")
                    .forEach((item) => {
                        item.classList.add("disabled");
                    });
            }

            // 시/군/구 드롭다운에서 모든 옵션 선택 처리
            districtOptions.forEach((option) => {
                option.addEventListener("click", (e) => {
                    const target = e.target;

                    // 클릭된 요소가 .option인지 확인
                    if (
                        target.classList.contains("option") &&
                        !target.classList.contains("disabled")
                    ) {
                        // 'focus' 및 'selected' 클래스 처리
                        districtOptions.forEach((item) => {
                            item.classList.remove("focus", "selected");
                        });
                        target.classList.add("focus", "selected");

                        // 선택된 옵션을 districtSelectDiv에 업데이트
                        const selectedDistrictOption =
                            districtSelectDiv.querySelector(".option.selected");
                        districtSelectDiv.querySelector(".current").innerText =
                            selectedDistrictOption.innerText;

                        // 선택된 태그를 업데이트
                        const tagId = `tag_${selectedDistrictOption.dataset.value}`;
                        const existingTag = document.querySelector(
                            `#listTagHtml #${tagId}`
                        );
                        if (existingTag) {
                            existingTag.remove(); // 기존 태그가 있으면 제거
                        }

                        // 새로운 태그를 추가
                        const newTag = document.createElement("li");
                        newTag.id = tagId;
                        newTag.className = "tagVal";
                        newTag.innerHTML = `<a href="#">${selectedDistrictOption.innerText}</a>`;
                        document
                            .querySelector("#listTagHtml")
                            .appendChild(newTag);

                        // 선택 후 드롭다운 닫기
                        districtSelectDiv.classList.remove("open");
                    }
                });
            });

            // 선택 후 드롭다운 닫기
            overallSelectDiv.classList.remove("open");
        }
    });
});

// // 지역 선택 큰 div
// selectDivs.forEach((selectDiv) => {
//     selectDiv.addEventListener("click", (e) => {
//         const target = e.target;
//         // 'open' 클래스가 있는지 확인
//         if (target.classList.contains("open")) {
//             // 클래스가 있으면 제거
//             target.classList.toggle("open");
//         } else {
//             // 클래스가 없으면 추가
//             target.classList.add("open");
//         }
//     });
// });
// // 지역 선택 세부 div
// // .option.focus : 주황색으로 폰트 바뀜
// // .nice-select .option.disabled : 회색으로 바뀜
// // .select-type2.disabled select : 검은색으로 선택됨
// selectLists.forEach((selectList) => {
//     selectList.addEventListener("click", (e) => {
//         const target = e.target;

//         if (target.classList.contains("disabled")) {
//             return; // 비활성화된 항목 클릭 시 아무 동작도 하지 않음
//         }

//         // `focus` 클래스 처리
//         selectLists.forEach((item) => {
//             item.classList.remove("focus");
//         });
//         target.classList.add("focus");

//         // `selected` 클래스 처리
//         selectLists.forEach((item) => {
//             item.classList.remove("selected");
//         });
//         target.classList.add("selected");

//         // `nice-select`의 선택된 옵션 업데이트
//         const parentDiv = target.closest(".nice-select");
//         const selectedOption = parentDiv.querySelector(
//             ".option.focus.selected"
//         );
//         //selectDivs 안의 값을 바꿔줌
//         selectDivs[0].firstElementChild.innerText = selectedOption.innerText;
//         selectedLists[0].remove();
//         text = `<li id="tag_66" class="tagVal"><a>${selectedOption.innerText}</a></li>`;
//         console.log(selectedLists);
//         parentList[0].innerHTML += text;
//         console.log(parentList);

//         //  else {
//         //     selectDivs[1].firstElementChild.innerText =
//         //         selectedOption.innerText;
//         // }

//         // selectDivs[0].innerText = selectedOption.innerText;
//     });
// });
