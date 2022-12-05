
// Task-1
function nameAge (name, age) {
    console.log(name.concat(" ", age));
}

nameAge('Talha', 22);

console.log("**--------------------------------**");
// Task-2
function double (num) {
    var multiply = num * 2;
   console.log(multiply);
   
}
double(3);

console.log("**--------------------------------**");
// Task-3
let square = function (num) {
    return num * num;
};
console.log(square(3));

//that function can be used as variable value for other variables.
let x = square(4);
console.log(x);    
// it should display the square of 4.

console.log("**--------------------------------**");
// Task-4
let isAdult = (age) => {
    if(age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("baby");
    }
}

isAdult(19);

console.log("**--------------------------------**");
// Task-5
const sum = (value) => {
    console.log(value + value); 
}

sum(5);