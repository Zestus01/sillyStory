const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


let insertX = ['Willy the Goblin', 'Dwayne "THE ROCK" Johnson', 'Bob the Builder', 'Saint Nick'];
let insertY = ['Antartica', 'the Holy Grail', 'Lincoln, Nebraska', 'the Void'];
let insertZ = ['attacked by a white rabbit', 'spontaneously combusted', 'ALAN PLEASE FILL IN LATER', 'smelled what was cooking', 'turned into a slug and crawled away'];

let storyText = 'It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}