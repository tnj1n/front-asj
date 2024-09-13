document.addEventListener("DOMContentLoaded", () => {
    const depth1Items = document.querySelectorAll(".list-depth1 > li");

    depth1Items.forEach((liItem) => {
        const link = liItem.querySelector("a");
        const subMenu = liItem.querySelector(".gnb-sub-wrap");

        // 마우스를 a 태그에 올렸을 때
        link.addEventListener("mouseenter", () => {
            // 모든 li 요소에서 active 클래스를 제거
            depth1Items.forEach((item) => {
                item.classList.remove("active");
                const otherSubMenu = item.querySelector(".gnb-sub-wrap");
                if (otherSubMenu) {
                    otherSubMenu.style.display = "none";
                }
            });

            // 현재 li 요소에 active 클래스 추가 및 하위 메뉴 표시
            liItem.classList.add("active");
            if (subMenu) {
                subMenu.style.display = "block";
            }
        });

        // 하위 메뉴에 마우스를 올렸을 때 active 클래스 유지
        if (subMenu) {
            subMenu.addEventListener("mouseenter", () => {
                liItem.classList.add("active");
                subMenu.style.display = "block";
            });

            // 하위 메뉴에서 마우스가 벗어났을 때 active 클래스 제거
            subMenu.addEventListener("mouseleave", () => {
                liItem.classList.remove("active");
                subMenu.style.display = "none";
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const bubbles = document.querySelectorAll(".util-list");

    bubbles.forEach((spanItem) => {
        const link = spanItem.querySelector(".bubble");

        link.addEventListener("mouseenter", () => {
            bubbles.forEach((item) => {
                item.classList.add("bubble-inactive");
            });
        });
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const myMenu = document.querySelectorAll(".gnb-my");

//     myMenu.forEach((liItem) => {
//         const link = liItem.querySelector("a");
//         const subMenu = liItem.querySelector(".gnb-sub-wrap");

//         // 마우스를 a 태그에 올렸을 때
//         link.addEventListener("mouseenter", () => {
//             // 모든 li 요소에서 active 클래스를 제거
//             myMenu.forEach((item) => {
//                 item.classList.remove("active");
//                 const otherSubMenu = item.querySelector(".gnb-sub-wrap");
//                 if (otherSubMenu) {
//                     otherSubMenu.style.display = "none";
//                 }
//             });

//             // 현재 li 요소에 active 클래스 추가 및 하위 메뉴 표시
//             liItem.classList.add("active");
//             if (subMenu) {
//                 subMenu.style.display = "block";
//             }
//         });

//         // 하위 메뉴에 마우스를 올렸을 때 active 클래스 유지
//         if (subMenu) {
//             subMenu.addEventListener("mouseenter", () => {
//                 liItem.classList.add("active");
//                 subMenu.style.display = "block";
//             });

//             // 하위 메뉴에서 마우스가 벗어났을 때 active 클래스 제거
//             subMenu.addEventListener("mouseleave", () => {
//                 liItem.classList.remove("active");
//                 subMenu.style.display = "none";
//             });
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const depth2Items = document.querySelectorAll(".list-depth2 > li");

    depth2Items.forEach((liItem) => {
        const link = liItem.querySelector("a");
        const subMenu = liItem.querySelector(".gnb-sub-wrap");

        // 마우스를 a 태그에 올렸을 때
        link.addEventListener("mouseenter", () => {
            // 모든 li 요소에서 active 클래스를 제거
            depth2Items.forEach((item) => {
                item.classList.remove("active");
            });

            // 현재 li 요소에 active 클래스 추가 및 하위 메뉴 표시
            liItem.classList.add("active");

            link.addEventListener("mouseleave", () => {
                depth2Items.forEach((item) => {
                    item.classList.remove("active");
                });
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const depth3Items = document.querySelectorAll(".list-depth3 > li");

    depth3Items.forEach((liItem) => {
        const link = liItem.querySelector("a");
        const subMenu = liItem.querySelector(".gnb-sub-wrap");

        // 마우스를 a 태그에 올렸을 때
        link.addEventListener("mouseenter", () => {
            // 모든 li 요소에서 active 클래스를 제거
            depth3Items.forEach((item) => {
                item.classList.remove("active");
            });

            // 현재 li 요소에 active 클래스 추가 및 하위 메뉴 표시
            liItem.classList.add("active");

            link.addEventListener("mouseleave", () => {
                depth3Items.forEach((item) => {
                    item.classList.remove("active");
                });
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const depth2Items = document.querySelectorAll(".gnb-my");

    depth2Items.forEach((liItem) => {
        const link = liItem.querySelector("a");

        // 마우스를 a 태그에 올렸을 때
        link.addEventListener("mouseenter", () => {
            // 모든 li 요소에서 active 클래스를 제거
            depth2Items.forEach((item) => {
                item.classList.remove("active");
            });

            // 현재 li 요소에 active 클래스 추가 및 하위 메뉴 표시
            liItem.classList.add("active");
        });

        // 마우스를 li 요소에서 뗄 때 active 클래스 제거
        liItem.addEventListener("mouseleave", () => {
            liItem.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const depth2Items = document.querySelectorAll(".util-list");

    depth2Items.forEach((liItem) => {
        const link = liItem.querySelector("a");

        // 마우스를 a 태그에 올렸을 때
        link.addEventListener("mouseenter", () => {
            // 모든 li 요소에서 active 클래스를 제거
            depth2Items.forEach((item) => {
                item.classList.add("bubble-inactive");
            });

            // 현재 li 요소에 active 클래스 추가 및 하위 메뉴 표시
            liItem.classList.add("active");
        });

        // 마우스를 li 요소에서 뗄 때 active 클래스 제거
        liItem.addEventListener("mouseleave", () => {
            liItem.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const bubbles = document.querySelectorAll(".util-list > li");
    const gnbMy = document.querySelector(".gnb-my"); // gnb-my 요소 선택

    bubbles.forEach((liItem) => {
        const link = liItem.querySelector("a");

        link.addEventListener("mouseenter", () => {
            // gnb-my 내부의 a태그가 아닌 다른 a태그에 마우스가 올라갔을 때만 실행
            if (!gnbMy.contains(link)) {
                gnbMy.classList.add("bubble-inactive");
            }
        });

        link.addEventListener("mouseleave", () => {
            // gnb-my 내부의 a태그가 아닌 다른 a태그에서 마우스가 떨어졌을 때만 실행
            if (!gnbMy.contains(link)) {
                gnbMy.classList.remove("bubble-inactive");
            }
        });
    });
});
