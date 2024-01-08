import inquirer from "inquirer";
let loop = true;
while (loop) {
    const ans = await inquirer.prompt([{
            type: "number",
            name: "num",
            message: "please guess num b\w (1-10)"
        },
        {
            type: "confirm",
            name: "retry",
            message: "Do you want to play again? (Y or N)",
            default: false
        }]);
    const { num, retry } = ans;
    const machineguess = Math.floor(Math.random()) * 10;
    if (num === machineguess) {
        console.log("congratulation you win");
    }
    else {
        console.log("Better luck try again");
    }
    loop = retry;
}
