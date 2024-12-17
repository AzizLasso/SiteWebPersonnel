const questions = [
    {
        question: "Who won the 2018 FIFA World Cup?",
        options: ["France", "Brazil", "Germany", "Italy"],
        correctAnswer: "France"
    },
    {
        question: "Quel est le langage de programmation utilisé pour les pages web?",
        options: ["Java", "Python", "HTML"],
        correctAnswer: "HTML"
    },
    {
        question: "Quel langage est principalement utilisé pour le développement côté serveur?",
        options: ["Contrôler le comportement côté serveur", "Python", "PHP"],
        correctAnswer: "PHP"
    },
    {
        question: "Which country is known as the birthplace of football?",
        options: ["Brazil", "England", "Germany", "Italy"],
        correctAnswer: "England"
    },
    {
        question: "Quel est le langage de balisage utilisé pour structurer le contenu des pages web?",
        options: ["JavaScript", "CSS", "HTML"],
        correctAnswer: "HTML"
    },
    {
        question: "Quel langage est souvent utilisé pour ajouter du style et de la mise en page aux pages web?",
        options: ["JavaScript", "CSS", "HTML"],
        correctAnswer: "CSS"
    },
    {
        question: "How many players are on a football team?",
        options: ["9", "10", "11", "12"],
        correctAnswer: "11"
    },
    {
        question: "Quel terme est utilisé pour décrire un petit programme qui résout une tâche spécifique?",
        options: ["Widget", "Snippet", "Script"],
        correctAnswer: "Script"
    },
    {
        question: "Which player is known as 'CR7'?",
        options: ["Messi", "Ronaldo", "Neymar", "Pele"],
        correctAnswer: "Ronaldo"
    },
    {
        question: "Quel langage de programmation est souvent utilisé pour le développement de jeux vidéo?",
        options: ["Python", "Java", "C++"],
        correctAnswer: "C++"
    },
    {
        question: "Which German car manufacturer produces the 911 model?",
        options: ["BMW", "Audi", "Porsche", "Mercedes"],
        correctAnswer: "Porsche"
    },
    {
        question: "What does the 'M' in BMW M Series stand for?",
        options: ["Motor", "Model", "Modified", "Max"],
        correctAnswer: "Motor"
    },
    {
        question: "What is the performance division of Mercedes-Benz called?",
        options: ["AMG", "RS", "M", "SRT"],
        correctAnswer: "AMG"
    },
    {
        question: "What is the fastest fighter jet in the world?",
        options: ["F-22", "MiG-25", "F-16", "Eurofighter"],
        correctAnswer: "MiG-25"
    },
    {
        question: "Which country developed the F-35 Lightning II?",
        options: ["USA", "Russia", "China", "UK"],
        correctAnswer: "USA"
    },
    {
        question: "What is the primary role of a fighter jet?",
        options: ["Transport", "Reconnaissance", "Combat", "Training"],
        correctAnswer: "Combat"
    },
    {
        question: "Which fighter jet is known as the 'Raptor'?",
        options: ["F-22", "F-35", "Su-57", "Eurofighter"],
        correctAnswer: "F-22"
    },
    {
        question: "What is the main advantage of stealth technology in fighter jets?",
        options: ["Speed", "Maneuverability", "Low visibility", "Armament"],
        correctAnswer: "Low visibility"
    },
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const submitButton = document.getElementById("submit-button");
let score = 0;
let userAnswers = []; // Array to store user's answers

function generateQuiz() {
    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach((option, optionIndex) => {
            const optionButton = document.createElement("button");
            optionButton.innerHTML = option;
            optionButton.classList.add("option-button");
            optionButton.addEventListener("click", () => toggleAnswer(index, optionIndex, optionButton));
            questionElement.appendChild(optionButton);
        });

        quizContainer.appendChild(questionElement);
    });
    submitButton.style.display = "block"; // Show the submit button after generating the quiz
}

function toggleAnswer(questionIndex, optionIndex, optionButton) {
    const selectedOption = questions[questionIndex].options[optionIndex];
    const correctAnswer = questions[questionIndex].correctAnswer;

    // Check if the button is already selected
    if (optionButton.classList.contains("selected")) {
        // If it is selected, unselect it
        optionButton.classList.remove("selected");
        // Decrease score if the answer was correct
        if (selectedOption === correctAnswer) {
            score--;
        }
        // Remove the user's answer
        userAnswers[questionIndex] = null;
    } else {
        // If it is not selected, select it
        optionButton.classList.add("selected");
        // Increase score if the answer is correct
        if (selectedOption === correctAnswer) {
            score++;
        }
        // Store the user's answer
        userAnswers[questionIndex] = selectedOption;
    }
}

submitButton.addEventListener("click", showResult);

function showResult() {
    quizContainer.style.display = "none"; // Hide the quiz container
    let resultHTML = `<p>Votre score est ${score} sur ${questions.length} questions.</p>`;
    
    // Show correct answers for wrong responses
    questions.forEach((q, index) => {
        resultHTML += `
            <div class="result-question">
                <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
                <p><strong>Votre réponse:</strong> ${userAnswers[index] || 'Aucune réponse'}</p>
                <p><strong>Réponse correcte:</strong> <span class="correct-answer">${q.correctAnswer}</span></p>
            </div>
        `;
    });

    resultContainer.innerHTML = resultHTML;
    resultContainer.style.display = "block"; // Show the result container
}

// Call the function to generate the quiz
generateQuiz();