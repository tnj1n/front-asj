document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            // 모든 answer 요소를 숨김
            const allAnswers = document.querySelectorAll(".answer");
            const allQuestions = document.querySelectorAll(".question");

            allAnswers.forEach((answer) => {
                answer.style.display = "none";
            });

            // 모든 질문의 배경색 초기화
            allQuestions.forEach((q) => {
                q.style.color = "#94949a"; // 질문 배경색 초기화
            });

            // 클릭한 question에 해당하는 answer만 표시
            const answer = question.nextElementSibling;
            answer.style.display = "block";

            // 클릭한 question의 배경색 변경
            question.style.color = "#111"; // 원하는 색상으로 변경
        });
    });
});
