const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

const quotesArray = [
    {
        quote: `"A flower raised in a greenhouse is still beautiful, even though it knows no adversity. But a flower growing in the field that has braved wind, rain, cold, and heat possesses something more than just beauty."`,
        author: `Rena Ryūgū (Higurashi no Naku Koro ni)`
    },

    {
        quote: `"A farewell is like the other side of a coin. It will only happen when there is an encounter. Rather than dreading the day we have to part, shouldnt we be happy that we had the chance to meet today instead?”`,
        author: `Sakata Gintoki (Gintama)`
    },

    {
        quote: `"You should enjoy the little detours to the fullest. Because that's where you'll find the things more important than what you want."`,
        author: `Ging Freecss (Hunter x Hunter)`
    },

    {
        quote: `"Give up on your dreams and die"`,
        author: `Levi Ackerman (Attack on titan)`
    },

    {
        quote: `"If you've got time to fantasize about a beautiful ending, why not live beautifully until the end?"`,
        author: `Sakata Gintoki (Gintama)`
    },

    {
        quote: `"Talent is something you bloom, instinct is something you polish"`,
        author: `Oikawa (Haikyuu!!)`
    },

    {
        quote: `"Man always seem to think about their past before they die, as though he were frantically searching for proof that he truly lived.”`,
        author: `Jet (Cowboy Bebop)`
    },

    {
        quote: `"Religion, ideology, resources, land, spite, love or just because no matter how pathetic the reason, its enough to start war. War will never cease to exist… reasons can be thought up after the fact. Human nature pursues strife.”`,
        author: `Pain (Naruto)`
    },

    {
        quote: `“The loneliest people are the kindest. The saddest people smile the brightest. The most damaged people are the wisest. All because they dont wish to see anyone else suffer the way they did.”`,
        author: `Jellal Fernandes`
    },

    {
        quote: `"Never trust anyone too much; remember, the devil was once an angel"`,
        author: `Kaneki Ken (Tokyo Ghoul)`
    },

]

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotesArray.length);

    quote.innerText = quotesArray[random].quote;
    author.innerText = quotesArray[random].author;
})

