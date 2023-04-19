// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        choices: ['MIT', 'Creative Commons License Family', 'Mozilla Public License 2.0']
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
    },

    {
        name: 'filename',
        type: 'input',
        message: 'Please enter a filename.'
    }
];

// Create a function to generate the markdown file
const generateMarkdown = (data) => {
return `
# ${data.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Author](#author)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Description

${data.description}

[Link to Deployed website](${data.website})

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project has the ${license}.

## Author

${data.realName}
[GitHub](https://github.com/${data.username}/)

## Contributors
Special thanks to:
${data.contributors}

## Tests

${data.test}

## Questions
If you have any questions, my GitHub is [GitHub](https://github.com/${data.username}/).
You can also reach me by email at [${data.email}](${data.email}).
`}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown, function(err){
        err ? console.error() : console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(writeToFile(fileName, data)) 
}

// Function call to initialize app
init();