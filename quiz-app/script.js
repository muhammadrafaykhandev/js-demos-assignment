const questionsData = [
    {
        question: "JavaScript mein closures kya hotay hain?",
        options: [
            "Functions jo outer scope variables ko access kar sakay",
            "CSS style properties",
            "HTML elements"
        ],
        answer: 0
    },
    {
        question: "Promises ka primary function kya hai?",
        options: [
            "Styling elements",
            "Asynchronous operations handle karna",
            "Database create karna"
        ],
        answer: 1
    }
];

function fetchQuizQuestions() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(questionsData), 1000);
    });
}

function renderQuiz(questions) {
    const quizContainer = document.getElementById('quiz-container');
    const loadingDiv = document.getElementById('loading');
    
    if (loadingDiv) loadingDiv.style.display = 'none';
    quizContainer.innerHTML = '';

    questions.forEach((q, qIndex) => {
        const qBlock = document.createElement('div');
        qBlock.className = 'question-block';

        const qTitle = document.createElement('p');
        qTitle.innerHTML = `<strong>Q${qIndex + 1}: ${q.question}</strong>`;
        qBlock.appendChild(qTitle);

        const feedback = document.createElement('div');
        feedback.className = 'feedback-msg';
        feedback.style.marginTop = '8px';
        feedback.style.fontWeight = 'bold';
        feedback.style.fontSize = '13px';

        q.options.forEach((option, optIndex) => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.innerText = option;

            btn.onclick = () => {
                // Option click validation without browser alert
                if (optIndex === q.answer) {
                    btn.style.backgroundColor = '#d4edda';
                    btn.style.borderColor = '#28a745';
                    btn.style.color = '#155724';
                    feedback.style.color = '#28a745';
                    feedback.innerText = 'Correct Answer! ✓';
                } else {
                    btn.style.backgroundColor = '#f8d7da';
                    btn.style.borderColor = '#dc3545';
                    btn.style.color = '#721c24';
                    feedback.style.color = '#dc3545';
                    feedback.innerText = 'Incorrect Answer! ✗';
                }
            };

            qBlock.appendChild(btn);
        });

        qBlock.appendChild(feedback);
        quizContainer.appendChild(qBlock);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchQuizQuestions().then(data => renderQuiz(data));
});