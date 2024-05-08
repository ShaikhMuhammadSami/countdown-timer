#! /usr/bin/env node

import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns";
import chalk from "chalk";
import inquirer from "inquirer";



const res = await inquirer.prompt([
  {
    name: "userinput",
    type: "number",
    message: chalk.bold.magentaBright("Please Enter The Amount Of seconds !!!"),
    validate: (input) => {
      if (isNaN(input)) {
        return "Please Enter A Valid Number";
      } else if (input > 60) {
        return "Seconds Must Be Less Than or Equal to 60";
      } else {
        return true;
      }
    },
  },
]);

const input = res.userinput;

function displayTime(timeDiff: number) {
  if (timeDiff <= 0) {
    console.log(chalk.yellowBright(`Timer Has Expired`));
    process.exit();
  }

  const min = Math.floor(timeDiff / 60);
  const sec = timeDiff % 60;
  console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
}

function countdown(val: number) {
  let timeDiff = val;
  const interval = setInterval(() => {
    displayTime(timeDiff);
    timeDiff--;

    if (timeDiff < 0) {
      clearInterval(interval);
    }
  }, 1000);
}

countdown(input);









