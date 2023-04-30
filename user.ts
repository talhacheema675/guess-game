import inquirer from "inquirer";
import chalk from "chalk";


let input=async(user:string,typ:string,chic?:string[])=>
{
    let action= await inquirer.prompt([{ 
        name:"guess",
        type:typ,
        message:chalk.blue(user), 
        choices:chic
        }]);
        return action.guess;
}

async function rand()
{
    let a= Math.random();
    a=a*9;
    a=Math.floor(a);
    console.log("a value = "+a);
    return a;
}
export {input,rand};