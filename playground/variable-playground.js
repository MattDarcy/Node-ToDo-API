var person = {
	name: 'Matt',
	age: 21
}

function updatePerson(obj) {
	// obj = {
	// 	name: 'Andrew',
	// 	age: 24          //stays at 21! Does not update the original
	// };
	obj.age = 24    //updates the original within function

}

updatePerson(person);
console.log(person);


//Array example

var grades = [100, 94];

function addGrade(gradeArray) {
	grades.push(55);
	debugger; //puts a breakpoint in the program, use cont, repl, kill, quit 
	grades = [12, 33, 99]; // does not change grades in function
}

//need a return to pass this.

addGrade(grades);
console.log('Grades array is now ' + grades)
