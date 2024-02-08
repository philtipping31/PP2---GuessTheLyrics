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
            { text: "Sunabathe", correct: false },
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

    



];



const questionElement = document.getElementById("lyrics");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let score = 0;
let timerMinutes = 0;
let timerSeconds = 0;
let timerInterval;


/* Variable so questions are shuffled so different question is displayed each time you play */
let shuffledQuestions, currentQuestionIndex;



/**
 *  Starts the Quiz
 * Sets the question index to first question
 * Starts the score as 0 and display the Next question button */

function startQuiz() {
    currentQuestionIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    startTimer();
}

/** 
 * Gets question (lyrics) data from js file
 * Populates the question and the answer boxes
*/

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

/**
 * Hides next button when question is initially displayed
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

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const correct = document.querySelector("[data-correct='true']");

    if (isCorrect) {
        selectedBtn.style.backgroundColor = "green";
        score++;
    } else {
        selectedBtn.style.backgroundColor = "red";
        correct.style.backgroundColor = "green";
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

//Function to start the timer. Timer updates per second on quiz
function startTimer() {
    timerInterval = setInterval(function () {
        if (timerSeconds === 59) {
            //If seconds reach to 59, increment minutes and reset seconds to 0
            timerMinutes++;
            timerSeconds = 0;
        } else {
            //Increment seconds
            timerSeconds++;
        }
        //Format the timer displayed
        const formattedMinutes = timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes;
        const formattedSeconds = timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds;
        document.getElementById("timer").textContent = `${formattedMinutes}:${formattedSeconds}`;
    }, 1000);
}

/**
 * Shows score at then end of the quiz
 * Updates question element with total score
 * Allows user to play again by display the Play Again button*/

function showFinalScore() {
    // Stop the timer
    clearInterval(timerInterval);
    document.getElementById("timer-container").style.display = "none";
    resetState();
    if (score === 10) {
        questionElement.innerHTML = `Well done for completing the lyrics quiz! You're a lyrical genius'! <p>You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs. </p>
    <p>Want to try again? Just click Play Again to retry the quiz. </p>
    <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    } else if (score > 6) {
        questionElement.innerHTML = `Well done for completing the lyrics quiz! You did pretty well! <p>You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs.. </p>
    <p>Want to try again? Just click Play Again to retry the quiz. </p>
    <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    } else if (score > 4) {
        questionElement.innerHTML = `You've completed the lyrics quiz! You did okay! <p>You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs.. </p>
    <p>Want to try again? Just click Play Again to retry the quiz. </p>
    <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    } else if (score > 2) {
        questionElement.innerHTML = `You've completed the lyrics quiz! That was a pretty poor attempt! < p > You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs.. </p >
    <p>Want to try again? Just click Play Again to retry the quiz. </p>
    <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    } else if (score > 0) {
        questionElement.innerHTML = `You've completed the lyrics quiz! You Failed! <p>You scored ${score} out of 10 questions correctly in ${timerMinutes} mins : ${timerSeconds} secs.. </p>
    <p>Want to try again? Just click Play Again to retry the quiz. </p>
    <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    } else {
        questionElement.innerHTML = `Something strange has happened here. <p>Want to try again? Just click Play Again to retry the quiz. </p>
    <button class="play-btn" onclick="location.reload()">Play Again!</button>`;
    }
}

/**
 * Increases question index if less than question total
 * If end of question index shows final score page
 */

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        showQuestion();
    } else {
        showFinalScore();
    }
}


// Add click event to handle question or start quiz
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < 10) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Starts quiz

startQuiz();