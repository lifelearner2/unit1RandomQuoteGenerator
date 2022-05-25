/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = 
  [ { quote: `Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.`, 
      source: `Earl Nightingale`, 
      citation: `https://www.shopify.com/blog/motivational-quotes `,
      year: `unknown` },

     {quote: `Out of the mountain of despair, a stone of hope`,
      source: `Martin Luther King Jr.`,
      citation: `I Have A Dream" speech in Washington, DC`,
      year: `1963`},

      {quote: `Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.`,
      source: `Martin Luther King Jr.`,
      citation: `Strength to Love book`,
      year: `1963`},

      {quote: `Education is the most powerful weapon we can use to change the world.`,
      source: `Nelson Mandela`,
      citation: `Speech in South Africa`,
      year: `2003`},

      {quote: `You can't be that kid standing at the top of the waterslide, overthinking it. You have to go down the chute.`,
      source: `Tina Fey`,
      citation: `Bossy Pants book`,
      year: `2011`},

      {quote: `I didn't come this far to only come this far`,
      source: `Tom Brady`,
      citation: `Playoff Speech`,
      year: `2016`},

      {quote: `A journey of a thousand miles begins with a single step`,
      source: `Lao Tzu`,
      citation: `Chapter 64 of Tao Te Ching book`,
      year: `400 BC`},

      {quote: `Difficult roads often lead to beautiful destinations.`,
      source: `Zig Ziglar`,
      citation: `Unknown`,
      year: `Unknown`}];



/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  //console.log(randomQuote);
  //console.log(randomNumber);
  return randomQuote;
 
};

getRandomQuote();

/***
 * `printQuote` function
***/

 function printQuote() {
  let randomized = getRandomQuote();

let htmlString = `<p class="quote"> ${randomized.quote} </p>
<p class="source"> ${randomized.source} `

if (randomized.citation) {
  htmlString += `<span class="citation"> ${randomized.citation}  </span>` 

};

if (randomized.year) {
  htmlString += `<span class="year"> ${randomized.year}  </span>`

};
htmlString += `</p>`;


document.getElementById("quote-box").innerHTML = htmlString;

 }



// /***
//  * click event listener for the print quote button
//  * DO NOT CHANGE THE CODE BELOW!!
// ***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);