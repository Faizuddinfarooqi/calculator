import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "enter first no: "
    },
    {
        type: "number",
        name: "numbertwo",
        message: "enter second no: "
    },
    {
        type: "string",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "enter anyone you want +,-,*,/: "
    },
]);
const { numberone, numbertwo, operator } = ans;
let result = 0;
if (numberone && numbertwo && operator) {
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    else if (operator === "*") {
        result = numberone * numbertwo;
    }
    else if (operator === "/") {
        result = numberone / numbertwo;
    }
    console.log("your result is :", result);
}
else {
    console.log("enter valid operator");
}
