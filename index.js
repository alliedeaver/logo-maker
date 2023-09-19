const inquirer = require ("inquirer");
const fs = require("fs");
const shape = require("./shapes");


// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

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
            "triangle",
            "circle",
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
    inquirer.prompt (questions) 
    .then((response) => {
            writeToSVG("logo.SVG", shape (response));
    })
    .catch ((error) => {
        console.error(error);
    })
};

// Function call to initialize app


init ();


// const asyncreadData = async () => {

//     try  {  const json = await readFile('./data/post.json', 'utf-8')  
//     const blogData = JSON.parse(json);
//     const post = new BlogPost(
//       blogData.title,
//       blogData.text,
//       blogData.author,
//       blogData.createdOn
//     )}};
  
//     const html = post.render();
  
//     await writeFile('./dist/post.html', html);
        
//     console.log('Created post.html')
  
//    .catch (error) => {
//     console.error(err);
//     console.log("Something went wrong!");
      
//     }
  
//   // TODO: Update the code below so that the exception is caught and a message is logged in the terminal.
  
  
//     f();