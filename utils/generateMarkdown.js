// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (license === 'Apache') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  else if (license === 'GPL') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  else if (license === 'BSD') {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  }
  else if (license === 'Boost Software License') {
    return `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
  }
  else if (license === 'Creative Commons Zero v1.0 Universal') {
    return `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  }
  else if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`;
  }
  else if (license === 'GPL') {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  }
  else if (license === 'BSD') {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  }
else if (license === 'Boost Software License') {
    return `https://www.boost.org/LICENSE_1_0.txt`;
  }
  else if (license === 'Creative Commons Zero v1.0 Universal') {
    return `http://creativecommons.org/publicdomain/zero/1.0/`;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license === 'None') {
    return '';
  }
  else {
    return `this project is licensed under the ${license} license.`;
}}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

${data.description}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)
* [GitHub](#github)


## Installation

${data.installation}


## Usage

${data.usage}


## Contribution Guidelines

${data.contribution}


## Test Instructions

${data.test}


## License

${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}


## Questions

If you have any questions, please contact me at ${data.email}.


## GitHub

You can find my GitHub profile at ${data.github}.


`;
}

module.exports = generateMarkdown;
