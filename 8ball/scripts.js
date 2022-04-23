let responses = [
    'It is certain.',
    'It is decidely so.', 'Without a doubt.',
    'Yes definitely',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
];
let eightBall = document.getElementById('eight');
let answer = document.getElementById('answer');

// Generate random number between 2 ints 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Get random response 
function getResponse() {
    return responses[getRandomIntInclusive(0, responses.length-1)];
}

eightBall.addEventListener('click', () => {
    answer.innerText = getResponse();
})






