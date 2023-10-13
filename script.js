var startGame = document.querySelector('#start-btn')
var selectedCharacter;



function characters(name, health, classBuild, bio) {

    this.name = name;

    this.health = health;
    this.damageTaken = function (amount) {
        this.health -= amount;
    }

    this.classBuild = classBuild;
    this.bio = bio;
};

const character1 = new characters('Bricko', 100, 'big hoss', 'a being made of bricks whose pure talent is defense');
character1.damageTaken(40)
console.log(character1)
const character2 = new characters('JazzLord', 100, 'sound waves', 'a small figther whoes saxsophone can blow out oppents ear drums leaving them knocked out');
const character3 = new characters('Sweet', 100, 'elusive', 'skinny but quick, sweet is hard for an oppent to hit in combat');
const character4 = new characters('Big Toe', 100, 'God Tier', 'Big Toe is litterally a Big Toe, allow him to get one hit and its an automatic win');

function selectCharacter() {
    selectedCharacter = character2;
    console.log('Selected character:', selectedCharacter);
}

startGame.addEventListener('click', function (event) {
    event.preventDefault()
    if (!selectedCharacter) {
        alert('Please select a Character before satrting the game')
        return;
    }
function chooseCharacter() {
    let characterDiv = document.getElementById('character-selection')
    let characters = [character1, character2, character3, character4];
    characters.forEach(function (character) {
        let characterSelectionEl = document.createElement('div');
        characterSelectionEl.className = 'character';
        characterSelectionEl.innerHTML = `
        <h2>${character.name}</h2>
        <p>${character.classBuild}</p>
    `;
    characterSelectionEl.addEventListener('click', function(){
        selectCharacter(character);
    })
    characterSelectionEl.appendchild(characterDiv)
    })
}
    chooseCharacter()
    
})


