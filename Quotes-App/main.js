//Generate an array of quotes with their writers
var quotes = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall", writer: "Nelson Mandela" },
    { quote: "The only way to do great work is to love what you do.", writer: "Steve Jobs" },
    { quote: "In the end, it's not the years in your life that count. It's the life in your years.", writer: "Abraham Lincoln" },
    { quote: "Believe you can and you're halfway there.", writer: "Theodore Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", writer: "Winston Churchill" }
];
var lastIndex = -1; // Variable to store the current index
function generateQuote() { // a function to generate the quotes
    var randomIndex; //Variable to store the ranodm next index
    do {  // Generate the first index without any conditions
        randomIndex = Math.floor(Math.random() * quotes.length);
    } 
    while (randomIndex === lastIndex); // Generate a new random index that is different from the current index
    var randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerHTML = randomQuote.quote;
    document.getElementById('writer').innerHTML = randomQuote.writer;

    lastIndex = randomIndex; // Set the  last index to the current index
}
