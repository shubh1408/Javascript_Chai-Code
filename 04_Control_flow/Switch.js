//Switch case are used to check multiple conditions

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }


const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");  // shift + alt + down arrow to create duplicate
        break;
    case 3:
        console.log("March");
        break;  // if break is not there then it executes all the below conditions except default
    case 4:
        console.log("April");
        break;

    default:
        console.log("NO month");
        break;
}



//Example 2: using text value

const month1 = "Mar"

switch (month1) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("Feburary");  // shift + alt + down arrow to create duplicate
        break;
    case "Mar":
        console.log("March");
        break;  // if break is not there then it executes all the below conditions except default
    case "Apr":
        console.log("April");
        break;

    default:
        console.log("NO month");
        break;
}



