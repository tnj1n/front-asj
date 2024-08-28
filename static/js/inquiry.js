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
