// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide usage information for your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines for your project.',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please provide test instructions for your project.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please select a license for your project.',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Boost Software License', 'Creative Commons Zero v1.0 Universal', 'None'],
    },
    {
        type: 'input',
        message: 'Please provide your GitHub username.',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'email',
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => writeToFile('README.md', response))
}

// Function call to initialize app
init();
