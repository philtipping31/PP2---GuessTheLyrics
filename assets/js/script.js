/* Base code structure taken from https://www.youtube.com/watch?v=PBcqGxrr9g8&ab_channel=GreatStack */

/* lyrics and answers content */


const questions = [
    {
        question: "Somebody once told me the world was gonna roll me, I ain't the ________ tool in the shed.",
        answers: [
            { text: "Best", correct: false },
            { text: "Sharpest", correct: true },
            { text: "Rusty", correct: false },
            { text: "Oldest", correct: false },
        ]
    },

    {
        question: "He was a boy, she was a girl, can I make it any more obvious? He was a ________, she did ballet what more can I say?",
        answers: [
            { text: "Square", correct: false },
            { text: "Hunk", correct: false },
            { text: "Coder", correct: false },
            { text: "Punk", correct: true },
        ]
    },

    {
        question: "Cos i'm just a ________, dirtbag baby like you",
        answers: [
            { text: "Smelly", correct: false },
            { text: "Gorgeous", correct: false },
            { text: "Teenage", correct: true },
            { text: "Retired", correct: false },
        ]
    },

    {
        question: "Today I don't feel like doing ________ ",
        answers: [
            { text: "Anything", correct: true },
            { text: "Work", correct: false },
            { text: "The housework", correct: false },
            { text: "Maths", correct: false },
        ]
    },

    {
        question: "Since you been gone, I can ________ for the first time",
        answers: [
            { text: "Sleep", correct: false },
            { text: "Run", correct: false },
            { text: "Breathe", correct: true },
            { text: "Crawl", correct: false },
        ]
    },

    {
        question: "You shoot me down, but I won't fall, I am ________",
        answers: [
            { text: "Invinsible", correct: false },
            { text: "Titanium", correct: true },
            { text: "The Terminator", correct: false },
            { text: "Strong", correct: false },
        ]
    },

    {
        question: "Jealousy, turning saints into the sea, swimming through sick lullabies, choking on your ________",
        answers: [
            { text: "Alibis", correct: true },
            { text: "Dinner", correct: false },
            { text: "Words", correct: false },
            { text: "Own", correct: false },
        ]
    },

    {
        question: "So I'll start a revolution from my bed, cause you said the ________ I had went to my head",
        answers: [
            { text: "Drink", correct: false },
            { text: "Brains", correct: true },
            { text: "Stars", correct: false },
            { text: "None of these", correct: false },
        ]
    },

    {
        question: "I want a brand new house on an episode of Cribs and a bathroom I can ________ in ",
        answers: [
            { text: "Sunbathe", correct: false },
            { text: "Eat lunch", correct: false },
            { text: "Play football", correct: false },
            { text: "Play baseball", correct: true },
        ]
    },

    {
        question: "Today is gonna be the day that they're gonna ________ it back to you",
        answers: [
            { text: "Give", correct: false },
            { text: "Fire", correct: false },
            { text: "Throw", correct: true },
            { text: "Drop", correct: false },
        ]
    },

    {
        question: "A long, long time ago, I can still remember how that music used to make me________  ",
        answers: [
            { text: "Cry", correct: false },
            { text: "Smile", correct: true },
            { text: "Happy", correct: false },
            { text: "Excited", correct: false },
        ]
    },

    {
        question: "I'm not the man they think I am at home, Oh, no, no, no. I'm a ________ man",
        answers: [
            { text: "Rocket", correct: true },
            { text: "Lonely", correct: false },
            { text: "Happy", correct: false },
            { text: "Scary", correct: false },
        ]
    },

    {
        question: "Sometimes I feel like ________ my hands up in the air ",
        answers: [
            { text: "Waving", correct: false },
            { text: "Chucking", correct: false },
            { text: "Putting", correct: false },
            { text: "Throwing", correct: true },
        ]
    },

    {
        question: "We get it almost every night, When the ________ is big and bright",
        answers: [
            { text: "Moon", correct: true },
            { text: "Stars", correct: false },
            { text: "Sun", correct: false },
            { text: "Lampshade", correct: false },
        ]
    },

    {
        question: "I set fire to the rain, watched it ________ as it touched your face",
        answers: [
            { text: "Pour", correct: true },
            { text: "Fall", correct: false },
            { text: "Burn", correct: false },
            { text: "None of these", correct: false },
        ]
    },

    {
        question: "I'm on the pursuit of happiness and I know, everything that shine ain't always gunna be ________",
        answers: [
            { text: "Mine", correct: false },
            { text: "Yours", correct: false },
            { text: "Shiny", correct: false },
            { text: "Gold", correct: true },
        ]
    },

    {
        question: "Feels like we're on the edge right now, I wish I could say i'm ________",
        answers: [
            { text: "Done", correct: false },
            { text: "Happy", correct: false },
            { text: "Proud", correct: true },
            { text: "Sad", correct: false },
        ]
    },

    {
        question: "It's murder on the dancefloor, but you better not kill the ________",
        answers: [
            { text: "Music", correct: false },
            { text: "Dancers", correct: false },
            { text: "Speakers", correct: false },
            { text: "Groove", correct: true },
        ]
    },

       {
           question: "Now it's raining more than ever, know we'll still have ________",
        answers: [
            { text: "Some Cover", correct: false },
            { text: "Each other", correct: true },
            { text: "Some Umberellas", correct: false },
            { text: "None of these", correct: false },
        ]
    },

       {
        question: "We were just ________ when we fell in love",
        answers: [
            { text: "Kids", correct: true },
            { text: "Small", correct: false },
            { text: "Old", correct: false },
            { text: "At school", correct: false },
        ]
    },

    {
        question: "You got a fast car and I want a ticket to ________",
        answers: [
            { text: "Everywhere", correct: false },
            { text: "Your house", correct: false },
            { text: "Somewhere", correct: false },
            { text: "Anywhere", correct: true },
        ]
    },

    {
        question: "As I walk through the valley of the shadow of ________",
        answers: [
            { text: "Death", correct: true },
            { text: "You", correct: false },
            { text: "Mine", correct: false },
            { text: "Life", correct: false },
        ]
    },

    {
        question: "That's me in the corner, that's me in the ________",
        answers: [
            { text: "Hallway", correct: false },
            { text: "Doorway", correct: false },
            { text: "Spotlight", correct: true },
            { text: "Hot seat", correct: false },
        ]
    },

];


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