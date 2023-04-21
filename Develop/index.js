// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'realName',
        type: 'input',
        message: 'What is your real name?'
    },

    {
        name: 'username',
        type: 'input',
        message: 'What is your username?'
    },

    {
        name: 'email',
        type: 'input',
        message: 'What is your email?'
    },

    {
        name: 'website',
        type: 'input',
        message: 'Please enter your deployed website link.'
    },
    
    {
        name: 'title',
        type: 'input',
        message: "What is the title of your project?"
    },

    {
        name: 'description',
        type: 'input',
        message: 'Please enter the description of your project.'
    },

    {
        name: 'installation',
        type: 'input',
        message: 'Please enter installation instructions for this project.'
    },

    {
        name: 'usage',
        type: 'input',
        message: 'Please explain the usage of the project.'
    },

    {
        name: 'license',
        type: 'list',
        message: 'Please select the license to be added to your project. (use arrow keys to navigate)',
        choices: ['MIT', 'IPL_1.0', 'Hippocratic_3.0', 'EPL_1.0', 'Apache_2.0']
    },

    {
        name: 'contributors',
        type: 'input',
        message: 'Please enter any contributors here.'
    },

    {
        name: 'test',
        type: 'input',
        message: 'Please enter test instructions here.'
    }
];

// Create a function to generate the markdown file
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((inquirerResponses) => {
            console.log('generating README...');
            writeToFile('README.md', generateMarkdown({...inquirerResponses}));
        }); 
}

// Function call to initialize app
init();
