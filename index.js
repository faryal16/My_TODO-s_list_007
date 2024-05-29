#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//we will push all todos in this loops.
let todos = [];
let condition = true;
// welcome msg
console.log("~".repeat(50));
console.log(chalk.blue("\n\t\t WELCOME TO MY TODO,s LIST \t\t\n"));
console.log("~".repeat(50));
// In this loop user will ask user  for adding their todos :
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.green("insert your task u wanna add.."),
        },
    ]);
    // if user won't add any todos it will print this message
    if (!answer.todo) {
        console.log(chalk.yellow("firstly add some think\nyour list is currently empty\nlet me know what you wanna add.."));
        condition = answer.todo;
    }
    else {
        // if user add or append their task then this message will print and while loop will start from here
        // it  will push in array whatever added in todos
        todos.push(answer.todo);
        console.log(chalk.green(`"${chalk.red(answer.todo)}"your task has been successfully added to the list.\n`));
        // show  confirmation message that user wanna add  more todos or not .
        let addmoretodo = await inquirer.prompt([
            {
                name: "addmore",
                type: "confirm",
                message: chalk.blue("what do you wanna in your list?"),
                default: "false"
            }
        ]);
        if (condition = addmoretodo.addmore) {
            answer.todo;
        }
        else //(if they saelect no list will stop here)
         {
            console.log(chalk.yellow("\nyour todos list:\n"));
            // it will print our data separatly line by line
            if (todos.length >= 0) {
                todos.forEach((list) => {
                    console.log(chalk.rgb(222, 173, 237)("\n", list));
                });
            }
            else {
                console.log(chalk.greenBright("you add nothing in list..."));
            }
            // and our end
            console.log(chalk.gray("\n\t' list is now structured and finalized accordingly'!\n"));
            let ques = await inquirer.prompt([
                {
                    name: "choice",
                    type: "confirm",
                    message: chalk.rgb(255, 108, 180)("\n\tDo you want to modify your list?"),
                    default: false
                }
            ]);
            if (condition = ques.choice) {
                let addmore = await inquirer.prompt([
                    {
                        name: "select",
                        type: "list",
                        message: chalk.rgb(255, 108, 180)("\n\tWhich operation you want to modify?"),
                        choices: ["Add more", "Delete task", "Update list", "View list", "Exit"]
                    }
                ]);
                if (addmore.select == "Add more") {
                    answer.todos;
                }
                if (addmore.select == "Delete task") {
                    let delettodo = await inquirer.prompt([
                        {
                            name: "delete",
                            type: "list",
                            message: chalk.rgb(255, 108, 180)("\nSelect thre items to delete?"),
                            choices: todos.map((items) => items)
                        }
                    ]);
                    let newtodo = todos.filter(val => val !== delettodo.delete);
                    todos = [...newtodo];
                    console.log((chalk.yellow("\n\tlist of todo's is here:")));
                    todos.forEach((list) => {
                        console.log(chalk.rgb(222, 173, 237)("\n", list));
                    });
                    console.log(chalk.bold.red("\n\t\tYour task has been deleted."));
                    break;
                }
                if (addmore.select == "Update list") {
                    let updatetodo = await inquirer.prompt([
                        {
                            name: "update",
                            type: "list",
                            message: chalk.rgb(255, 108, 180)("\n\tSelect the items for iteration:"),
                            choices: todos.map((items) => items)
                        }
                    ]);
                    let addtodo = await inquirer.prompt([
                        {
                            name: "updatetodo",
                            type: "input",
                            message: chalk.rgb(255, 108, 180)("\n\t update your selected items:"),
                        }
                    ]);
                    let newtodo = todos.filter(val => val !== updatetodo.delete);
                    todos = [addtodo.updatetodo, ...newtodo];
                    console.log((chalk.yellow("\n\tlist of todo's is here:")));
                    todos.forEach((list) => {
                        console.log(chalk.rgb(222, 173, 237)("\n", list));
                    });
                    console.log(chalk.bold.red("\n\t\tYour list has been updated."));
                    break;
                }
                if (addmore.select == "View list") {
                    console.log(chalk.blue("\n\t Your TODO's list:"));
                    todos.forEach((list) => {
                        console.log(chalk.yellow("\n", list));
                    });
                    console.log(chalk.green("\n\t\tThank You !!\t\t\n"));
                    break;
                }
                if (addmore.select == "Exit") {
                    console.log("~".repeat(50));
                    console.log(chalk.blue("\n\t\t Thank You To work with us \t\t\n"));
                    console.log("~".repeat(50));
                    process.exit();
                }
            }
        }
    }
}
