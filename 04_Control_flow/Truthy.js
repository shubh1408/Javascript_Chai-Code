const userEmail = "shubh@gmail.com"

if (userEmail) {
    console.log("Got User Email");
    
} else {
    console.log("Don't have user email");
}


//falsy values : false, 0, -0, bigint, 0n(zero n), "", null, undefined, NaN
//truthy values : "0", 'false' (string) , [] -empth array, {} - empty object, 

const emptyObject = {}

 if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
 }


 // nullish coalescing Operator (??): null undefined

 let val1;
 val1 = 5 ?? 10

 val2 = null ?? 10
 val3 = undefined ?? 10

//  console.log(val1);
console.log(val2);


//Ternary Operator
 
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less than 80"): console.log("more than 80");

