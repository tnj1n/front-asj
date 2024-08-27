// document.addEventListener("DOMContentLoaded", () => {
//     const questions = document.querySelectorAll(".question");

//     questions.forEach((question) => {
//         question.addEventListener("click", () => {
//             // 모든 answer 요소를 숨김
//             const allAnswers = document.querySelectorAll(".answer");
//             const allQuestions = document.querySelectorAll(".question");

//             allAnswers.forEach((answer) => {
//                 answer.style.display = "none";
//             });

//             // 모든 질문의 배경색 초기화
//             allQuestions.forEach((q) => {
//                 q.style.color = "#94949a"; // 질문 배경색 초기화
//             });

//             // 클릭한 question에 해당하는 answer만 표시
//             const answer = question.nextElementSibling;
//             answer.style.display = "block";

//             // 클릭한 question의 배경색 변경
//             question.style.color = "#111"; // 원하는 색상으로 변경
//         });
//     });
// });

const questions = document.querySelectorAll(".question");
const allAnswers = document.querySelectorAll(".answer");

// 첫 번째 답변만 보이게 설정
allAnswers.forEach((answer, index) => {
    if (index === 0) {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
});

questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        // 모든 답변 숨기기
        allAnswers.forEach((answer, index) => {
            if (index === 0) {
                answer.style.display = "block";
            }
            answer.style.display = "none";
        });

        // 현재 클릭한 질문에 해당하는 답변 보이기
        allAnswers[index].style.display = "block";
    });
});

const lis = document.querySelectorAll("#faqList li");
lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        if (e.target.classList.contains("question")) {
            lis.forEach((e) => {
                e.classList.remove("selected");
            });
            li.classList.add("selected");
        }
    });
});
