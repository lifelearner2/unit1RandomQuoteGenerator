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


// console.log( quotes.quote )
// console.log( quotes.source )
// console.log( quotes.citation )
// console.log( quotes.year )


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



  
/***
 * `printQuote` function
***/

 function printQuote() {
  let randomized = getRandomQuote();
//console.log(randomized);
document.getElementById("quote-box").innerHTML = 

`<h1>
${randomized.quote +  
  randomized.source + 
  randomized.citation + 
  randomized.year

}</h1>`;

return randomized;

 }
 

//  var document
// let html = `
// <p class= "quote"> randomQuote.quote </p>
// <  class= "source"> randomQuote.source
//   <span class= "citation"> randomQuote.citation </span>
//  <  class= "year"> randomQuote.year` 
   
//    if (quotes.quote = quotes.citation) + (quotes.quote = quotes.year) () ; 
   
  
//    {
//       quotes.innerHTML = html 
//       document.getElementById('quote-box').innerHTML = html + quotes[randomQuote];
   
//    }
   
   
// //keeps printing out "object object object in place of quote"
   
//    //{
//     //randomQuote.innerHTML = true;

//    //}

  

   
    

//  //</p>
 

// //  let myQuotes = 
// //  <p>
// // class = "quotes" + randomQuote.quote 
// // class = "source" + randomQuote.source
// // class = "citation" + randomQuote.citation
// // class = "year" + randomQuote.year 

// //  </p>

// //  quotes.quote + " " + quotes.source;
 
 
 
//  //document.getElementById('load-quote').addEventListener("click", printQuote, false);

// //  document.getElementById('load-quote').innerHTML =

// //  let htmlString =
// //   class_;"quote"; `Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.`
// //   class_;"source"; `Patrick McKenzie`
// //   class_; "citation"> Twitter
// //   class_;"year"> 2016


// /***
//  * click event listener for the print quote button
//  * DO NOT CHANGE THE CODE BELOW!!
// ***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);