const quotes = [
  "Try not. Do, or do not. There is no try. - Yoda",
    "The only way to do great work is to love what you do. If you haven't found it, keep looking. Don't settle. - Steve Jobs",
  "Keep smiling, because life is a beautiful thing and there's so much to smile about. - Marilyn Monroe",
]

const photos = [
  "https://picsum.photos/id/199/500/200",
  "https://picsum.photos/id/93/500/200",
  "https://picsum.photos/id/182/500/200",
]

function setQuote() {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  const randomPhoto = photos[randomIndex]
  const quoteParts = randomQuote.split(' - ');
  console.log(quoteParts)
  quote.innerHTML = quoteParts[0];
  author.innerHTML = `- ${quoteParts[1]}`;
  document.getElementById("image").src = randomPhoto;
}