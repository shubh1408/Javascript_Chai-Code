// if


if (true) {     // if true then only the code will be accessed
    
}

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("Logged In");
}

// < , >, <= , >=, ==, !=, ===

if (2 != 3) {
    console.log("Logged In 1");
}

const temperature = 41   //let is used inside scope

if (temperature <= 50) {
    console.log("Temp less than 50");
} else {
    console.log("Temp greater than 50");
}

//Example



//Examples:'

const userLoggedIn = true

const debitCard = true
const loggedInFromGoogle = false
const loggedInFromGmail = true

if ( userLoggedIn && debitCard) {
    console.log("Allowed to buy course");
}

if (loggedInFromGoogle || loggedInFromGmail || debitCard) {
    console.log("User logged in");
}