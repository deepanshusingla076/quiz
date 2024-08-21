const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Who is the US president?", options: ["Bush", "Obama", "Trump", "Biden"], answer: "Biden" },
    { question: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi" },
    { question: "What is the capital of Japan?", options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"], answer: "Tokyo" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    { question: "What is the capital of Brazil?", options: ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador"], answer: "Brasilia" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
    { question: "What is the capital of China?", options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"], answer: "Beijing" },
    { question: "What is the capital of Germany?", options: ["Munich", "Hamburg", "Berlin", "Frankfurt"], answer: "Berlin" }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const timerDuration = 30;

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');
const feedbackContainer = document.getElementById('feedback-container');
const timerContainer = document.getElementById('timer');

function loadQuestion() {
    const { question, options } = quizData[currentQuestionIndex];
    questionContainer.textContent = question;
    optionsContainer.innerHTML = options.map(option => 
        `<div class="option">${option}</div>`
    ).join('');
    document.querySelectorAll('.option').forEach(optionElement => 
        optionElement.addEventListener('click', () => selectOption(optionElement.textContent))
    );
}

function selectOption(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
        feedbackContainer.textContent = 'Correct!';
    } else {
        feedbackContainer.textContent = 'Incorrect!';
    }
    submitButton.disabled = false;
}

function startTimer() {
    let timerValue = timerDuration;
    timerContainer.textContent = `Time left: ${timerValue} seconds`;
    timer = setInterval(() => {
        timerValue--;
        timerContainer.textContent = `Time left: ${timerValue} seconds`;
        if (timerValue <= 0) {
            clearInterval(timer);
            handleQuestionTransition();
        }
    }, 1000);
}

function handleQuestionTransition() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        feedbackContainer.textContent = '';
        submitButton.disabled = true;
        startTimer();
    } else {
        clearInterval(timer);
        localStorage.setItem('quizScore', score);
        window.location.href = 'results.html';
    }
}

submitButton.addEventListener('click', handleQuestionTransition);
resetButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    feedbackContainer.textContent = '';
    submitButton.disabled = false;
    loadQuestion();
    startTimer();
});

loadQuestion();
startTimer();
