/* Base code structure taken from https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack */

/* Global Variables */

const questionElement = document.getElementById("lyrics");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let score = 0;
let timerMinutes = 0;
let timerSeconds = 0;
let timerInterval;
/* Variable so questions are shuffled so different question order is displayed each time you play */
let shuffledQuestions, currentQuestionIndex;



/**
 *  Starts the Quiz
 * Sets the question index to first question
 * Starts the score as 0 and display the Next question button */

function startQuiz() {
    currentQuestionIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    startTimer();
}

/**
 * Displays the current question along with its answer options.
 * Resets the state before updating the next question.
 * Adds event listeners to each answer button for handling user interaction.
 */

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = createAnswerButton(answer.text, answer.correct);
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

/**
 * Creates an answer button with the specified text and additional attributes.
 * Adds the text to be displayed on the button.
 * Shows whether the answer is correct or not.
 * If answer is correct, the button will be marked as correct using a dataset attribute.
 * Returns the created answer button with the specified text and attributes.
 */
function createAnswerButton(text, isCorrect) {
    const button = document.createElement("button");
    button.innerHTML = text;
    button.classList.add("btn");

    if (isCorrect) {
        button.dataset.correct = isCorrect;
    }

    return button;
}

/**
 * Resets the state by hiding the next button and removing all answer buttons.
 * This function is called before displaying a new question.
 */

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/** 
 * Highlight correct answer Green and Incorrect answer red
 * Disable other buttons after selecting answer
 * Show Next button */

function selectAnswer(choice) {
    const selectedBtn = choice.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const correct = document.querySelector("[data-correct='true']");
    // Correct answer highlights in green if incorrect answer selected shows in red and shows correct in green
    if (isCorrect) {
        selectedBtn.style.backgroundColor = "green";
        score++;
    } else {
        selectedBtn.style.backgroundColor = "red";
        correct.style.backgroundColor = "green";
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
        }
        //Disables buttons from being used after intial selection
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

/**
 * Starts a timer interval to track elapsed time on the quiz.
 * The timer updates every second the user plays the quiz.
 * If seconds reach 59, minutes are incremented, and seconds are reset to 0.
 * The timer is displayed on the HTML element with the id "timer."
 */
function startTimer() {
    timerInterval = setInterval(function () {
        if (timerSeconds === 59) {
            timerMinutes++;
            timerSeconds = 0;
        } else {
            timerSeconds++;
        }
        const formattedMinutes = timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes;
        const formattedSeconds = timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds;
        document.getElementById("timer").textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
}

/**
 * Shows score at then end of the quiz with timer info.
 * Updates question element with total score based on amount of correct answers.
 * Allows user to play again by displaying the Play Again button*/

function showFinalScore() {
    // Stop the timer
    clearInterval(timerInterval);
    document.getElementById("timer-container").style.display = "none";
    resetState();
    if (score === 10) {
        questionElement.innerHTML = `Well done for completing the lyrics quiz! <p>You're a lyrical genius!</p> <p>You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs.</p> 
        <p>Want to try again? Just click Play Again to retry the quiz.</p>
        </br>
        <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    } else if (score > 6) {
        questionElement.innerHTML = `Well done for completing the lyrics quiz! <p>You did pretty well!</p> <p>You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs.</p>
        <p>Want to try again? Just click Play Again to retry the quiz.</p>
        </br>
        <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    } else if (score > 4) {
        questionElement.innerHTML = `You've completed the lyrics quiz! <p>You did okay!</p> <p>You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs.</p>
        <p>Want to try again? Just click Play Again to retry the quiz.</p>
        </br>
        <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    } else if (score > 0) {
        questionElement.innerHTML = `You've completed the lyrics quiz! <p>That was a pretty poor attempt!</p> <p>You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs.</p>
        <p>Want to try again? Just click Play Again to retry the quiz.</p>
        </br>
        <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    } else if (score == 0) {
        questionElement.innerHTML = `You've completed the lyrics quiz! <p>You Failed!</p> <p>You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs.</p>
        <p>Want to try again? Just click Play Again to retry the quiz.</p>
        </br>
        <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    } else {
        questionElement.innerHTML = `Something strange has happened here. <p>Want to try again? Just click Play Again to retry the quiz.</p>
        </br>
        <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    }
}

/**
 * Handles the logic for the "Next" button, incrementing the question index.
 * If there are more questions, it displays the next question; otherwise, it shows the final score.
 */
function handleNextButton() {
    //Increment question number
    currentQuestionIndex++;
    //Max questions shown is 10
    const maxQuestions = 10;

    if (currentQuestionIndex < maxQuestions) {
        showQuestion();
    } else {
        showFinalScore();
    }
}


// Add click event to handle next question if less than 10 or it will start quiz.

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < 10) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Starts quiz

startQuiz();