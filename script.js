//access the button and the answer field
const button = document.querySelector("#btn");
const par = document.querySelector("#par");

//creating the massive of quotes
const quotes = ["The expert in anything was once a beginner.", "Keep your face to the sunshine and you cannot see a shadow.", "Love takes action.",
"Don't look back - you're not going that way.", "What would you attempt to do if you knew you could not fail?", "Don't Trust Words. Trust Actions.", "Tell someone they matter.", "Change your thoughts and you change the world.", 
"It's difficult to follow your dream. It's a tragedy not to.", "Doing what you like is freedom. Liking what you do is happiness.", "Worry is a down payment on a problem you may never have.",
"Be thankful, even if your life is not perfect.", "Life does not have to be perfect to be wonderful.", "Do something today that your future self will thank you for.", 
"Believe in being strong when everything seems to be going wrong."];

//events listener
button.addEventListener("click", ()=> {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    //show on screen
    par.textContent = randomQuote;
    //delete empty frame option, as we put diplay=none in CSS
    par.style.display = "block";
    //empty the display with the quote to prompt the user to click for next one
    button.addEventListener("click", () =>{ 
 
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        par.style.display = "block"
        par.innerHTML = randomQuote;
       
         setTimeout(timer, 5000)
       
      })
       
      function timer()
      {
      par.style.display = "none"
      }
        });
