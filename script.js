const inquirer = require('inquirer')
const iWantTheBadge = 'gimmegimme';

// var startGame = document.querySelector('#start-btn')
var selectedCharacter;

function Game() {
    this.turn = 0;
    this.selectedCharacters = [];

    this.start = function () { };
    this.quit = function () { };
    this.printStats = function () { };
    // function that builds characters based on the user entry and the creates a bot charcter that the computer controls as well
    this.createCharacter = function () {
        inquirer
            .prompt([
                {
                    name: 'name',
                    message: 'What is your characters name?',
                    type: 'input'
                },
                
                {
                    name: 'classBuild',
                    message: 'What is you characters Class/Type?',
                    type: 'input'
                },
                {
                    name: 'bio',
                    message: 'Describe your charcter',
                    type: 'input'
                },
            ])
            .then(function (answers) {
                console.log(answers);

                const you = new Character(
                    answers.name,
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 40),
                    answers.classBuild,
                    answers.bio
                );

                const computer = new Character(
                    "Enemy",
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 50),
                    "Enemy Class",
                    "From the depths of hell"
                );

                console.log(you);
                console.log(computer);

                you.dealDamage(computer);
                computer.dealDamage(you);

                console.log(you);
                console.log(computer);
            });
    }
}

// function that allows you to build charcters
function Character(name, health, attack, classBuild, bio) {

    this.name = name;
    this.attack = attack;
    this.health = health;
    this.damageTaken = function (amount) {
        this.health -= amount;

        if (this.health <= 0) {
            console.log(this.name + " has been defeated!");
            game.end
        }
    }
    this.dealDamage = function (character) {
        character.damageTaken(this.attack);
    };
    this.classBuild = classBuild;
    this.bio = bio;
};

const game = new Game();
game.createCharacter();

