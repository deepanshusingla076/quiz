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

document.addEventListener('DOMContentLoaded', () => {
    const scoreMessage = document.getElementById('score-message');
    const score = localStorage.getItem('quizScore');
    if (score !== null) {
        scoreMessage.textContent = `Your score is ${score}/${quizData.length}.`;
    } else {
        scoreMessage.textContent = 'No score available.';
    }
    localStorage.removeItem('quizScore');
});
