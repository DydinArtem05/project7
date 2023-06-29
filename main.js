const generateButton = document.querySelector("#generate-quote");
const quoteField = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");

// object which contain quotes text, authors info and keys are authors info
const quotes = {
    " Oscar Wilde": "Be yourself; everyone else is already taken.",
    " Marilyn Monroe": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    " Albert Einstein":"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    " Frank Zappa":"So many books, so little time.",
    " Marcus Tullius Cicero":"A room without books is like a body without a soul.",
    " Bernard M. Baruch":"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    " William W. Purkey":"You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    " Dr. Seuss":"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    " Mae West":"You only live once, but if you do it right, once is enough.",
    " Mahatma Gandhi":"Be the change that you wish to see in the world.",
    " Robert Frost":"In three words I can sum up everything I've learned about life: it goes on."
}

// function which generate random quote from object and put in html quote and quote author
function generateQuote() {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random()*authors.length)];
    quoteField.innerHTML = quotes[author];
    quoteAuthor.innerHTML = author
}


// listener which call generate function
generateButton.addEventListener("click", generateQuote);