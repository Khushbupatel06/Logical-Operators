const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid password!")
} else {
    console.log("Incorrect format for password!")
}

const mystery = 'summer07'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

const age = 6;
if (age >= 0 && age < 5 || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10");
} else if (age >= 10 && age < 65) {
    console.log("$20");
} else {
    console.log("Invalid Age!")
}

let firstName = prompt("enter your first name");
if (!firstName) {
    firstName = prompt("TRY AGAIN!!!");
}

const age = 10;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are Not a baby or a senior!");
}

// SWICH STATEMENT
const day = 10;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("I DONT KNOW THAT!")
}


if (day === 1) {
    console.log("MONDAY")
}
else if (day === 2) {
    console.log("TUESDAY")
}
else if (day === 3) {
    console.log("WEDNESDAY")
}
else if (day === 4) {
    console.log("THURSDAY")
}
else if (day === 5) {
    console.log("FRIDAY")
}
else if (day === 6) {
    console.log("SATURDAY")
}
else if (day === 7) {
    console.log("SUNDAY")
} else {
    console.log("I do not know that!")
}