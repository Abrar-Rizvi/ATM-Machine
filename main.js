#! /usr/bin/env node
//creating a ATM Maching program.
import inquirer from "inquirer";
let currentBal = 10000; // Amount in dollar.
let myPin = 4444; //atm card pin
console.log(`Your current balance is ${currentBal}`); //it shows your curent balance on the top
// ist question for taking Atm pin from user
const ans = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your ATM Card No :",
        type: "number"
    }
]);
//writing if-else version to check wheather entered pin is correct or not.
if (ans.pin === myPin) {
    console.log("Correct Pin.");
    // if pin is correct, 2nd question is to ask about your choices
    let takenChoice = await inquirer.prompt([
        {
            name: "options",
            message: "Select an option one of the following?",
            type: "list",
            choices: ["Withdraw", "Check balance", "Fast cash"],
        }
    ]);
    // if you chose withdraw option then 3rd quetion will be asked for your amout you want to withdraw
    if (takenChoice.options === "Withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        // it will give msg if you put exceed amount than current balance otherwise it will show current bl after withdrawing
        if (withdrawAns.amount > currentBal) {
            console.log("Insufficient balance");
        }
        else {
            currentBal -= withdrawAns.amount;
            console.log(`Your current balance is ${currentBal}`);
        }
        // if you chose check balance  option then it will let you know yur current blc
    }
    else if (takenChoice.options === "Check balance") {
        console.log(`Your current balance is ${currentBal}`);
    }
    else if (takenChoice.options === "Fast cash") { //if you select fast cash feature it will give you some options
        let fastCaFea = await inquirer.prompt([
            {
                name: "fastCashOptions",
                message: "Select any amout",
                type: "list",
                choices: ["3000", "5000", "10000", "8000", "9000"]
            }
        ]);
        if (fastCaFea.fastCashOptions === "3000") { // selectiong 3000 it will show current bls 7000
            currentBal -= fastCaFea.fastCashOptions;
            console.log(`your current balance is ${currentBal} after withdrawing 3000`);
        }
        else if (fastCaFea.fastCashOptions === "5000") { // selectiong 3000 it will show current bls 5000
            currentBal -= fastCaFea.fastCashOptions;
            console.log(`your current balance is ${currentBal} after withdrawing 5000`);
        }
        else if (fastCaFea.fastCashOptions === "10000") { // selectiong 3000 it will show current bls 0
            currentBal -= fastCaFea.fastCashOptions;
            console.log(`your current balance is ${currentBal} after withdrawing 10000`);
        }
        else if (fastCaFea.fastCashOptions === "8000") { // selectiong 3000 it will show current bls 2000
            currentBal -= fastCaFea.fastCashOptions;
            console.log(`your current balance is ${currentBal} after withdrawing 8000`);
        }
        else { // selectiong 3000 it will show current bls 1000
            currentBal -= fastCaFea.fastCashOptions;
            console.log(`your current balance is ${currentBal} after withdrawing 9000`);
        }
    }
    //if given pin is incorrect at start it will request to put correct pin again
}
else {
    console.log("Wrong! Please put your correct pin");
}
//after compeletion program, it will say to put pin again for further use
console.log("Kindly use again your atm card for further features");
