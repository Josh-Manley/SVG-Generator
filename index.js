// all required dependencies 
const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./lib/shapes.js");
const fs = require("fs");

//question for deciding to start application or exit
const startAppQuestion = {
    type: 'list',
    message: 'What would you like to do?',
    choices: ['Create SVG', 'Exit'],
    name: 'startChoice'
}
// question prompts for svg attributes
const svgQuestions = [{
    type: 'list',
    message: 'What shape would you like to add?',
    choices: ['Circle', 'Square', 'Triangle'],
    name: 'shapeChoice'
},
{
    type: 'input',
    message: 'What color would you like the shape to be?',
    name: 'shapeColor'
},
{
    type: 'input',
    message: 'What text would you like in your SVG? (recommended 3 characters for best results)',
    name: 'svgText'
},
{
    type: 'input',
    message: 'What color would you like the text to be?',
    name: 'svgTextColor'
},
{
    type: 'input',
    message: 'Type an "X" coordinate for text',
    name: 'textXlocation'
},
{
    type: 'input',
    message: 'Type a "Y" coordinate for text',
    name: 'textYlocation'
},
{
    type: 'input',
    message: 'Type text font size',
    name: 'textFontSize'
}
]
// code for starting app or exiting based on user answer
inquirer.prompt(startAppQuestion).then((answer) => {
    //console.log(answer);
    if (answer.startChoice === 'Create SVG') {

        addShape();

    } else { return }
})
// code for choosing which shape to use and color of shape for svg based on user answer
function addShape() {
    inquirer.prompt(svgQuestions).then((answer) => {

        let newShape;

        if (answer.shapeChoice === 'Circle') {
             newShape = new Circle(answer.shapeColor);
        } else if (answer.shapeChoice === 'Square') {
             newShape = new Square(answer.shapeColor);
        } else {
             newShape = new Triangle(answer.shapeColor);
        }

        newShape.setColor(answer.shapeColor);
        const shapeElement = newShape.render();

        // data for new file from answers given by user input
        const svgData =
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${shapeElement}

            <text x="${answer.textXlocation}" y="${answer.textYlocation}" font-size="${answer.textFontSize}" text-anchor="middle" fill="${answer.svgTextColor}">${answer.svgText}</text>

            </svg>`;
        //code to write new file with file name and a variable of data to put into file
            fs.writeFileSync('logo.svg', svgData);
            console.log("Generated logo.svg");
    })
}