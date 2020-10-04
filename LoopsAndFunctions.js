//LOOPS
var students = ["Mark", "Susan", "Sarah"];

while (students.length > 0){
let student = students.pop();
console.log(`Hello, ${student}!`);
}

//FUNCTIONS
function timeRemaining(timeElapsed,endTime) {
return (endTime - timeElapsed)/2;
}

var left = timeRemaining(42,240);

left;