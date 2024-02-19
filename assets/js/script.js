/* Base code structure taken from https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack
* Following code credited:
* startQuiz function, however shufflequestions section added and the call to start the timer function.
* selectAnswer function, this was used but refactored and used in a slightly different way to assign the colours to the answer buttons without adding classes.
* nextbutton event listener code, changed to only factor in 10 questions.
* handleNextButton, however I changed the setup of this code to deal with 10 questions and use of const to define MaxQuestions.
* resetState function taken from youtube video.
 */


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
    const currentQuestionNumber = document.getElementById("question-no");
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    let nextQuestionNumber = currentQuestionIndex + 1;
    currentQuestionNumber.innerText = "Question " + nextQuestionNumber;

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
    clearInterval(timerInterval);
    document.getElementById("timer-container").style.display = "none";
    document.getElementById("question-no").style.display = "none";
    resetState();

    let message = "";
    if (score === 10) {
        message = `Well done for completing the lyrics quiz! <p>You're a lyrical genius!</p>`;
    } else if (score > 6) {
        message = `Well done for completing the lyrics quiz! <p>You did pretty well!</p>`;
    } else if (score > 4) {
        message = `You've completed the lyrics quiz! <p>You did okay!</p>`;
    } else if (score > 0) {
        message = `You've completed the lyrics quiz! <p>That was a pretty poor attempt!</p>`;
    } else if (score === 0) {
        message = `You've completed the lyrics quiz! <p>You Failed!</p>`;
    } else {
        message = `Something strange has happened here.`;
    }

    const scoreMessage = `<p>You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs.</p>
        <p>Want to try again? Just click Play Again to retry the quiz.</p>
        <button id="play-btn" onclick="location.reload()">Play Again!</button>`;

    questionElement.innerHTML = `${message} ${scoreMessage}`;
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