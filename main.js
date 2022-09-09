const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let insertX = [
    'Willy the Goblin',
    'Dwayne "THE ROCK" Johnson',
    'Bob the Builder',
    'Saint Nick',
    'Waluigi'
];

let insertY = [
    'Antartica', 
    'the Holy Grail', 
    'Lincoln, Nebraska',
    'the Void'
];

let insertZ = [
    'got attacked by a white rabbit',
    'they spontaneously combusted',
    'ALAN PLEASE FILL IN LATER',
    'smelled what was cooking',
    'they turned into a slug and crawled away'
];

let insertSillyWeight = [
    'the weight of a blackhole',
    '20 horses', 
    'a Grande Mocha Cookie Crumble Frappuccino from Starbucks',
    '4 60 pounds burritos'  
];

let insertSillyTemp = [
    'of a dying star',
    'generated from the friction of coding this an hour before demo was due',
    'of my 2 braincells colliding together',
    'from dancing to Rasputin by Boney M.',
];

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

randomize.addEventListener("click", result);

function result() {
    let newStory = storyText;
    if (customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        const weight = (Math.round(300 * 0.0714286)) + ' stones';
        const temperature = (Math.round((94 - 32) * (5/9)))+ ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    if (document.getElementById("silly").checked){
        let sillyWeight = randomValueFromArray(insertSillyWeight);
        newStory = newStory.replace('300 pounds', 'about the same as ' + sillyWeight);
        let sillyTemp = randomValueFromArray(insertSillyTemp);
        newStory = newStory.replace('94 fahrenheit', 'hot, like the heat '+ sillyTemp);
    }
    
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    
    // Just some specail cases for the item additions
    if(xItem === 'Waluigi' && customName.value === ''){
        newStory = newStory.replace('Bob', 'Luigi');
    }
    if(yItem === 'the Void'){
        newStory = newStory.replace("moments", "moments for the Void stared back")
    }

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    story.textContent = newStory;
    story.style.visibility = "visible";
}
