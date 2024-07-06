import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select courses:",
        choices: ["Ms.office", "HTML", "javascript", "typescript", "python"]
    }
]);
const tutionFee = {
    "Ms.office": 2000,
    "HTML": 1500,
    "javascript": 2500,
    "typescript": 3000,
    "python": 1800
};
console.log(`\nTution Fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "paymentType",
        type: "list",
        message: "Select payment type:",
        choices: ["Bank transfer", "Easy paisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter payment amount:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations! you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View status", "Exit"]
        }
    ]);
    if (ans.select === "View status") {
        console.log("\n********Status*******\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student Id: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("Exciting student management system!");
    }
}
else {
    console.log("Invalid Amount");
}
