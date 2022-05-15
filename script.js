
const qouteContainer=document.getElementById('quote-container');
const qouteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterbtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('next-quote');
const loader=document.getElementById('loader');

let apiQuotes = [];

 function newquote() 
 {
     loading();
     const quote =apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
   
 // Author is not known
 if(!quote.author)
 {
authorText.textContent='Anonymous';
 }
 else{
    authorText.textContent=quote.author;

 }
 // qoute length is greater
 if(quote.text.length>120)
 {
     qouteText.classList.add('long-quote');
 }
 else
 {
    qouteText.classList.remove('long-quote');

 }
 qouteText.textContent=quote.text;
 complete();
}


//Get Qoutes From API
async function getQuote()
{
    loading();
    const apiUrl='https://type.fit/api/quotes';
    try{
        const response= await fetch(apiUrl);
        apiQuotes=await response.json();
        newquote();
    }
    catch(error)
    {
console.log("hehehe");
    }
   
}


// Tweet a quote
function tweetquote()
{
    const twiiterUrl =`https://twitter.com/intent/tweet?text=${qouteText.textContent} - ${authorText.textContent}`;
    window.open(twiiterUrl, '_blank') //Twiiter to open in new tab

}
// Event listener
newQuoteBtn.addEventListener('click', newquote);
twitterbtn.addEventListener('click', tweetquote);


//  Loader
function loading()
{
    loader.hidden=false;
    qouteContainer.hidden=true;
}
function complete()
{
    loader.hidden=true;
    qouteContainer.hidden=false;
}

getQuote();
