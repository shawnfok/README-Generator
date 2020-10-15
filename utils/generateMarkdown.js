// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}
![GitHub License](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Test](#test)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## License
${data.license}

## Test
${data.test}

## Questions
* GitHub | http://www.github.com/${data.username}
* Email | ${data.email}
`;
}

module.exports = generateMarkdown;
