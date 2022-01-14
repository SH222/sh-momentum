const quotes = [
  {
    quote: "He who does not hope to win has already lost.",
    author: "Jose joaquin Olmedo",
  },
  {
    quote:
      "Art produces ugly things which frequently become beautiful with him.",
    author: "Jean cocteau",
  },
  {
    quote: "I met a lot of people in Europe, I even encountered myself.",
    author: "James Baldwin",
  },
  {
    quote: "The richest peach is highest on the tree.",
    author: "James Whitcomb Riley",
  },
  {
    quote: "3 O'clock is always too early for anything you want to do.",
    author: "Jean-Paul Sartre",
  },
  {
    quote:
      "Once you say you're going to settle for second, that's what happens to you in life, I find.",
    author: "John F.Kennedy",
  },
  {
    quote:
      "We're more popular than Jesus now. I don't know which will go first-rock 'n' roll or Christianity.",
    author: "John Lennon",
  },
  {
    quote: "Nothing is more despicable than respect based on fear.",
    author: "Albert camus",
  },
  {
    quote:
      "Action may not always bring happiness but there is no happiness without action.",
    author: "Benjamin Disraeli",
  },
  {
    quote:
      "If you can give your son or daughter only one gift, let it be enthusiam.",
    author: "Bruce Barton",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `  - ${todaysQuote.author}`;
