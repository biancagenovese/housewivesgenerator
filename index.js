const housewifeNames = ['Kyle', 'Ramona', 'Vicki', 'Luann', 'Sonja', 'Ashley Darby', 'Bethenny', 'Lisa Barlow', 'Garcelle', 'Giselle', 'Karen Huger', 'Jen Shah'];

const iconicQuotes = ['I have never been with multiple partners in my life!', "That's my OPINION", "Go to sleep!", "The morally corrupt Faye Resnick", "is Bitch better?", "Say it, forget it, write it, regret it", "You stole my goddamn house!", "Little girl"];

const houseHusband = ["Mauricio", "pk", "kelsey grammar", "harry hamlin", "tom girardi", "coach shah", "slade", "jason", "ken", "ralph"];

const randomHousewife = housewifeNames[Math.floor(Math.random()*housewifeNames.length)];

const randomQuote = iconicQuotes[Math.floor(Math.random()*iconicQuotes.length)];

const randomHusband = houseHusband[Math.floor(Math.random()*houseHusband.length)];


console.log('Welcome to the Random Housewifes Generator');
console.log(`You are: ${randomHousewife}!`);
console.log(`You are married to: ${randomHusband}!`);
console.log(`Your iconic quote is: ${randomQuote}`);
