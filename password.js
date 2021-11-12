const readline = require('readline');

const user = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const greeting = "Welcome User!"
const instructions = "New password must consist of:\n" +
                        "at least 1 number,\none upper case character,\n" +
                        "one special character," +
                        "and must be no shorter than 10 characters,\n" +
                        "and no longer than 25 characters.";
console.log("\x1b[32m",greeting)
console.log("\x1b[36m",instructions)

user.question("Please enter a new password\n", function (input){
    let userPass = input;
    let length = input.length >= 10 && input.length <= 25;
    const matches = /[!@#$%^&*]/;
    const upperCase = /[A-Z]/;
    const number = /[1234567890]/;
    let meets = input.match(matches);
    let meets2 = input.match(upperCase);
    let meets3  = input.match(number);

    if(length && meets && meets2 && meets3){
        console.log("\x1b[32m","Success!")
    } else {
        console.error("\x1b[31m","Sorry password does not meet requirements.")
    }
    user.close()
});

