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
  ])
  .then((answers) => {
    fs.writeFile("README.md", generateREADME(answers), "utf8", (err) => (err ? console.log("error") : console.log("File written successfully")));
  });

const generateREADME = (obj) => {
  const { title, creatorName, description} = obj;
  const dataFile = 
  //I need to fill out the README's internal structure here
  ``;
  return dataFile;
};
