// TODO: Include packages needed for this application
const inquirer = require('inquierer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'username',
        type: 'input',
        message: 'What is your username?'
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
        choices: [''],
        default: 'MIT'
    }

    {
        name: 'contributors',
        type: 'input',
        message: 'Please enter any contributors here.'
    }

    {
        name: 'test',
        type: 'input',
        message: 'Please enter test instructions here.'
    }
];

// Create a function to generate the markdown file
const generateMarkdown = `

# ${data.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
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



## Contributors
Special thanks to:
${data.contributors}

## Tests

${data.test}

## Questions

`

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
