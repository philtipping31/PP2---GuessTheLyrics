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

    {
        question: "And through it all she offers me ________",
        answers: [
            { text: "Perception", correct: false },
            { text: "Protection", correct: true },
            { text: "Affection", correct: false },
            { text: "Money", correct: false },
        ]
    },

    {
        question: "They paved paradise and put up a ________",
        answers: [
            { text: "Huge house", correct: false },
            { text: "Car park", correct: false },
            { text: "Parking Lot", correct: true },
            { text: "Garages", correct: false },
        ]
    },

    {
        question: "Black velvet and that slow ________ style",
        answers: [
            { text: "Cowboy", correct: false },
            { text: "Northern", correct: false },
            { text: "Western", correct: false },
            { text: "Southern", correct: true },
        ]
    },

    {
        question: "My hearts in overdrive and you're behind the ________",
        answers: [
            { text: "Steering wheel", correct: true },
            { text: "Controller", correct: false },
            { text: "Rhythmn", correct: false },
            { text: "Mask", correct: false },
        ]
    },

    {
        question: "I could stay awake just to hear you ________",
        answers: [
            { text: "Sleeping", correct: false },
            { text: "Snoring", correct: false },
            { text: "Breathing", correct: true },
            { text: "Talking", correct: false },
        ]
    },

    {
        question: "I'm going in for the kill, i'm doing it for the ________",
        answers: [
            { text: "Bill", correct: false },
            { text: "Police", correct: false },
            { text: "Chill", correct: false },
            { text: "Thrill", correct: true },
        ]
    },

    {
        question: "What you know about rollin' down in the ________",
        answers: [
            { text: "Deep", correct: true },
            { text: "Streets", correct: false },
            { text: "Beat", correct: false },
            { text: "Creeps", correct: false },
        ]
    },

    {
        question: "Tell me something, girl. Are you happy in this ________ world",
        answers: [
            { text: "Modern", correct: true },
            { text: "Broken", correct: false },
            { text: "Faulty", correct: false },
            { text: "Cold", correct: false },
        ]
    },

    {
        question: "Wake me up when it's all ________",
        answers: [
            { text: "Done", correct: false },
            { text: "Finished", correct: false },
            { text: "Started", correct: false },
            { text: "Over", correct: true },
        ]
    },

    {
        question: "Hello darkness my old friend, i've come to ________ with you again",
        answers: [
            { text: "Walk", correct: false },
            { text: "Talk", correct: true },
            { text: "Chat", correct: false },
            { text: "Run", correct: false },
        ]
    },

    {
        question: "Look at you in that ________ Girl you dangerous like a gun ",
        answers: [
            { text: "Shirt", correct: false },
            { text: "Dress", correct: true },
            { text: "Car", correct: false },
            { text: "Shop", correct: false },
        ]
    },

    {
        question: "Something in the orange tells me we're not ________ ",
        answers: [
            { text: "Finished", correct: false },
            { text: "Completed", correct: false },
            { text: "Done", correct: true },
            { text: "Over", correct: false },
        ]
    },

    {
        question: "It was 1989, my thoughts were short my hair was ________ ",
        answers: [
            { text: "Long", correct: true },
            { text: "Gone", correct: false },
            { text: "Blonde", correct: false },
            { text: "Wet", correct: false },
        ]
    },

    {
        question: "I come and I go, tell me all the ways you need ________ ",
        answers: [
            { text: "Sleep", correct: false },
            { text: "Me", correct: true },
            { text: "A drive", correct: false },
            { text: "Food", correct: false },
        ]
    },

    {
        question: "Well she moves like lightening and she counts to ________ ",
        answers: [
            { text: "One", correct: false },
            { text: "Two", correct: false },
            { text: "Three", correct: true },
            { text: "Four", correct: false },
        ]
    },

    {
        question: "I have this thing where I get older but just never ________ ",
        answers: [
            { text: "Smaller", correct: false },
            { text: "Wiser", correct: true },
            { text: "Taller", correct: false },
            { text: "Younger", correct: false },
        ]
    },

    {
        question: "Ooh girl, you're shining, like a 5th avenue ________ ",
        answers: [
            { text: "Road Sign", correct: false },
            { text: "Sidewalk", correct: false },
            { text: "Diamond", correct: true },
            { text: "Street Lamp", correct: false },
        ]
    },

];