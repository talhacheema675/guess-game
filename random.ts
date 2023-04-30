import inquirer from "inquirer";
import chalk, { colorNames } from "chalk";
import { input,rand } from "./user.js";
import figlet from "figlet"
console.log(chalk.yellow.bold(figlet.textSync("Welcome to Guess Game")))
let count=0;

for(let i=0;i>=0;i++)
{

let action= await input("\nPlease select the desired option\n","rawlist",["play game","view score","exit"]);
if(action=="play game")
{
    
    let a=await rand();
    let num=await input('\nplease write your guess number between 0-9: \n',"number")
    if(a==num)
    {
        console.log(chalk.bgRed("congratulation you win\n"))
        count++;
    }
    else{
        console.log(chalk.yellow.bold(`sorry you lose the real number is : ${a}\n`));
    }

    }
    else if(action=="view score")
    {
        console.log(`your score is: ${count}\n`);
    }
    else if(action=="exit")
    {
        console.log(chalk.red(`your total score is ${count} in ${i} rounds\n`))
        break;
    }

}