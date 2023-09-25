const inquirer = require("inquirer");
const fs = require("fs");

//The list of questions to ask the user.
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your app's name?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your name?",
      name: "creatorName",
    },
    {
      type: "input",
      message: "How would you describe your app/website? What is it's purpose?",
      name: "description",
    },
    {
      type: "rawlist",
      message: "Would you like to include a 'Table of Contents'?",
      name: tableOfContents,
      choices: ["Yes", "No"],
    },
    {
      type: "input",
      message: "What are the steps required to install your project??",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use your app/website? Describe how to use it?",
      name: "usage",
    },
    {
      type: "rawlist",
      message: "Would you like to leave screenshots of your app in action?",
      name: "screenshots",
      choices: ["Yes", "No"],
    },
    {
      type: "input",
      message: "List any collaborators, third party assets, or resources you used.",
      name: "credits",
    },
    {
      type: "rawlist",
      message: "What type of license did you choose to use for your app? (If you need help choosing look here: https://choosealicense.com/)",
      name: "license",
      choices: ["MIT License", "GNU License", "GPLv3", "Apache License", "No License"],
    },
    {
      type: "input",
      message: "List any badges you want to use here. (If you don't have any write none)",
      name: "badges",
    },
    {
      type: "input",
      message: "What features does your app or website have? List/describe them out here.",
      name: "features",
    },
    {
      type: "input",
      message: "Describe how others can contribute to your app/webite.",
      name: "contribute",
    },
    {
      type: "input",
      message: "How do you conduct tests with your code? Describe how someone can go about conducting tests on your app if you included them.",
      name: "tests",
    },
  ])
  .then((answers) => {
    fs.writeFile("README.md", generateREADME(answers), "utf8", (err) => (err ? console.log("error") : console.log("File written successfully")));
  });

const generateREADME = (obj) => {
  const { title, creatorName, description } = obj;
  const dataFile =
    //I need to fill out the README's internal structure here
    `
  # ${title}

  By ${creatorName}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  ## Installation

  ## Usage

  ## Credits

  ## License

  ## Badges

  ## Features

  ## How to Contribute

  ## Tests
  `;
  return dataFile;
};
