//create variables for proper inclusion of packages we need 

const inquirer = request ("inquirer");
const fs = request("fs");
const shapes = require("./lib/shapes");


//function to generate the new shapes

function generateShape(response) {

    const { Characters, Colors, Shapes, ShapeColor} = response
    if (Shapes == "circle") {
        let newCircle = new Circle(Characters, Colors, Shapes, ShapeColor)
        return newCircle.render();
    } if (Shapes == "triangle") {
        let newTriangle = new Triangle(Characters, Colors, Shapes, ShapeColor)
        return newTriangle.render();
    } if (Shapes == "square") {
        let newSquare = new Square(Characters, Colors, Shapes, ShapeColor)
        return newSquare.render();
    }
}

//questions that user will answer to generate the logo

const questions = [
    {
        type: "input",
        message: "Enter 3 characters for your logo.",
        name: "Characters",
    },


    {
        type: "input",
        message: "What color would you like for your text?",
        name: "Color",
    },


    {
        type: "list",
        message: "What shape would you like?",
        name: "Shapes",
        choices: [
            "circle",
            "triangle",
            "square"
        ]
    },


    {
        type: "input",
        message: "what color do you want for your shape?",
        name: "ShapeColor",
        //make sure it comes out an error if they spell it wrong
    },


];


// TODO: Create a function to make the logo


const writeToSVG = (filename, data) => {
    fs.writeSVG(filename, data, (err) => {
        if(err) {
            return console.error(err);
        }
        console.log('See your logo!');
    })
};

    

// TODO: Create a function to initialize app
// function init() { }

const init = () => {
    inquirer
    .prompt (questions) 
    .then((response) => {
            writeToSVG("logo.SVG", generateShape(response));
    })
    .catch ((error) => {
        console.error(error);
    })
};

// Function call to initialize app


init ();

