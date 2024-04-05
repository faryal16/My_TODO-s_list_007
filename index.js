#! usr/bin/evn node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what do you want to add in yours todos?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "true"
        }
    ]);
    const { todo, addmore } = answer;
    condition = addmore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.log("Kindly enter a valid input.");
    }
}
if (todos.length > 0) {
    console.log("Your todo list:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todo's found.");
}
