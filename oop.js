import inquirer  from "inquirer";

class Person {
    constructor(name, personalityType) {
        this.name = name;
        this.personality = 'Mystery';
        if (personalityType === 1) {
            this.personality = 'Extrovert';
        } else if (personalityType === 2) {
            this.personality = 'Introvert';
        }
    }

    printPerson() {
        console.log(`${this.name}, Your Personality is ${this.personality}`);
    }
}

async function createPerson() {
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Enter your name: '
    });

    const { personalityType } = await inquirer.prompt({
        type: 'input',
        name: 'personalityType',
        message: 'Choose your personality type (Enter 1 for Extrovert, 2 for Introvert, any other key for Mystery): ',
        filter: function(val) {
            return parseInt(val);
        }
    });

    const person = new Person(name, personalityType);
    person.printPerson();
}

createPerson();
