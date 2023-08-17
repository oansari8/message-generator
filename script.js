const mood = ['Happy', 'Sad', 'Angry', 'Excited', 'Tired', 'Annoyed'];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const happyQuotes = ["Joy is not in things, it is in us.", "The way I see it, if you want the rainbow, you gotta put up with the rain!", "We don't make mistakes, just happy little accidents.", "Think of all the beauty still left around you and be happy."];

const motivationalQuotes = ["Nothing is impossible. The word itself says 'I'm possible!.'", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "You define your own life. Don't let other people write your script.", "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on." ];

const funnyQuotes =["Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.", "Anybody who tells you money can't buy happiness never had any.", "The best way to appreciate your job is to imagine yourself without one.", "My tastes are simple: I am easily satisfied with the best."];

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
const randNumWD = Math.floor(Math.random() * 2);

const weekends = ['Friday', 'Saturday', 'Sunday'];
const randNumWE = Math.floor(Math.random() * 2) + 2;

const randMessage = (mood, day) => {
    if (weekdays.includes(day) && (mood === 'Happy' || mood === 'Excited')) {
        console.log(`You are feeling ${mood} today. Today is ${day} and your quote for the day is: ${funnyQuotes[randNumWD]}`);
    } else if (weekdays.includes(day) && (mood === 'Sad' || mood === 'Tired')) {
        console.log(`You are feeling ${mood} today. Today is ${day} and your quote for the day is: ${motivationalQuotes[randNumWD]}`);
    } else if (weekdays.includes(day) && (mood === 'Angry' || mood === 'Annoyed')) {
        console.log(`You are feeling ${mood} today. Today is ${day} and your quote for the day is: ${happyQuotes[randNumWD]}`);
    } else if (weekends.includes(day) && (mood === 'Happy' || mood === 'Excited')) {
        console.log(`You are feeling ${mood} today. Today is ${day} and your quote for the day is: ${funnyQuotes[randNumWE]}`);
    } else if (weekends.includes(day) && (mood === 'Sad' || mood === 'Tired')) {
        console.log(`You are feeling ${mood} today. Today is ${day} and your quote for the day is: ${motivationalQuotes[randNumWE]}`);
    } else if (weekends.includes(day) && (mood === 'Angry' || mood === 'Annoyed')) {
        console.log(`You are feeling ${mood} today. Today is ${day} and your quote for the day is: ${happyQuotes[randNumWE]}`);
};
};

randMessage('Sad', 'Sunday');
