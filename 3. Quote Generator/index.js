const quotes = [
    "When your path seems to easy, your not on the right path",
    "Haste makes waste, this saying has been around for centuries" ,
    "Heroes always appear late. But don't forget, people who fight till the moment the hero appears are also heroes" ,
    "No matter how deep the night goes it always turns to day, eventually",
    "Whatever you lose, you'll find it again, but what you throw away you'll never get it back",
    "You can't have everything. Where would you put it?",
    "The sun is a daily reminder that we too can rise again from the darkness, that we too can shine our own light",
    "If plan A didn't work. The alphabet has 25 more letters",
    "One day or day one. You decide",
    "He who climbs the ladder must begin at the bottom" 
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break
    }
}