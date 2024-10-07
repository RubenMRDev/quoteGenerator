const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Whether you think you can or you think you can't, you're right. - Henry Ford",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "It is never too late to be what you might have been. - George Eliot",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Do one thing every day that scares you. - Eleanor Roosevelt",
    "Dream big and dare to fail. - Norman Vaughan",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
    "Act as if what you do makes a difference. It does. - William James",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
    "The best way to predict your future is to create it. - Abraham Lincoln"
];

function websiteLoad(){
    let randomNumber = Math.floor(Math.random()*30)
    document.getElementById("quoteText").innerHTML=quotes[randomNumber];
}