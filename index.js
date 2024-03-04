const inquirer = require("inquirer");
const { Square, Circle, Triangle } = require("./lib/shapes.js");
const fs = require("fs");

const initialQuestion = {
    type: 'list',
    message: 'What would you like to do?',
    choices: ['Add Shape', 'Exit'],
    name: 'initialChoice'
}

const shapeQuestion = [{
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
    name: 'shapeText'
},
{
    type: 'input',
    message: 'What color would you like the text to be?',
    name: 'shapeTextColor'
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

inquirer.prompt(initialQuestion).then((answer) => {
    //console.log(answer);
    if (answer.initialChoice === 'Add Shape') {

        addShape();

    } else { return }
})
function addShape() {
    inquirer.prompt(shapeQuestion).then((answer) => {

        //console.log(answer);
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
        // const shapeText = newShape.textAttribute();

        const svgData =
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${shapeElement}

            <text x="${answer.textXlocation}" y="${answer.textYlocation}" font-size="${answer.textFontSize}" text-anchor="middle" fill="${answer.shapeTextColor}">${answer.shapeText}</text>

            </svg>`;

            fs.writeFileSync('logo.svg', svgData);
            console.log("Generated logo.svg");
    })
}